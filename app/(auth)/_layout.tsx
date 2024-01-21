import { Tabs } from "expo-router";
import AuthGuard from "../../guards/AuthGuard";

export default function AuthLayout() {
  return (
    <AuthGuard>
      <Tabs screenOptions={{}}>
        <Tabs.Screen name="login" options={{ headerShown: false }} />
      </Tabs>
    </AuthGuard>
  );
}
