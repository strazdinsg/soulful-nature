import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import enCommon from "../../public/locales/en/common.json";
import noCommon from "../../public/locales/no/common.json";

const resources = {
  en: {
    common: enCommon,
  },
  no: {
    common: noCommon,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
