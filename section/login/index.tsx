import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import color from "../../container/color";
import { router } from "expo-router";
import useAuth from "../../hooks/useAuth";

interface LoginProps {
  // Add any props if needed
}

const Login: React.FC<LoginProps> = (props) => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPwd] = useState<string>("");
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPwd, setCheckPwd] = useState(true);
  const handleLogIn = async (email: string, password: string) => {
    // let regexEmail = new RegExp(
    //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // );

    // if (email.length === 0) {
    //   Alert.alert(
    //     "Error",
    //     "You have not entered your email yet. Please fill it in"
    //   );
    //   return false;
    // }

    // if (!regexEmail.test(email)) {
    //   // Alert.alert("Error", "Please enter an email address");
    //   setCheckEmail(false);
    //   return false;
    // } else {
    //   setCheckEmail(true);
    // }

    // if (password.length === 0) {
    //   Alert.alert(
    //     "Error",
    //     "You have not entered your email yet. Please fill it in"
    //   );
    //   return false;
    // }
    setCheckPwd(false)
    login({ email, password });
    Keyboard.dismiss();
  };

  const handleForgotPwd = () => {
    Alert.alert("Forgot Password");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={40}
      style={styles.container}
    >
      <View style={styles.loginContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logoweib.png")}
        />
        <Text style={styles.title}>Log in to Chatbox</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Your email</Text>
          <View>
            <TextInput
              autoCapitalize="none"
              onChangeText={(email) => setEmail(email)}
              style={styles.input}
            />
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.errorText}>
                {!checkEmail ? "Invalid email address" : ""}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Password</Text>
          <View>
            <TextInput
              autoCapitalize="none"
              value={password}
              onChangeText={(password) => setPwd(password)}
              style={styles.input}
              secureTextEntry={true}
            />
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.errorText}>
                {!checkPwd ? "Invalid password" : ""}
              </Text>
            </View>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleLogIn(email, password)}
        >
          <View style={styles.button}>
            <Text style={styles.textBtn}>Log in</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.textBox}>
          <Text style={styles.smallText}>
            Welcome back! Sign in using your social account or email to continue
            us
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.7} onPress={handleForgotPwd}>
          <Text style={[styles.text, styles.marginTop40]}>
            Forgot password?
          </Text>
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

  loginContainer: {
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
    marginTop: 38,
    justifyContent: "center",
    alignItems: "center",
  },

  textBtn: {
    fontSize: 18,
    color: color.white,
    fontWeight: "bold",
  },

  textBox: {
    marginTop: 30,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
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

export default Login;
