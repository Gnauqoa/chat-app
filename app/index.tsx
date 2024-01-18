import * as ScreenOrientation from "expo-screen-orientation";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableWithoutFeedback,
  Keyboard,
  Text
} from "react-native";
import Login from "./screen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";







export default function App() {
  return (
    <>
    <Login />
    </>

    
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home}></Stack.Screen>
    //     <Stack.Screen name="Home" component={Home}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
