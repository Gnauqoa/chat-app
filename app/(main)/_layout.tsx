import { Tabs, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { AuthContext, AuthContextType } from "../../context/authContext";

export default function AuthLayout() {
  const router = useRouter();
  const { auth } = useContext(AuthContext) as AuthContextType;
  useEffect(() => {
    if (!auth) router.replace("/(auth)/login");
  }, [auth]);
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen name="login" />
    </Tabs>
  );
}
