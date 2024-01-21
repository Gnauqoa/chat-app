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
} from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";

import { router } from "expo-router";
import UserItem from "../../components/UserItem";
import color from "../../container/color";
import filter from "lodash.filter";

const sampleData = [
  { username: "john.doe@example.com", studentID: "123123" },
  { username: "jane.smith@example.com", studentID: "121212" },
  { username: "sam.jones@example.com", studentID: "323232" },
  { username: "ledangquang@gmail.com", studentID: "21521338" },
  { username: "nguyenthingocha@gmail.com", studentID: "21520217" },
  { username: "truonghuutho@gmail.com", studentID: "21521479" },
  // Thêm các mục dữ liệu khác nếu cần
];

const CreateScreen = () => {
  const [data, setData] =
    useState<{ username: string; studentID: string }[]>(sampleData);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(sampleData, (item) => {
      const usernameLower = item.username.toLowerCase();
      const emailLower = item.studentID.toLowerCase();
      return (
        usernameLower.includes(formattedQuery) ||
        emailLower.includes(formattedQuery)
      );
    });
    setData(filteredData);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor={"black"}
        barStyle={"dark-content"}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={40}
        style={styles.container}
      >
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => router.push("/screen/HomeScreen")}>
            <View style={styles.wrapIcon}>
              <Image
                source={require("../../assets/images/backBtn.png")}
                style={styles.iconBack}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.inputFind}>
            <Image
              source={require("../../assets/images/find_black.png")}
              style={styles.iconSmall}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Search"
              clearButtonMode="always"
              style={styles.input}
              value={searchQuery}
              onChangeText={(query) => handleSearch(query)}
            />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <TouchableOpacity
            onPress={() => {
              router.push("/screen/CreateGroup");
            }}
          >
            <View style={styles.itemContainer}>
              <Text style={styles.heading}>Tạo cuộc hội thoại mới</Text>
              <Image
                source={require("../../assets/images/nextIcon.png")}
                style={styles.nextIcon}
                resizeMode="stretch"
              />
            </View>
          </TouchableOpacity>

          <Text style={styles.headingSmall}>Gợi ý</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },

  topContainer: {
    // backgroundColor: 'red',
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: "row",
    // justifyContent: 'space-between',
    paddingVertical: 4,
    alignItems: "center",
  },

  inputFind: {
    backgroundColor: color.gray,
    // opacity: 0.4,
    width: "80%",
    flexDirection: "row",
    borderRadius: 40,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },

  input: {
    color: color.black,
    width: "80%",
    marginLeft: 12,
  },

  iconSmall: {
    width: 25,
    height: 25,
  },

  bodyContainer: {
    backgroundColor: color.white,
    width: "100%",
    height: "100%",

    // paddingHorizontal: 20,
  },

  wrapIcon: {
    paddingVertical: 10,
    // backgroundColor: 'red',
  },

  iconBack: {
    width: 14,
    height: 10,
    marginRight: 20,
    // backgroundColor: 'red',
  },

  itemContainer: {
    // backgroundColor: 'red',
    paddingVertical: 22,
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },

  nextIcon: {
    width: 12,
    height: 20,
    marginRight: 20,
  },

  headingSmall: {
    fontSize: 18,
    color: color.heading,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
  },

  listItems: {
    marginBottom: 20,
  },
});

export default CreateScreen;
