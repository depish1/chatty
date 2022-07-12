import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import translations from './translations';
import { getKeys } from 'utils/getKeys';

let english = {};
let polish = {};

getKeys(translations).forEach(key => {
  english = { ...english, [key]: translations[key].en };
  polish = { ...polish, [key]: translations[key].pl };
});

i18next.use(initReactI18next).init({
  lng: navigator.language.includes('pl') ? 'pl' : 'en',
  resources: {
    en: { translation: english },
    pl: { translation: polish },
  },
});

export default i18next;
