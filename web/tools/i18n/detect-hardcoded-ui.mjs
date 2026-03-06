#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { parse as parseSfc } from '@vue/compiler-sfc';
import { parse as parseTemplate, NodeTypes } from '@vue/compiler-dom';

const SRC_DIR = path.resolve(process.cwd(), 'src');
const ATTR_ALLOW = new Set(['placeholder', 'title', 'aria-label', 'aria-placeholder', 'alt', 'label']);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(p));
    } else if (entry.isFile() && p.endsWith('.vue')) {
      out.push(p);
    }
  }
  return out;
}

function hasText(str) {
  const t = str.replace(/\s+/g, ' ').trim();
  if (!t) return false;
  return /[A-Za-zÀ-ÖØ-öø-ÿ\u4E00-\u9FFF]/.test(t);
}

function traverse(node, file, offenders) {
  if (!node) return;

  if (node.type === NodeTypes.TEXT && hasText(node.content)) {
    offenders.push({ file, kind: 'text', text: node.content.trim(), loc: node.loc });
  }

  if (node.type === NodeTypes.ELEMENT) {
    for (const prop of node.props || []) {
      if (prop.type === NodeTypes.ATTRIBUTE) {
        const name = (prop.name || '').toLowerCase();
        const value = prop.value?.content ?? '';
        if (ATTR_ALLOW.has(name) && hasText(value)) {
          offenders.push({ file, kind: `attr:${name}`, text: value.trim(), loc: prop.loc });
        }
      }
    }
    for (const child of node.children || []) {
      traverse(child, file, offenders);
    }
  } else {
    for (const child of node.children || []) {
      traverse(child, file, offenders);
    }
  }
}

const offenders = [];
for (const file of walk(SRC_DIR)) {
  const source = fs.readFileSync(file, 'utf-8');
  const sfc = parseSfc(source, { filename: file });
  const tpl = sfc.descriptor.template?.content;
  if (!tpl) continue;

  const ast = parseTemplate(tpl, { comments: false });
  traverse(ast, file, offenders);
}

if (offenders.length) {
  console.error(`[i18n] Hardcoded template strings: ${offenders.length}`);
  for (const o of offenders.slice(0, 80)) {
    const pos = o.loc?.start ? `:${o.loc.start.line}:${o.loc.start.column}` : '';
    console.error(`- ${o.file}${pos} (${o.kind}) \"${o.text.replace(/\s+/g, ' ')}\"`);
  }
  process.exit(1);
}

console.log('[i18n] OK: no hardcoded template strings detected');
