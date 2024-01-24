import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import color from "../../container/color";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [editing, setEditing] = useState(false);
  const [roomName, setRoomName] = useState("Person name 1");
  const router = useRouter();

  const handleEditPress = () => {
    setEditing(true);
  };
  const handleCancelPress = () => {
    setEditing(false);
  };
  const handleSavePress = () => {
    setEditing(false);
  };
  return (
    <View style={styles.topContainer}>
      <StatusBar translucent />
      <View style={styles.leftTopContainer}>
        <TouchableOpacity onPress={router.back}>
          <View style={styles.wrapBackBtn}>
            <Image
              source={require("../../assets/images/backBtn.png")}
              style={styles.iconBack}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.userContainer}>
          <Image
            source={require("../../assets/images/Avatar.png")}
            style={styles.avatar}
          />
          <View style={styles.nameContainer}>
            {editing ? (
              <TextInput
                style={styles.name}
                value={roomName}
                onChangeText={(text) => setRoomName(text)}
                onBlur={handleSavePress}
              ></TextInput>
            ) : (
              <TouchableOpacity onPress={handleEditPress}>
                <Text style={styles.name}>{roomName}</Text>
              </TouchableOpacity>
            )}

            <Text style={styles.status}>Active now</Text>
          </View>
        </View>
      </View>

      <View style={styles.rightTopContainer}>
        {editing ? (
          <TouchableOpacity onPress={handleCancelPress}>
            <FontAwesomeIcon
              icon={faX}
              color="black"
              size={18}
              style={styles.iconPhone}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Image
              style={styles.iconPhone}
              source={require("../../assets/images/phone.png")}
            />
          </TouchableOpacity>
        )}

        {editing ? (
          <TouchableOpacity onPress={handleSavePress}>
            <FontAwesomeIcon
              icon={faCheck}
              color="black"
              size={18}
              style={styles.iconCamera}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Image
              style={styles.iconCamera}
              source={require("../../assets/images/camera.png")}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "white",
    // position: 'absolute',
    // marginHorizontal: 20,
    // paddingHorizontal: 20,
    paddingVertical: 20,
    // marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#333333",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  avatar: {
    width: 44,
    height: 44,
    marginRight: 14,
  },

  userContainer: {
    // backgroundColor: 'green',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  nameContainer: {},

  name: {
    color: color.black,
    fontWeight: "bold",
    fontSize: 18,
  },

  status: {
    color: color.note,
    fontSize: 12,
  },

  wrapBackBtn: {
    paddingVertical: 12,
    paddingLeft: 20,
    // backgroundColor: 'red',
  },

  iconBack: {
    width: 14,
    height: 10,
    marginRight: 20,
    // padding: 20,
    // backgroundColor: 'red',
  },

  leftTopContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  rightTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },

  iconPhone: {
    width: 18,
    height: 18,
    resizeMode: "stretch",
    marginRight: 20,
  },

  iconCamera: {
    width: 24,
    height: 24,
    resizeMode: "stretch",
  },
});
