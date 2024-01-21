import React, { ReactNode, createContext, useState } from "react";

export type AuthContextType = {
  auth: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  auth: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const login = () => {};
  const logout = () => {};
  return (
    <AuthContext.Provider
      value={{
        auth: isAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
