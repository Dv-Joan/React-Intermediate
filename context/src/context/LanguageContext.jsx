import { createContext, useState } from "react";

const LanguageContext = createContext();
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
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const texts = translations[language];

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const data = {
    texts,
    handleLanguage,
  };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };

export default LanguageContext;
