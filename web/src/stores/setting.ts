import { defineStore } from 'pinia';
import { ref } from 'vue';
import i18n from '../locales';
import { getHtmlLang, normalizeLocale, type LocaleCode } from '../locales/localeUtils';
import { systemApi } from '../api/modules/system';

type RuntimeLocaleCode = 'zh-CN' | 'en-US';
type DataLocaleCode = 'zh-CN' | 'fr-FR';

function normalizeRuntimeLocale(raw: string | null | undefined, fallback: RuntimeLocaleCode = 'zh-CN'): RuntimeLocaleCode {
  const normalized = normalizeLocale(raw, fallback);
  return normalized === 'en-US' ? 'en-US' : 'zh-CN';
}

function normalizeDataLocale(raw: string | null | undefined, fallback: DataLocaleCode = 'zh-CN'): DataLocaleCode {
  const normalized = normalizeLocale(raw, fallback as LocaleCode);
  return normalized === 'fr-FR' ? 'fr-FR' : 'zh-CN';
}

export const useSettingStore = defineStore('setting', () => {
  const uiLocale = ref<LocaleCode>(normalizeLocale(localStorage.getItem('app_locale')));

  // Translation target locale for optional local event translation in frontend.
  const translationLocale = ref<LocaleCode>(
    normalizeLocale(localStorage.getItem('app_translation_locale'), uiLocale.value)
  );

  // Runtime/backend mode is intentionally restricted to CN or EN.
  const runtimeLocale = ref<RuntimeLocaleCode>(
    normalizeRuntimeLocale(localStorage.getItem('app_runtime_locale'))
  );

  // Data set locale selector (currently CN / FR).
  const dataLocale = ref<DataLocaleCode>(
    normalizeDataLocale(localStorage.getItem('app_data_locale'))
  );

  // Local translation is disabled by default.
  const localEventTranslationEnabled = ref(localStorage.getItem('app_local_event_translation') === '1');

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
    uiLocale.value = lang;
    localStorage.setItem('app_locale', lang);
    if (i18n.mode === 'legacy') {
      (i18n.global.locale as any) = lang;
    } else {
      (i18n.global.locale as any).value = lang;
    }

    document.documentElement.lang = getHtmlLang(lang);
  }

  async function setTranslationLocale(lang: LocaleCode) {
    translationLocale.value = lang;
    localStorage.setItem('app_translation_locale', lang);
  }

  async function setRuntimeLocale(lang: RuntimeLocaleCode) {
    runtimeLocale.value = lang;
    localStorage.setItem('app_runtime_locale', lang);
    await syncBackend();
  }

  function setDataLocale(lang: DataLocaleCode) {
    dataLocale.value = lang;
    localStorage.setItem('app_data_locale', lang);
  }

  function setLocalEventTranslationEnabled(enabled: boolean) {
    localEventTranslationEnabled.value = enabled;
    localStorage.setItem('app_local_event_translation', enabled ? '1' : '0');
  }

  async function syncBackend() {
    try {
      await systemApi.setLanguage(runtimeLocale.value);
    } catch (e) {
      console.warn('Failed to sync language with backend:', e);
    }
  }

  return {
    locale,
    uiLocale,
    translationLocale,
    runtimeLocale,
    dataLocale,
    localEventTranslationEnabled,
    setLocale,
    setTranslationLocale,
    setRuntimeLocale,
    setDataLocale,
    setLocalEventTranslationEnabled,
    syncBackend,
    sfxVolume,
    bgmVolume,
    setSfxVolume,
    setBgmVolume
  };
});
