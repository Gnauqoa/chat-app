import { ReactNode, useContext, useEffect } from "react";
import useProtectedRoute from "../hooks/useProtectedRoute";
import { AuthContext, AuthContextType } from "../context/authContext";

import { useRouter } from "expo-router";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const ready = useProtectedRoute();
  const router = useRouter();
  const { auth } = useContext(AuthContext) as AuthContextType;
  useEffect(() => {
    if (auth && ready) router.replace("/(main)/home");
  }, [auth, ready]);

  return <>{children}</>;
};

export default AuthGuard;
