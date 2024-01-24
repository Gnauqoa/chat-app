import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import color from "../../container/color";
import useSendMessage from "../../hooks/useSendMessage";
import { useLocalSearchParams } from "expo-router";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useSendMessage();
  const { roomId } = useLocalSearchParams();

  return (
    <View style={styles.Form}>
      <TouchableOpacity>
        <Text style={styles.moreIcon}>+</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          value={message}
          placeholder="Write your message"
          placeholderTextColor={color.note}
          style={styles.input}
          onChangeText={(text) => {
            setMessage(text);
          }}
        />

        {message.length > 0 ? (
          <TouchableOpacity
            onPress={() => {
              setMessage("");

              sendMessage({ message, roomId: roomId as string });
            }}
          >
            <Image
              style={styles.iconSend}
              source={require("../../assets/images/sendBtn.png")}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Image
              style={styles.iconMicro}
              source={require("../../assets/images/micro.png")}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Form: {
    width: "auto",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },

  moreIcon: {
    color: color.note,
    fontSize: 40,
    fontWeight: "200",
    marginRight: 10,
  },

  inputContainer: {
    width: "90%",
    backgroundColor: color.gray,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },

  iconMicro: {
    width: 14,
    height: 24,
    resizeMode: "stretch",
  },

  iconSend: {
    width: 34,
    height: 34,
    resizeMode: "stretch",
  },

  input: {
    height: 44,
    width: "90%",
    // backgroundColor: color.gray,
    // borderColor: color.second,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: color.black,
  },
});
export default SendMessage;
