import { View, Text } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import color from "../../container/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Message as MessageType } from "../../types/message";
import dayjs from "dayjs";

const Message = ({ message, createdAt }: MessageType) => {
  // const currentTimeString: string = new Date().toLocaleTimeString();

  const [showTime, setShowTime] = useState(false);

  return (
    <TouchableOpacity
      onLongPress={() => setShowTime(true)}
      style={styles.sendContainer}
    >
      <LinearGradient
        colors={[color.gradient1, color.gradient2]}
        start={{ x: 0.5, y: 0.5 }}
        style={styles.wrapMess}
      >
        <Text style={styles.userMessage}>{message}</Text>
      </LinearGradient>
      {showTime && <Text style={styles.time}>{dayjs(createdAt).format("HH:mm") }</Text>}
    </TouchableOpacity>
  );
};

export default Message;
