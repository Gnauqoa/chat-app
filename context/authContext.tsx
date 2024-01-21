import React, { ReactNode, createContext, useState } from "react";
import { loginAPI } from "../api/auth";
import { removeTokens, saveAccessToken, saveTokens } from "../utils/auth";
import { Alert } from "react-native";
import { AxiosError } from "axios";
import { useRouter } from "expo-router";

export type AuthContextType = {
  auth: boolean;
  login: ({}: { email: string; password: string }) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  auth: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const router = useRouter();
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log("login");
    loginAPI(email, password)
      .then(async (res) => {
        if (res.status === 200) {
          setIsAuth(true);
          await saveTokens(
            res.data.data.accessToken,
            res.data.data.refreshToken
          );
          Alert.alert("Success", "Login successfully");
          router.push("/(main)/home");
        }
      })
      .catch((err) => {
        const error = err as AxiosError;
        console.log(error.toJSON())
      });
  };
  const logout = async () => {
    setIsAuth(false);

    await removeTokens();
  };
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
