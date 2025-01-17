import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "mr", lang: "Marathi" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation(); // Correctly initialize i18n from useTranslation

  function changeLanguage(code) {
    i18n.changeLanguage(code); // Change the language using i18n
  }

  return (
    <div className="flex gap-5 justify-center mt-10">
      {languages.map((lng) => (
        <button
          key={lng.code}
          className={`flex text-xl rounded-md p-2 text-center text-white ${
            lng.code === i18n.language ? "bg-green-500" : "bg-dark-green"
          }`}
          onClick={() => changeLanguage(lng.code)}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
}
