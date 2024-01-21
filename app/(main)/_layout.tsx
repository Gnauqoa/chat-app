import { Tabs } from "expo-router";
import MainGuard from "../../guards/MainGuard";

export default function AuthLayout() {
  return (
    <MainGuard>
      <Tabs screenOptions={({ route }) => ({ headerShown: false })}>
        <Tabs.Screen name="home" />
      </Tabs>
    </MainGuard>
  );
}
