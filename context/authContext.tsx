import React, { ReactNode, createContext, useEffect, useState } from "react";
import { loginAPI } from "../api/auth";
import { removeTokens, saveAccessToken, saveTokens } from "../utils/auth";
import { Alert } from "react-native";
import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { User } from "../types/user";
import useToggle from "../hooks/useToggle";
import getUserAPI from "../api/user";

export type AuthContextType = {
  auth: boolean;
  login: ({}: { email: string; password: string }) => void;
  logout: () => void;
  user: User | null;
  loading: boolean;
  getUser: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  auth: false,
  loading: false,
  login: () => {},
  logout: () => {},
  user: null,
  getUser: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { toggle: loading, onClose, onOpen } = useToggle();
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const getUser = async () => {
    onOpen();
    getUserAPI()
      .then((res) => {
        setUser(res.data.data);
        setIsAuth(true);
      })
      .catch((err) => {
        const error = err as AxiosError;
        setIsAuth(false);
        console.log(error.toJSON());
      })
      .finally(onClose);
  };

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
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
        console.log(error.toJSON());
      });
  };
  const logout = async () => {
    setIsAuth(false);
    await removeTokens();
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{ loading, getUser, user, auth: isAuth, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
