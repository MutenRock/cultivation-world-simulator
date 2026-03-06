import { defineStore } from 'pinia';
import { ref } from 'vue';
import i18n from '../locales';
import { systemApi } from '../api/modules/system';

type LocaleCode = 'zh-CN' | 'zh-TW' | 'en-US' | 'fr-FR';

const getHtmlLang = (lang: LocaleCode) => {
  const langMap: Record<LocaleCode, string> = {
    'zh-CN': 'zh-CN',
    'zh-TW': 'zh-TW',
    'en-US': 'en',
    'fr-FR': 'fr'
  };
  return langMap[lang] || 'en';
};

export const useSettingStore = defineStore('setting', () => {
  const uiLocale = ref<LocaleCode>((localStorage.getItem('app_locale') as LocaleCode) || 'zh-CN');
  const translationLocale = ref<LocaleCode>(
    (localStorage.getItem('app_translation_locale') as LocaleCode) || uiLocale.value
  );

  // Backward compatibility for existing references.
  const locale = uiLocale;
  
  // Sound settings
  const sfxVolume = ref(parseFloat(localStorage.getItem('app_sfx_volume') || '0.5'));
  const bgmVolume = ref(parseFloat(localStorage.getItem('app_bgm_volume') || '0.5'));

  function setSfxVolume(volume: number) {
    sfxVolume.value = volume;
    localStorage.setItem('app_sfx_volume', String(volume));
  }

  function setBgmVolume(volume: number) {
    bgmVolume.value = volume;
    localStorage.setItem('app_bgm_volume', String(volume));
  }

<<<<<<< ours
  async function setLocale(lang: 'zh-CN' | 'zh-TW' | 'en-US' | 'fr-FR') {
=======
  async function setLocale(lang: LocaleCode) {
>>>>>>> theirs
    // 1. Optimistic UI update
    uiLocale.value = lang;
    localStorage.setItem('app_locale', lang);
    if (i18n.mode === 'legacy') {
      (i18n.global.locale as any) = lang;
    } else {
      (i18n.global.locale as any).value = lang;
    }
<<<<<<< ours
    // Update HTML lang attribute for accessibility
    const langMap: Record<string, string> = {
      'zh-CN': 'zh-CN',
      'zh-TW': 'zh-TW',
      'en-US': 'en',
      'fr-FR': 'fr'
    };
    document.documentElement.lang = langMap[lang] || 'en';

    // 2. Sync with backend
=======

    // Update HTML lang attribute for accessibility.
    document.documentElement.lang = getHtmlLang(lang);
  }

  async function setTranslationLocale(lang: LocaleCode) {
    translationLocale.value = lang;
    localStorage.setItem('app_translation_locale', lang);
>>>>>>> theirs
    await syncBackend();
  }
  
  async function syncBackend() {
<<<<<<< ours
      try {
          const backendLang = locale.value === 'fr-FR' ? 'en-US' : locale.value;
          await systemApi.setLanguage(backendLang);
      } catch (e) {
          console.warn('Failed to sync language with backend:', e);
      }
=======
    try {
      await systemApi.setLanguage(translationLocale.value);
    } catch (e) {
      console.warn('Failed to sync language with backend:', e);
    }
>>>>>>> theirs
  }

  return {
    locale,
    uiLocale,
    translationLocale,
    setLocale,
    setTranslationLocale,
    syncBackend,
    sfxVolume,
    bgmVolume,
    setSfxVolume,
    setBgmVolume
  };
});
