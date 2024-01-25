import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";

import color from "../container/color";
import { Header, Main } from "../section/create-room";


const CreateRoom = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 20}
        style={{ flex: 1, backgroundColor: color.white }}
      >
        <StatusBar
          translucent
          backgroundColor={"black"}
          barStyle={"dark-content"}
        />
        <Header />
        <Main />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateRoom;
