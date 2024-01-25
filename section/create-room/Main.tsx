import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";
import color from "../../container/color";
import SelectUser from "../../components/SelectUser";
import useSearchUsers from "../../hooks/useSearchUsers";
import { User } from "../../types/user";

const Main = () => {
  const [selectedList, setSelectedList] = useState<User[]>([]);
  const { handleQuery, data, handleLoadMore } = useSearchUsers();
  const [searchQuery, setSearchQuery] = useState("");
  const [roomName, setRoomName] = useState("Room 1");
  const handleSelectUser = (user: User) => {
    setSelectedList((prev) => [...prev, user]);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Đặt tên cho cuộc hội thoại</Text>
      <TextInput
        style={styles.nameEdit}
        value={roomName}
        underlineColorAndroid={color.black}
        onChangeText={setRoomName}
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
        <TouchableOpacity onPress={() => handleQuery(searchQuery)}>
          <Text style={styles.txtSearch}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bodyContainer}>
        <FlatList
          data={data.items.filter(
            (item) =>
              selectedList.findIndex((selected) => selected.id === item.id) ===
              -1
          )}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <SelectUser
              username={item.name}
              studentID={item.id}
              onSelect={handleSelectUser}
            />
          )}
        />
      </View>

      {/* {count > 0 ? (
        <TouchableOpacity
          onPress={() => router.push("/screen/ChatBox")}
          style={styles.outer}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/images/nextArrow.png")}
          />
        </TouchableOpacity>
      ) : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
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
  },

  bodyContainer: {
    backgroundColor: "white",
  },

  txtSearch: {
    color: color.white,
    fontWeight: "bold",
    lineHeight: 29,
  },
});

export default Main;
