import { useContext } from "react";
import Light from "../assets/light.png";
import Dark from "../assets/dark-mode.png";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import AuthContext from "../context/AuthContext";

function HeaderContext() {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <div className={`m-5 py-5 rounded ${theme}`}>
      <header>
        <h3 className="italic">{texts.headerTitle}</h3>
        <select
          name="language"
          className="text-black  m-2 py-1 px-3 rounded-md drop-shadow-xl"
          onChange={handleLanguage}
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <div className="flex justify-center">
          <input
            type="radio"
            value="light"
            onClick={handleTheme}
            name="theme"
            id="light"
            className="m-2"
          />
          <label htmlFor="light">
            <img src={Light} alt="light" className="w-6" />
          </label>
          <input
            type="radio"
            value="dark"
            onClick={handleTheme}
            name="theme"
            id="dark"
            className="m-2"
          />
          <label htmlFor="dark">
            <img src={Dark} alt="dark" className="w-6" />
          </label>
        </div>
        <button
          type="button"
          onClick={handleAuth}
          className={`font-medium hover:bg-slate-400 rounded-lg text-sm px-5 py-2.5 mr-2 border-2 border-slate-700 mb-2 m-5 ${theme}`}
        >
          {auth ? "Log In" : "Log Out"}
        </button>
      </header>
    </div>
  );
}

export default HeaderContext;
