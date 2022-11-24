import { createContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const handleAuth = (e) => {
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };

  const data = {
    auth,
    handleAuth,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
export { AuthProvider };
export default AuthContext;
