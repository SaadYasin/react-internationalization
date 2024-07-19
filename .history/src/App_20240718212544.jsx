/* eslint-disable no-unused-vars */
import React from "react";
import i18next from '../src/i18next'
function App() {
  const { t } = useTranslation();

  return <h2>{t("Welcome to React")}</h2>;
}

export default App;
