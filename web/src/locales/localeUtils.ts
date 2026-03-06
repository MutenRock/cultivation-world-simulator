export type LocaleCode = 'zh-CN' | 'zh-TW' | 'en-US' | 'fr-FR';

const SUPPORTED_LOCALES: LocaleCode[] = ['zh-CN', 'zh-TW', 'en-US', 'fr-FR'];

export const normalizeLocale = (raw: string | null | undefined, fallback: LocaleCode = 'zh-CN'): LocaleCode => {
  if (!raw) return fallback;

  const normalized = raw.replace('_', '-').toLowerCase();
  const match = SUPPORTED_LOCALES.find((lang) => lang.toLowerCase() === normalized);

  return match || fallback;
};

export const getHtmlLang = (lang: LocaleCode): string => {
  const langMap: Record<LocaleCode, string> = {
    'zh-CN': 'zh-CN',
    'zh-TW': 'zh-TW',
    'en-US': 'en',
    'fr-FR': 'fr'
  };

  return langMap[lang] || 'en';
};
