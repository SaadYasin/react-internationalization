/* eslint-disable no-unused-vars */
import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next).init({
      resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
        },
      },
      ar: {
        translation: {
          "Welcome to React": "مرحبا بكم في ",
        },
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t("Welcome to React")}</h2>;
}
