import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Linking,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import React, { useState } from "react";

import { router } from "expo-router";
import UserItem from "../../components/UserItem";
import color from "../../container/color";
import filter from "lodash.filter";
import SelectUser from "../../components/SelectUser";

const sampleData = [
  { username: "john.doe@example.com", studentID: "123123" },
  { username: "jane.smith@example.com", studentID: "121212" },
  { username: "sam.jones@example.com", studentID: "323232" },
  { username: "ledangquang@gmail.com", studentID: "21521338" },
  { username: "nguyenthingocha@gmail.com", studentID: "21520217" },
  { username: "truonghuutho@gmail.com", studentID: "21521479" },
  { username: "huynhminhhieu@gmail.com", studentID: "21521479" },
  // Thêm các mục dữ liệu khác nếu cần
];

const Main = () => {
  const [count, setCount] = useState(0);
  const handleSelectUser = (isSelected: boolean) => {
    if (isSelected === true) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  const [data, setData] =
    useState<{ username: string; studentID: string }[]>(sampleData);
  const [searchQuery, setSearchQuery] = useState("");
  const [roomName, setRoomName] = useState("Room 1");
  return (
    <View style={styles.body}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={styles.heading}>Đặt tên cho cuộc hội thoại</Text>
      </TouchableWithoutFeedback>
      <TextInput
        style={styles.nameEdit}
        value={roomName}
        underlineColorAndroid={color.black}
        onChangeText={(text) => setRoomName(roomName)}
      />

      <View style={styles.inputFind}>
        <Image
          source={require("../../assets/images/find.png")}
          style={styles.iconSmall}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Search"
          placeholderTextColor={color.white}
          style={styles.input}
          clearButtonMode="always"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity
          onPress={() => console.log("onNewQuery(searchQuery)")}
        >
          <Text style={styles.txtSearch}>
            {searchQuery.length > 0 ? "Search" : ""}
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => onNewQuery(searchQuery)}>
                    <Text style={styles.txtSearch}>
                    {searchQuery.length > 0 ? "Search" : ""}
                    </Text>
                </TouchableOpacity> */}
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={styles.headingSmall}>Gợi ý:</Text>
      </TouchableWithoutFeedback>
      <ScrollView>
        <View style={styles.bodyContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.username}
            renderItem={({ item }) => (
              <SelectUser
                username={item.username}
                studentID={item.studentID}
                onSelect={handleSelectUser}
              />
            )}
          />
        </View>
      </ScrollView>
      {count > 0 ? (
        <TouchableOpacity
          onPress={() => router.push("/screen/ChatBox")}
          style={styles.outer}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/images/nextArrow.png")}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },

  nameEdit: {
    color: color.black,
    // fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 20,
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: "stretch",
  },

  outer: {
    width: 60,
    height: 60,
    backgroundColor: color.heading,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    alignSelf: "flex-end",
    bottom: 30,
    right: 20,
  },

  iconSmall: {
    width: 25,
    height: 25,
  },

  inputFind: {
    backgroundColor: color.black,
    // opacity: 0.4,
    width: "auto",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 40,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginHorizontal: 4,
    marginVertical: 20,
  },

  input: {
    fontSize: 14,
    color: color.white,
    width: "70%",
    marginRight: 20,
    marginLeft: 10,
    backgroundColor: color.black,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 40,
  },

  headingSmall: {
    fontSize: 18,
    color: color.heading,
    fontWeight: "bold",
    marginBottom: 10,
    // backgroundColor: 'red',
  },

  bodyContainer: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    // paddingHorizontal: 20,
  },

  txtSearch: {
    color: color.white,
    fontWeight: "bold",
    lineHeight: 29,
  },
});

export default Main;
