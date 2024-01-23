import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import color from "../../container/color";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  const router = useRouter();
  return (
    <SafeAreaView >
        <View style={styles.topContainer}>
          <StatusBar translucent  />
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
                <Text style={styles.name}>Person name 1</Text>
                <Text style={styles.status}>Active now</Text>
              </View>
            </View>
          </View>

          <View style={styles.rightTopContainer}>
            <TouchableOpacity>
              <Image
                style={styles.iconPhone}
                source={require("../../assets/images/phone.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconCamera}
                source={require("../../assets/images/camera.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
    
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
