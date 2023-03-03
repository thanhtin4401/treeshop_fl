import { createContext } from "react";

export const AuthContext = createContext({
  username: "",
  ismanager: false,
  islogin: false,
  login: (_uid) => {},
  logout: () => {},
});
