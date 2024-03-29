import {
    View,
    Text,
    Image,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    Linking,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
  } from "react-native";
  import { FlatList, ScrollView, TextInput, TouchableWithoutFeedback } from "react-native-gesture-handler";
  import React, { useState } from "react";
  
  import { router } from "expo-router";
  import UserItem from "../../components/UserItem";
  import color from "../../container/color";
  import filter from "lodash.filter";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar translucent />
          <View style={styles.leftTopContainer}>
            <TouchableOpacity onPress={router.back}>
              <View style={styles.wrapBackBtn}>
                <Image
                  source={require("../../assets/images/backBtn.png")}
                  style={styles.iconBack}
                />
              </View>
            </TouchableOpacity>
            <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
                <Text style={styles.heading}>Tạo cuộc hội thoại mới</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>

    );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "white",
    // position: 'absolute',
    // marginHorizontal: 20,
    // paddingHorizontal: 20,
    paddingVertical: 20,
    // marginVertical: 10,
    flexDirection: "row",

    alignItems: "center",
    elevation: 10,
    shadowColor: "#333333",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  leftTopContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  wrapBackBtn: {
    paddingVertical: 12,
    paddingLeft: 20,
    // backgroundColor: 'red',
  },

  iconBack: {
    width: 14,
    height: 10,
    marginRight: 20,
    // padding: 20,
    // backgroundColor: 'red',
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
