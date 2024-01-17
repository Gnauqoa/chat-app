import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Image, Alert, Keyboard } from 'react-native';
import color from './../../container/color'

interface LoginProps {
  // Add any props if needed
}

const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPwd] = useState<string>("");

  const handleLogIn = (email: string, password: string) => {
    if (email.length === 0) {
      Alert.alert("Error", "You have not entered your email yet. Please fill it in");
      return false;
    }
    if (password.length === 0) {
      Alert.alert("Error", "You have not entered your email yet. Please fill it in");
      return false;
    }
    Alert.alert("Success", "Login successfully");
    setPwd("");
    Keyboard.dismiss();
  }

  const handleForgotPwd = () => {
    Alert.alert("Forgot Password");
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Image source={require('../../assets/images/logoweib.png')} />
        <Text style={styles.title}>
          Log in to Chatbox
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>
            Your email
          </Text>
          <View>
            <TextInput
              onChangeText={(email) => setEmail(email)}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>
            Password
          </Text>
          <View>
            <TextInput
              value={password}
              onChangeText={(password) => setPwd(password)}
              style={styles.input}
            />
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleLogIn(email, password)}
        >
          <View style={styles.button}>
            <Text style={styles.textBtn}>
              Log in
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.textBox}>
          <Text style={styles.smallText}>
            Welcome back! Sign in using your social account or email to continue us
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleForgotPwd}
        >
          <Text style={[styles.text, styles.marginTop40]}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: color.heading,
  },
  
  inputContainer: {
    marginTop: 20
  },

  text: {
    fontSize: 14,
    fontWeight: '500',
    color: color.heading,
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBtn: {
    fontSize: 16,
    color: color.white,
    fontWeight: 'bold',
  },

  textBox: {
    marginTop: 30,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  smallText: {
    fontSize: 14,
    color: color.note,
    fontWeight: '300',
    textAlign: 'center',
  },

  marginTop40: {
    marginTop: 40,
  }
})

export default Login;
