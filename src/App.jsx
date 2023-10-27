import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import i18n from "./locales/i18n";
import { checkFixLang, editTitle } from "./helpers/lang";
import { Route, Routes } from "react-router";
import BaseLayout from "./layouts/BaseLayout";

function App() {
  const lang = i18n.language;

  useEffect(() => {
    checkFixLang(lang);
    editTitle(lang);
  }, [lang]);
  return (
    <div>
      <Routes>
        <Route path="/*" element={<BaseLayout />} />
      </Routes>
    </div>
  );
}

export default App;
