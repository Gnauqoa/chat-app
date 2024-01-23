import { Tabs } from "expo-router";
import MainGuard from "../../guards/MainGuard";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


export default function AuthLayout() {
  return (
    <MainGuard>
      <Tabs screenOptions={({ route }) => ({ headerShown: false })}>
        <Tabs.Screen 
          name="home" 
          options={{
            tabBarIcon: ({color,size}) => (
              <FontAwesomeIcon icon={faHome} color='blue' size={20}/>
            ),
          }}/>
      </Tabs>
    </MainGuard>
  );
}
