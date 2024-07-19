/* eslint-disable no-unused-vars */
import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import languageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .use(HttpApi)
  .init({
   
    fallbackLng: "en",
    detection: {
      order: [
        "htmlTag",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t("Welcome to React")}</h2>;
}

export default App;
