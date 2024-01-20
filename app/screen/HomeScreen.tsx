import { View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../container/color'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { router } from 'expo-router';
import MessageItem from '../../components/MessageItem'


const HomeScreen = () => {
  return (
    <ImageBackground style={{height: '100%', width: '100%'}} source={require('../../assets/images/Home.png')} resizeMode='stretch'>
        <StatusBar backgroundColor={'black'} barStyle={'light-content'}/>
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.inputFind}>
                        <Image source={require('../../assets/images/find.png')} style={styles.iconSmall} />
                        <TextInput style={styles.input}/>
                    </View>
                    <TouchableOpacity onPress={() => router.push("/screen/CreateScreen")}>
                       <Image source={require('../../assets/images/create.png')} style={styles.iconLarge} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bodyContainer}>
                    <ScrollView>
                        <MessageItem/>
                        <MessageItem/>
                        <MessageItem/>
                        <MessageItem/>
                        <MessageItem/>
                        <MessageItem/>
                        <MessageItem/>
                        <MessageItem/>
                        <MessageItem/>
                        <MessageItem/>
                        <MessageItem/>
                        <MessageItem/>
                        <MessageItem/>
                    </ScrollView>
                </View>
                

                <View style={styles.TabBar}>
                    <TouchableOpacity style={styles.tabContainer}>
                        
                            <Image style={styles.iconTab} source={require('../../assets/images/messageIconOn.png')} />
                            <Text style={[styles.txtTab,styles.textOn]}>
                                Tin nhắn
                            </Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push('/screen/ProfileScreen')} style={styles.tabContainer}>
                        
                            <Image style={styles.iconTab} source={require('../../assets/images/profileOff.png')} />
                            <Text style={[styles.txtTab,styles.textOff]}>
                                    Cá nhân
                            </Text>
                        
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    </ImageBackground>

  )
}

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
        justifyContent: 'space-between',
        paddingVertical: 4,
        alignItems: 'center',
    },

    inputFind: {
        backgroundColor: color.black,
        // opacity: 0.4,
        width: '80%',
        flexDirection: 'row',
        borderRadius: 40,
        paddingVertical: 12,
        paddingHorizontal: 18
    },

    input: {
        color: color.white,
        width: '80%',
        marginLeft: 12,
    },

    iconSmall: {
        width: 25,
        height: 25,
        
    },

    iconLarge: {
        width: 30,
        height: 30,
    },

    bodyContainer: {
        backgroundColor: color.white,
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        // paddingHorizontal: 20,
        paddingTop: 40,
    },

    TabBar: {
        width: 'auto',
        flexDirection: 'row',
        backgroundColor: color.white,
        bottom: 0,
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
  })

export default HomeScreen