import { useLocalSearchParams } from "expo-router";
import { useRef } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import useMessages from "../../hooks/useMessages";
import useAuth from "../../hooks/useAuth";
import Message from "../../components/Message";
import UserReceived from "../../components/UserReceived";

const Main = () => {
  const { user } = useAuth();
  const scrollViewRef = useRef<ScrollView>(null);
  const { roomId } = useLocalSearchParams();
  const { data } = useMessages({ roomId: roomId as string });
  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.body}>
        <FlatList
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
      </View>
    </ScrollView>
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
});
