/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import i18next from '../src/utils/i18next';
import { useTranslation } from 'react-i18next'
import Cookies from "js-cookie";
function App() {
  const { t } = useTranslation();

  const lng = Cookies.get("i18next") || "en";

  useEffect(() => { 
    window.document.dir = i18next.dir();
  }, [lng]);

  return (
    <>
      <div>
        <h2 className="text-3xl text-start text-white p-4 bg-green-800">{t("Welcome to React")}</h2>

        
        
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
  )
}

export default App;
