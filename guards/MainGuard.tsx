import { ReactNode, useContext, useEffect } from "react";
import useProtectedRoute from "../hooks/useProtectedRoute";
import { AuthContext, AuthContextType } from "../context/authContext";

import { useRouter } from "expo-router";
import useConfigIp from "../hooks/useConfigIp";

const MainGuard = ({ children }: { children: ReactNode }) => {
  const ready = useProtectedRoute();
  const router = useRouter();
  const { configStatus } = useConfigIp();
  const { auth } = useContext(AuthContext) as AuthContextType;
  useEffect(() => {
    if (!ready) return;
    if (!configStatus) router.replace("/(auth)/config");
    if (!auth) router.replace("/(auth)/login");
  }, [auth, ready, configStatus]);

  return <>{children}</>;
};

export default MainGuard;
