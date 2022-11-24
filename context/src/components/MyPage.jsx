import React, { useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

const translations = {
  es: {
    headerTitle: "Mi cabecera",
    mainTitle: "Mi contenido",
    footerTitle: "Mi pie de pagina",
    welcomeMessage: "Bienvenido ",
    guestMessage: "Invitado",
    userMessage: "Usuario",
  },
  en: {
    headerTitle: "My header",
    mainTitle: "My content",
    footerTitle: "My footer",
    welcomeMessage: "Welcome ",
    guestMessage: "Guest",
    userMessage: "User",
  },
};

function MyPage() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("es");
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState("true");
  const handleTheme = (e) => {
    if (e.target.value === "dark") {
      setTheme("bg-slate-800 border-neutral-200");
    } else {
      setTheme("bg-slate-300 text-slate-800 ");
    }
  };

  const handleLanguage = (e) => {
    if (e.target.value === "en") {
      setLanguage("en");
      setTexts(translations.en);
    } else {
      setLanguage("es");
      setTexts(translations.es);
    }
  };
  const handleAuth = (e) => {
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };
  return (
    <div className="font-Roboto bg-slate-600 text-white rounded m-9 py-5">
      <h3 className="text-center text-2xl">
        Mi Pagina{" "}
        <span className="bg-red-400 px-2 py-0.5 mx-1 rounded">sin</span> Context
        API
      </h3>
      <Header
        theme={theme}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
        texts={texts}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
}

export default MyPage;
