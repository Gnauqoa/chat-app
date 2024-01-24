import { View, Text } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import color from "../../container/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Message as MessageType } from "../../types/message";
import dayjs from "dayjs";
import useToggle from "../../hooks/useToggle";

const Message = ({ message, createdAt }: MessageType) => {
  const { toggle, onToggle } = useToggle(false);
  return (
    <TouchableOpacity onPress={onToggle} style={styles.sendContainer}>
      <LinearGradient
        colors={[color.gradient1, color.gradient2]}
        start={{ x: 0.5, y: 0.5 }}
        style={styles.wrapMess}
      >
        <Text style={styles.userMessage}>{message}</Text>
      </LinearGradient>
      {toggle && (
        <Text style={styles.time}>
          {dayjs(createdAt).isSame(dayjs(), "day")
            ? dayjs(createdAt).format("mm:ss")
            : dayjs(createdAt).format("DD MMM YYYY")}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Message;
