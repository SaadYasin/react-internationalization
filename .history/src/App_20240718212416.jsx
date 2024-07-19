/* eslint-disable no-unused-vars */
import React from "react";


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
      loadPath: '/locale/{{lng}}/translation.json',
    }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t("Welcome to React")}</h2>;
}

export default App;
