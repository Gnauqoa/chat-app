import { useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useRef } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import useMessages from "../../hooks/useMessages";
import useAuth from "../../hooks/useAuth";
import Message from "../../components/Message";
import UserReceived from "../../components/UserReceived";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const Main = () => {
  const { user } = useAuth();
  const scrollViewRef = useRef<FlatList>(null);
  const { roomId } = useLocalSearchParams();
  const { data, handleLoadMore: loadMessages } = useMessages({
    roomId: roomId as string,
  });
  const thresouldVal = data.items.slice(-5);
  const reachIds = thresouldVal.map((val) => val.id);

  return (
    <View style={styles.body}>
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
          <FontAwesomeIcon icon={faArrowCircleDown} color='black' size={40} style={styles.scrollDownIcon}/>
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
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 10,
    right: 10,
    // backgroundColor: 'red',
  },

});
