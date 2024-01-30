import { Tabs, router } from "expo-router";
import MainGuard from "../../guards/MainGuard";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function AuthLayout() {
  return (
    <MainGuard>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "home") {
              iconName = faHome;
            } else {
              iconName = faUserCircle;
            }

            // Thiết lập màu sắc dựa trên trạng thái "focused"
            const iconColor = focused ? "blue" : "gray";

            return (
              <FontAwesomeIcon icon={iconName} color={iconColor} size={size} />
            );
          },
        })}
      >
        {/* <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faUserCircle} color="blue" size={20} />
            ),
          }}
        /> */}
      </Tabs>
    </MainGuard>
  );
}
