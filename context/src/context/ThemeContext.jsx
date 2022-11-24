import { createContext, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleTheme = (e) => {
    if (e.target.value === "dark") {
      setTheme("bg-slate-800 border-neutral-200");
    } else if (e.target.value === "light") {
      setTheme("bg-slate-300 text-slate-800 ");
    }
  };

  const data = {
    theme,
    handleTheme,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
