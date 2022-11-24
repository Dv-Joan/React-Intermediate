import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import AuthContext from "../context/AuthContext";

function MainContext() {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);
  return (
    <div className={`m-5 rounded py-5 ${theme}`}>
      <main>
        <h3 className="italic">{texts.mainTitle}</h3>
        <p className="m-3">
          {texts.welcomeMessage}
          {auth ? (
            <span className="py-1 px-3 bg-orange-500 tex-white font-bold rounded">
              {texts.guestMessage}
            </span>
          ) : (
            <span className="py-1 px-3 bg-green-600 tex-white font-bold rounded">
              {texts.userMessage}
            </span>
          )}
        </p>
      </main>
    </div>
  );
}

export default MainContext;
