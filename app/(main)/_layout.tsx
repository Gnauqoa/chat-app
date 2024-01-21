import { Tabs } from "expo-router";
import MainGuard from "../../guards/MainGuard";

export default function AuthLayout() {
  return (
    <MainGuard>
      <Tabs screenOptions={{}}>
        <Tabs.Screen name="home" />
      </Tabs>
    </MainGuard>
  );
}
