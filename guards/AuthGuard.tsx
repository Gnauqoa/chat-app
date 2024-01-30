import { ReactNode, useContext, useEffect } from "react";
import useProtectedRoute from "../hooks/useProtectedRoute";
import { AuthContext, AuthContextType } from "../context/authContext";

import { useRouter } from "expo-router";
import useConfigIp from "../hooks/useConfigIp";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const ready = useProtectedRoute();
  const router = useRouter();
  const { auth } = useContext(AuthContext) as AuthContextType;
  const { configStatus } = useConfigIp();
  useEffect(() => {
    if (!ready) return;
    if (!configStatus) router.replace("/(auth)/config");
    if (auth) router.replace("/(main)/home");
  }, [auth, ready]);

  return <>{children}</>;
};

export default AuthGuard;
