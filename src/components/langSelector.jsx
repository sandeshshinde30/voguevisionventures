import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "mr", lang: "मराठी" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation(); // Correctly initialize i18n from useTranslation

  function changeLanguage(code) {
    i18n.changeLanguage(code); // Change the language using i18n
  }

  return (
    <div className="flex gap-2 justify-center items-end text-center">
      {languages.map((lng) => (
        <button
          key={lng.code}
          className={`flex justify-center items-center w-[50px] h-[30px] text-[11px] mt-1 rounded-md p-2 shadow-lg border-[1px] border-gray-500 ${
            lng.code === i18n.language ? "bg-dark-green text-white" : "bg-white text-black"
          }`}
          onClick={() => changeLanguage(lng.code)}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
}
