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
} from "react-native";
import Login from "../screen/LoginScreen";

export default function App() {
  return (
    <>
    <Login />
    </>
  );
}
