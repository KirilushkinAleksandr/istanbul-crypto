import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from "../locales/en/translation.json";
import translationTR from "../locales/tr/translation.json";
import translationRU from "../locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
  });


export default i18n;