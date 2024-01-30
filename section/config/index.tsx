import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import color from "../../container/color";
import useConfigIp from "../../hooks/useConfigIp";

const ConfigScreen = () => {
  const { configStatus, error, setIpData } = useConfigIp();
  const [IPaddress, setIPaddress] = React.useState<string>("");
  const [port, setPort] = React.useState<string>("3000");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={40}
      style={styles.container}
    >
      <View style={styles.inputIPContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logoweib.png")}
        />
        <Text style={styles.title}>Log in to Chatbox</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>IP address</Text>
          <View>
            <TextInput
              autoCapitalize="none"
              onChangeText={setIPaddress}
              style={styles.input}
              value={IPaddress}
            />
            <TextInput
              autoCapitalize="none"
              onChangeText={setPort}
              style={styles.input}
              value={port}
            />
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.errorText}>
                {error ? "Invalid IP address" : ""}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIpData(IPaddress, port)}
        >
          <View style={styles.button}>
            <Text style={styles.textBtn}>Connect</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 238,
    height: 145,
    resizeMode: "stretch",
  },

  inputIPContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: "bold",
    color: color.heading,
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

  button: {
    width: 350,
    height: 48,
    backgroundColor: color.heading,
    borderRadius: 14,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  textBtn: {
    fontSize: 18,
    color: color.white,
    fontWeight: "bold",
  },

  smallText: {
    fontSize: 14,
    color: color.note,
    fontWeight: "300",
    textAlign: "center",
  },

  marginTop40: {
    marginTop: 40,
  },
});

export default ConfigScreen;
