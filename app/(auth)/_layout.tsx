import { Tabs } from "expo-router";
import AuthGuard from "../../guards/AuthGuard";

export default function AuthLayout() {
  return (
    <AuthGuard>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarStyle: {
            display: "none",
          },
        })}
      >
        <Tabs.Screen name="login" options={{ headerShown: false }} />
        <Tabs.Screen name="config" options={{ headerShown: false }} />
      </Tabs>
    </AuthGuard>
  );
}
