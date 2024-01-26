import { Entypo } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { User } from "../../types/user";
import { StyleSheet } from "react-native";
import color from "../../container/color";

const RemoveUser = ({
  onRemove,
  user,
}: {
  user: User;
  onRemove: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onRemove}>
      <View style={styles.itemContainer}>
        <View style={styles.userContainer}>
          <Image
            source={require("../../assets/images/Avatar.png")}
            style={styles.avatar}
          />
          <View style={styles.userInfoContainer}>
            <Text style={styles.userHeading}>{user.name}</Text>
            <Text style={styles.userInfo}>ID: {user.id}</Text>
          </View>
        </View>

        <Entypo name="cross" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default RemoveUser;

const styles = StyleSheet.create({
  avatar: {
    width: 52,
    height: 52,
    marginRight: 14,
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: color.note,
    justifyContent: "space-between",
  },

  userContainer: {
    // backgroundColor: 'red',
    flexDirection: "row",
    alignItems: "center",
  },

  userInfoContainer: {},

  userHeading: {
    color: color.black,
    fontWeight: "bold",
    maxWidth: 240,
    fontSize: 18,
  },

  userInfo: {
    color: color.note,
    fontSize: 14,
  },

  outer: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: color.note,
    backgroundColor: color.white,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  inner: {
    width: 12,
    height: 12,
    resizeMode: "stretch",
  },
});
