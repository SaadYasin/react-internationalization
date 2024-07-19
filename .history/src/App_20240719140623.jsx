/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from "react";
import i18next from '../src/utils/i18next';
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next'
import Cookies from "js-cookie";
function App() {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on("languageChanged", (lng) => {
    setLocale(i18n.language);
  })

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  }
  const { t } = useTranslation();

  const lng = Cookies.get("i18next") || "en";

  useEffect(() => { 
    window.document.dir = i18next.dir();
  }, [lng]);

  return (
    <>
      <div>
        <h2 className="text-3xl text-start text-white p-4 bg-green-800">
          {t("Welcome to React")}
        </h2>

        {/* Language selection */}
        <div>
          <select
            name="language"
            value={locale}
            onChange={handleChange}
            className="bg-white text-[18px] font-secondary xl:ml-12 cursor-pointer"
          >
            <option
              value="en"
              className="text-[18px] text-primary font-secondary hover:text-primary-hover"
            >
              English
            </option>

            <option
              value="ar"
              className="text-[18px] text-primary font-secondary hover:text-primary-hover"
            >
              Arabic
            </option>
          </select>
        </div>

        {/* <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => i18next.changeLanguage("en")}
            className="text-[18px] bg-slate-800 text-white px-4 py-2 rounded-lg">English</button>
          

          <button
            onClick={() => i18next.changeLanguage("ar")}
            className="text-[18px] bg-slate-800 text-white px-4 py-2 rounded-lg">Arabic</button>

        </div> */}
      </div>
    </>
  );
}

export default App;
