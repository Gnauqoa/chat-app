import { View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router';
import color from '../../container/color'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import SelectUser from '../../components/SelectUser'
import filter from 'lodash.filter'

const Header = () => {
  return (
    <View style={styles.header}>
        <StatusBar translucent barStyle={'dark-content'}/>
        <TouchableOpacity onPress={router.back}>
            <View style={styles.wrapBackBtn}>
                <Image
                    source={require("../../assets/images/backBtn.png")}
                    style={styles.iconBack}
                />
            </View>
        </TouchableOpacity>
            <Text style={styles.heading}>Thêm thành viên</Text>    
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        // position: 'absolute',
        // marginHorizontal: 20,
        // paddingHorizontal: 20,
        paddingVertical: 20,
        // marginVertical: 10,
        flexDirection: "row",
        
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

    wrapBackBtn: {
        paddingVertical: 12,
        paddingLeft: 20,
        // backgroundColor: 'red',
    },

    iconBack: {
        width: 14,
        height: 10,
        marginRight: 20
        // backgroundColor: 'red',
    },

    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: 'red',
        width: 'auto',
        marginRight: 20,
        color: color.heading,  
    },
})

export default Header