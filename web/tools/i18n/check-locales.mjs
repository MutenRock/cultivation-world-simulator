#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const LOCALES_DIR = path.resolve(process.cwd(), 'src', 'locales');
const BASE_LOCALE = 'en-US';
const TARGET_LOCALES = ['fr-FR'];

function isObject(v) {
  return v && typeof v === 'object' && !Array.isArray(v);
}

function flatten(obj, prefix = '') {
  const out = new Map();

  if (Array.isArray(obj)) {
    obj.forEach((v, i) => {
      for (const [k, val] of flatten(v, `${prefix}[${i}]`).entries()) {
        out.set(k, val);
      }
    });
    return out;
  }

  if (isObject(obj)) {
    for (const [k, v] of Object.entries(obj)) {
      const next = prefix ? `${prefix}.${k}` : k;
      for (const [kk, val] of flatten(v, next).entries()) {
        out.set(kk, val);
      }
    }
    return out;
  }

  out.set(prefix, obj);
  return out;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function listJsonFiles(locale) {
  const dir = path.join(LOCALES_DIR, locale);
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort();
}

const baseFiles = listJsonFiles(BASE_LOCALE);
if (!baseFiles.length) {
  console.error(`[i18n] Base locale '${BASE_LOCALE}' has no JSON files in ${LOCALES_DIR}`);
  process.exit(2);
}

let failed = false;

for (const locale of TARGET_LOCALES) {
  const files = listJsonFiles(locale);
  const missingFiles = baseFiles.filter((f) => !files.includes(f));
  const extraFiles = files.filter((f) => !baseFiles.includes(f));

  if (missingFiles.length) {
    failed = true;
    console.error(`[i18n] ${locale}: missing files -> ${missingFiles.join(', ')}`);
  }

  if (extraFiles.length) {
    failed = true;
    console.error(`[i18n] ${locale}: extra files -> ${extraFiles.join(', ')}`);
  }

  for (const file of baseFiles) {
    if (!files.includes(file)) {
      continue;
    }

    const baseFlat = flatten(readJson(path.join(LOCALES_DIR, BASE_LOCALE, file)));
    const targetFlat = flatten(readJson(path.join(LOCALES_DIR, locale, file)));

    const missing = [...baseFlat.keys()].filter((k) => !targetFlat.has(k));
    const extra = [...targetFlat.keys()].filter((k) => !baseFlat.has(k));

    if (missing.length) {
      failed = true;
      console.error(`[i18n] ${locale}/${file}: missing keys -> ${missing.slice(0, 10).join(', ')}${missing.length > 10 ? ' ...' : ''}`);
    }

    if (extra.length) {
      failed = true;
      console.error(`[i18n] ${locale}/${file}: extra keys -> ${extra.slice(0, 10).join(', ')}${extra.length > 10 ? ' ...' : ''}`);
    }
  }
}

if (failed) {
  process.exit(1);
}

console.log('[i18n] OK: fr-FR matches en-US');
