import MainContext from "./MainContext";
import HeaderContext from "./HeaderContext";
import FooterContext from "./FooterContext";
import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";

function MyPageContext() {
  return (
    <div className="font-Roboto bg-slate-600 text-white rounded m-9 py-5">
      <h3 className="text-center text-2xl">
        Mi Pagina
        <span className="bg-cyan-400 px-2 py-0.5 mx-1 rounded">con</span>
        Context API
      </h3>
      <AuthProvider>
        <LanguageProvider>
          <ThemeProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </ThemeProvider>
        </LanguageProvider>
      </AuthProvider>
    </div>
  );
}

export default MyPageContext;
