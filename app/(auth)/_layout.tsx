import { Tabs, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { AuthContext, AuthContextType } from "../../context/authContext";

export default function AuthLayout() {
  const router = useRouter();
  const { auth } = useContext(AuthContext) as AuthContextType;
  useEffect(() => {
    if (auth) router.replace("/(main)/HomeScreen");
  }, [auth]);
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen name="login" options={{ headerShown: false }} />
    </Tabs>
  );
}
