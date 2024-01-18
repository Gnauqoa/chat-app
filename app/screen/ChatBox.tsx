import { View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import React from 'react'
import { Stack, router } from 'expo-router';

import color from '../../container/color'


const ChatBox = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => router.replace('/screen/HomeScreen')}>
                    <Image  source={require('../../assets/images/backBtn.png')} style={styles.iconBack} />
                </TouchableOpacity>

                <View style={styles.userContainer}>
                    <Image source={require('../../assets/images/Avatar.png')} style={styles.avatar} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>
                            Person name 1
                        </Text>
                        <Text style={styles.status}>
                            Active now
                        </Text>
                    </View>
                 </View>
            </View>

        </View>

    </SafeAreaView>
  )
}

export default ChatBox

const styles =StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        
    },
    
    topContainer: {
        // backgroundColor: 'red',
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingVertical: 4,
        alignItems: 'center',
    },

    avatar: {
        width: 44,
        height: 44,
        marginRight: 14
    },
  
    userContainer: {
        
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
  
    nameContainer: {
  
    },
  
    name: {
        color: color.black,
        fontWeight: 'bold',
        fontSize: 18
    },

    status: {
        color: color.note,
        fontSize: 12,
    },

    iconBack: {
        width: 24,
        height: 20,
        marginRight: 20
        // backgroundColor: 'red',
    },
})
