import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import languageEN from './locate/en/translate.json';
import languageDE from './locate/de/translate.json';
import languageRU from './locate/ru/translate.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: languageEN,
      de: languageDE,
      ru: languageRU,
    },
    /* default language when load the website in browser */
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: 'ru',
    /* debugger For Development environment */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });

export default i18n;
