import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./style";
import { router } from "expo-router";
import { Room } from "../../types/room";

const Member = (props) => {
  return (
    <TouchableOpacity onLongPress={props.onDeleteUser} >
      <View style={styles.userContainer}>
        <Image
          source={require("../../assets/images/Avatar.png")}
          style={styles.avatar}
        />
        <View style={styles.userInfoContainer}>
          <Text style={styles.userHeading}>{props.username}</Text>
          <Text style={styles.userInfo}>Owner: {props.studentID}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Member;
