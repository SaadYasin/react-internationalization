import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import languageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

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
      caches: ["cook"],
    },
    backend: {
      loadPath: "/locale/{{lng}}/translation.json",
    },
  });

export default i18n;
