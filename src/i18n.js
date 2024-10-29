// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationKY from './locales/ky/translation.json';

const resources = {
    en: { translation: translationEN },
    ru: { translation: translationRU },
    ky: { translation: translationKY },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ky', // язык по умолчанию
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // не нужно для React
        },
    });

export default i18n;
