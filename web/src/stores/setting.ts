import { defineStore } from 'pinia';
import { ref } from 'vue';
import i18n from '../locales';
import { getHtmlLang, normalizeLocale, type LocaleCode } from '../locales/localeUtils';
import { systemApi } from '../api/modules/system';

export const useSettingStore = defineStore('setting', () => {
  const uiLocale = ref<LocaleCode>(normalizeLocale(localStorage.getItem('app_locale')));
  const translationLocale = ref<LocaleCode>(
    normalizeLocale(localStorage.getItem('app_translation_locale'), uiLocale.value)
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

  async function setLocale(lang: LocaleCode) {
    // 1. Optimistic UI update
    uiLocale.value = lang;
    localStorage.setItem('app_locale', lang);
    if (i18n.mode === 'legacy') {
      (i18n.global.locale as any) = lang;
    } else {
      (i18n.global.locale as any).value = lang;
    }

    // Update HTML lang attribute for accessibility.
    document.documentElement.lang = getHtmlLang(lang);
  }

  async function setTranslationLocale(lang: LocaleCode) {
    translationLocale.value = lang;
    localStorage.setItem('app_translation_locale', lang);
    await syncBackend();
  }
  
  async function syncBackend() {
    try {
      await systemApi.setLanguage(translationLocale.value);
    } catch (e) {
      console.warn('Failed to sync language with backend:', e);
    }
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
