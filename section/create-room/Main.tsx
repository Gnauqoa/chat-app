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

const Main = () => {
    const [roomName,setRoomName] = useState("Room 1");
  return (
    <View style={styles.body}>
        <Text style={styles.heading}>Đặt tên cho cuộc hội thoại</Text>
        <TextInput 
        style={styles.nameEdit}
        value={roomName}
        underlineColorAndroid={color.black}
        onChangeText={(text) => setRoomName(roomName)}
        />

        <TouchableOpacity onPress={() => router.push('/screen/ChatBox')} style={styles.outer}> 
        <Image style={styles.icon} source={require('../../assets/images/nextArrow.png')} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: color.white,
        paddingHorizontal: 20,
    },

    heading: {
        fontSize: 20,
        fontWeight: 'bold',
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
        resizeMode: 'stretch',
      },
    
      outer: {
        width: 60,
        height: 60,
        backgroundColor: color.heading,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        alignSelf: 'flex-end',
        bottom: 30,
        right: 20
      },
})

export default Main