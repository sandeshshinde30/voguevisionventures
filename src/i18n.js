import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en", // Set default fallback language to English
    lng: localStorage.getItem("i18nextLng") || "en", // Get the saved language from localStorage
    retunObjects:true,
    resources: {
      en: {
        translation: {
          title: "Vogue Vision Ventures",
        },
      },
      mr: {
        translation: {
          title: "व्होग व्हिजन व्हेंचर्स",
        },
      },
    },
    detection: {
      order: ["localStorage", "navigator"], // Check localStorage first, then browser language
      caches: ["localStorage"], // Cache the selected language in localStorage
    },
  });

export default i18n;
