import React, { ReactNode, createContext, useEffect, useState } from "react";
import { loginAPI } from "../api/auth";
import { removeTokens, saveTokens } from "../utils/auth";
import { Alert } from "react-native";
import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { User } from "../types/user";
import useToggle from "../hooks/useToggle";
import { getUserAPI, updateUserAPI } from "../api/user";
import useConfigIp from "../hooks/useConfigIp";

export type AuthContextType = {
  auth: boolean;
  login: ({}: { email: string; password: string }) => void;
  logout: () => void;
  user: User | null;
  loading: boolean;
  getUser: () => void;
  updateUser: (name: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
  auth: false,
  loading: false,
  updateUser: () => {},
  login: () => {},
  logout: () => {},
  user: null,
  getUser: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { toggle: loading, onClose, onOpen } = useToggle();
  const [user, setUser] = useState<User | null>(null);
  const { configStatus } = useConfigIp();
  const router = useRouter();

  const updateUser = (name: string) => {
    onOpen();
    updateUserAPI({ name })
      .then((res) => {
        if (res.status === 200) {
          Alert.alert("Success", "Update successfully");
          setUser(res.data.data);
        }
      })
      .catch((err) => {
        const error = err as AxiosError;
        console.log(error.toJSON());
      })
      .finally(onClose);
  };
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
          getUser();
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
    if (!user && configStatus) getUser();
  }, [configStatus, user]);
  return (
    <AuthContext.Provider
      value={{
        loading,
        getUser,
        updateUser,
        user,
        auth: isAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
