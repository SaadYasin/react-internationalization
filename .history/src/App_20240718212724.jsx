/* eslint-disable no-unused-vars */
import React from "react";
import i18next from '../src/utils/i18next';
import { useTranslation } from 'react-i18next';
function App() {
  const { t } = useTranslation();

  return <h2>{t("Welcome to React")}</h2>;
}

export default App;
