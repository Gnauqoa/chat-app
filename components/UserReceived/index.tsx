import dayjs from "dayjs";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Message } from "../../types/message";
import useToggle from "../../hooks/useToggle";

const UserReceived = ({ message, createdAt }: Message) => {
  const { toggle, onToggle } = useToggle(false);

  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require("../../assets/images/Avatar.png")}
          />
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.personName}>Person name</Text>
          <TouchableOpacity onPress={onToggle}>
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>{message}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {toggle && (
        <Text style={styles.timestamp}>
          {dayjs(createdAt).isSame(dayjs(), "day")
            ? dayjs(createdAt).format("mm:ss")
            : dayjs(createdAt).format("DD MMM YYYY")}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  },
  outerContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap: 12,
    flexDirection: "row",
  },
  avatarContainer: {
    paddingTop: 16,
    paddingBottom: 4,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap: 10,
  },
  avatar: {
    width: 30,
    height: 30,
  },
  messageContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 6,
    maxWidth: "75%",
  },
  personName: {
    width: 79,
    textAlign: "center",
    color: "black",
    fontSize: 10,
    fontFamily: "Poppins",
    fontWeight: "500",
    lineHeight: 10,
  },
  messageBubble: {
    padding: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  messageText: {
    textAlign: "left",
    color: "#000E08",
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "400",
    // lineHeight: 12,
    letterSpacing: 0.12,
  },
  timestamp: {
    width: 54,
    textAlign: "center",
    color: "rgba(121, 124, 123, 0.50)",
    fontSize: 10,
    fontFamily: "Poppins",
    fontWeight: "500",
    lineHeight: 10,
    marginLeft: 40,
  },
});

export default UserReceived;
