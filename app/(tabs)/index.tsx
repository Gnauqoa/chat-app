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
import Login from "../screen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Home = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Screen</Text>
    </View>
  )
}

const Detail = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Detail Screen</Text>
    </View>
  )
}




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
