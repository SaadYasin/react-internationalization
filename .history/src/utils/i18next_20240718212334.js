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
      loadPath: "/locale/{{lng}}/translation.json",
    },
  });
