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
import React, { useContext, useEffect, useState } from "react";
import color from "../../container/color";
import { FlatList, TextInput } from "react-native-gesture-handler";
import UserItem from "../../components/UserItem";
import { RoomContext, RoomContextType } from "../../context/room";

const HomeScreen = () => {
  const { data, onNewQuery, loading } = useContext(
    RoomContext
  ) as RoomContextType;
  const [searchQuery, setSearchQuery] = useState<string>("");
  useEffect(() => {
    onNewQuery("");
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={require("../../assets/images/Home.png")}
          resizeMode="stretch"
        >
        <StatusBar
        translucent
        barStyle={"light-content"}
        />
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
                onChangeText={setSearchQuery}
              />
              <TouchableOpacity onPress={() => onNewQuery(searchQuery)}>
                <Text style={styles.txtSearch}>
                  {searchQuery.length>0 ? "Search" : ""}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity >
              <Image
                source={require("../../assets/images/plusIcon.png")}
                style={styles.iconLarge}
              />
            </TouchableOpacity>
          </View>
          {loading ? (
            <Text>Đang tải</Text>
          ) : (
            <View style={styles.bodyContainer}>
              <FlatList
                data={data.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <UserItem {...item} />}
              />
            </View>
          )}
        </View>

       </ImageBackground>
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
    width: "70%",
    marginLeft: 12,
  },

  iconSmall: {
    width: 25,
    height: 25,
  },

  iconLarge: {
    width: 50,
    height: 50,
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

  txtSearch: {
    color: color.white,
    fontWeight: 'bold',
    lineHeight: 29,
  }
});

export default HomeScreen;
