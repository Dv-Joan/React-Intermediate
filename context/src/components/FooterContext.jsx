import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

function FooterContext() {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <div className={`m-5 p-5 rounded ${theme}`}>
      <footer>
        <h5 className="italic">{texts.footerTitle}</h5>
      </footer>
    </div>
  );
}

export default FooterContext;
