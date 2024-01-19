import { View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import color from '../../container/color'

const ProfileScreen = () => {
  return (
    <ImageBackground style={{height: '100%', width: '100%'}} source={require('../../assets/images/Home.png')} resizeMode='stretch'>
        <StatusBar backgroundColor={'black'} barStyle={'light-content'}/>
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Thông tin cá nhân
                </Text>
                <View style={styles.body}>
                    <View style={styles.avatarUser}>
                        <Image source={require('../../assets/images/Avatar.png')} />

                    </View>
                    <View style={styles.bodyContainer}>

                    </View>

                </View>
                <View style={styles.TabBar}>
                    <TouchableOpacity onPress={() => router.push('/screen/HomeScreen')} style={styles.tabContainer}>
                        
                            <Image style={styles.iconTab} source={require('../../assets/images/messageOff.png')} />
                            <Text style={[styles.txtTab,styles.textOff]}>
                                Tin nhắn
                            </Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabContainer}>
                        
                            <Image style={styles.iconTab} source={require('../../assets/images/profileOn.png')} />
                            <Text style={[styles.txtTab,styles.textOn]}>
                                    Cá nhân
                            </Text>
                        
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </ImageBackground>
  )
}

export default ProfileScreen

const styles =StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        
    },

    body: {
        flex: 1,
        // paddingHorizontal: 20,
        paddingTop: 40,
        
    },

    bodyContainer: {
        backgroundColor: color.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flex:1,
        // marginTop: ,
    },

    TabBar: {
        width: 'auto',
        flexDirection: 'row',
        backgroundColor: color.white,
        
    },

    tabContainer: {
        flex: 1,
        // backgroundColor: 'red',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconTab: {
        width: 30,
        height: 30,
    },

    txtTab: {
        fontSize: 16,
    },

    textOn: {
        fontWeight: 'bold',
        color: color.heading,
    },

    textOff: {
        fontWeight: '500',
        color: color.note,
    },
    
    heading: {
        fontSize: 28,
        color: color.white,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: 50,
        paddingBottom: 50,
    },

    avatarUser: {
        position: 'absolute'
    }
})