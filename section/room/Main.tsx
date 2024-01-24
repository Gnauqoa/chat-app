import { useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import useMessages from "../../hooks/useMessages";
import useAuth from "../../hooks/useAuth";
import Message from "../../components/Message";
import UserReceived from "../../components/UserReceived";
import { AntDesign } from "@expo/vector-icons";
import { useRef, useState } from "react";

const Main = () => {
  const [contentOffset, setContentOffset] = useState(0);
  const { user } = useAuth();
  const { roomId } = useLocalSearchParams();
  const {
    data,
    handleLoadMore: loadMessages,
    loading,
  } = useMessages({
    roomId: roomId as string,
  });
  const scrollViewRef = useRef<FlatList>(null);
  return (
    <View style={styles.body}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        onScroll={(event) =>
          setContentOffset(event.nativeEvent.contentOffset.y)
        }
        ref={scrollViewRef}
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
      {contentOffset > 100 && (
        <TouchableOpacity
          onPress={() =>
            scrollViewRef.current?.scrollToIndex({ index: 0, animated: true })
          }
          style={{
            backgroundColor: "#000",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-end",
            width: 36,
            height: 36,
            borderRadius: 999,
            bottom: 10,
            right: 20,
          }}
        >
          <AntDesign name="arrowdown" color="white" size={24} />
        </TouchableOpacity>
      )}
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
    right: 20,
    // backgroundColor: 'red',
  },
});
