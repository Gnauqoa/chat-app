import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./style";
import { router } from "expo-router";
import { Room } from "../../types/room";

const UserItem = ({ name, owner }: Room) => {
  return (
    <TouchableOpacity onPress={() => router.push("/screen/ChatBox")}>
      <View style={styles.userContainer}>
        <Image
          source={require("../../assets/images/Avatar.png")}
          style={styles.avatar}
        />
        <View style={styles.userInfoContainer}>
          <Text style={styles.userHeading}>{name}</Text>
          <Text style={styles.userInfo}>Owner: {owner.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;
