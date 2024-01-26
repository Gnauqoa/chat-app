import { View, Text, Image, StyleSheet, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { router } from "expo-router";
import color from "../../container/color";
import { LinearGradient } from "expo-linear-gradient";
import useAuth from "../../hooks/useAuth";

const Main = () => {
  const { updateUser, logout, user } = useAuth();
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [checkOldPwd, setCheckOldPwd] = useState(true);
  const [checkNewPwd, setCheckNewPwd] = useState(true);
  return (
    <View style={styles.body}>
      <Image
      style={styles.logo}
      source={require("../../assets/images/changePwd.png")}
      />
      <View style={styles.inputContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Text style={styles.text}>Old password</Text>
          </TouchableWithoutFeedback>
          <View>
              <TextInput
              autoCapitalize="none"
              onChangeText={(password) => setOldPwd(password)}
              style={styles.input}
              />
              <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.errorText}>
                  {!checkOldPwd ? "Invalid old password" : ""}
              </Text>
              </View>
          </View>
      </View>
      <View style={styles.inputContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Text style={styles.text}>New password</Text>
          </TouchableWithoutFeedback>
          <View>
              <TextInput
              autoCapitalize="none"
              onChangeText={(password) => setOldPwd(password)}
              style={styles.input}
              />
              <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.errorText}>
                  {!checkOldPwd ? "Invalid old password" : ""}
              </Text>
              </View>
          </View>
      </View>
      <TouchableOpacity onPress={logout}>
          <LinearGradient
          colors={[color.gradient1, color.gradient2]}
          start={{ x: 0.5, y: 0.5 }}
          style={styles.wrapBtn}
          >
          <Text style={styles.txtBtn}>Change password</Text>
          </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
    marginBottom: 30,
  },
  inputContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: color.heading,
  },

  errorText: {
    color: "red",
    marginTop: 4,
  },
  
  input: {
    marginTop: 10,
    width: 350,
    // backgroundColor: 'red',
    height: 44,
    borderRadius: 10,
    borderColor: color.heading,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: color.black,
  },

  wrapBtn: {
      marginTop: 20,
      alignSelf: "center",
      paddingHorizontal: 60,
      paddingVertical: 8,
      borderRadius: 30,
      marginBottom: 10,
  },

  txtBtn: {
      alignSelf: "center",
      color: color.white,
      fontWeight: "bold",
      fontSize: 12,
  },

})

export default Main