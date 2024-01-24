import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import useMessages from "../../hooks/useMessages";
import useAuth from "../../hooks/useAuth";
import Message from "../../components/Message";
import UserReceived from "../../components/UserReceived";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const { user } = useAuth();
  const { roomId } = useLocalSearchParams();
  const {
    data,
    handleLoadMore: loadMessages,
    loading,
  } = useMessages({
    roomId: roomId as string,
  });

  return (
    <View style={styles.body}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        // ref={scrollViewRef}
        inverted
        contentContainerStyle={{
          display: "flex",
        }}
        onEndReached={loadMessages}
        data={data.items}
        keyExtractor={(item) => `message ${item.id}`}
        renderItem={({ item }) =>
          item.userId === user?.id ? (
            <Message key={`message ${item.id}`} {...item} />
          ) : (
            <UserReceived key={`message ${item.id}`} {...item} />
          )
        }
      />
      <View>
        <FontAwesomeIcon
          icon={faArrowCircleDown}
          color="black"
          size={40}
          style={styles.scrollDownIcon}
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 0, // Đảm bảo giá trị này là 0
  },
  body: {
    // backgroundColor: 'red',
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "column",
  },

  scrollView: {
    flex: 1,
    height: "100%",
    flexShrink: 1,
  },

  userReceive: {
    width: "100%",
    flexDirection: "row",
  },

  avatarMess: {
    width: 36,
    height: 36,
    marginRight: 14,
  },

  messContainer: {
    width: "70%",
    flexDirection: "column",
  },

  scrollDownIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 10,
    right: 10,
    // backgroundColor: 'red',
  },
});
