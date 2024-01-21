import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import color from "../../container/color";
import { FlatList, TextInput } from "react-native-gesture-handler";
import UserItem from "../../components/UserItem";
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

const HomeScreen = () => {
  const [data, setData] =
    useState<{ username: string; studentID: string }[]>(sampleData);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [count, setCount] = useState(0);

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
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require("../../assets/images/Home.png")}
      resizeMode="stretch"
    >
      <StatusBar
        translucent
        backgroundColor={"black"}
        barStyle={"dark-content"}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
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
                onChangeText={(query) => handleSearch(query)}
              />
            </View>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/create.png")}
                style={styles.iconLarge}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContainer}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.username}
              renderItem={({ item }) => (
                <UserItem username={item.username} studentID={item.studentID} />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
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
    justifyContent: "space-between",
    paddingVertical: 4,
    alignItems: "center",
  },

  inputFind: {
    backgroundColor: color.black,
    // opacity: 0.4,
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 40,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },

  input: {
    color: color.white,
    width: "80%",
    marginLeft: 12,
  },

  iconSmall: {
    width: 25,
    height: 25,
  },

  iconLarge: {
    width: 30,
    height: 30,
  },

  bodyContainer: {
    backgroundColor: color.white,
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // paddingHorizontal: 20,
    paddingTop: 40,
  },

  TabBar: {
    width: "auto",
    flexDirection: "row",
    backgroundColor: color.white,
    bottom: 0,
  },

  tabContainer: {
    flex: 1,
    // backgroundColor: 'red',
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  iconTab: {
    width: 30,
    height: 30,
  },

  txtTab: {
    fontSize: 16,
  },

  textOn: {
    fontWeight: "bold",
    color: color.heading,
  },

  textOff: {
    fontWeight: "500",
    color: color.note,
  },
});

export default HomeScreen;
