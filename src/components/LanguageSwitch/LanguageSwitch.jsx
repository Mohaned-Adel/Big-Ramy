import { useEffect, useState } from "react";
import { switchLang } from "../../helpers/lang";
// import ArLogo from "../../assets/svgs/sa.svg";
// import EnLogo from "../../assets/svgs/gb.svg";
import "./LanguageSwitch.scss";

const LanguageSwitch = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang"));

  const changeLanguageHandler = () => {
    if (localStorage.getItem("i18nextLng") === "ar") {
      switchLang("en");
      setLang("en");
    } else {
      switchLang("ar");
      setLang("ar");
    }
  };

  useEffect(() => {}, [lang]);
  return (
    <div className="language-container" onClick={changeLanguageHandler}>
      {localStorage.getItem("i18nextLng") === "ar" ? (
        <>
          {/* <div className="langImage-container">
            <img className="lang-image" src={EnLogo} />
          </div> */}
          <div className="lang-title">English</div>
        </>
      ) : (
        <>
          {/* <div className="langImage-container">
            <img className="lang-image" src={ArLogo} />
          </div> */}
          <div className="lang-title font-poppins">العربية</div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitch;
