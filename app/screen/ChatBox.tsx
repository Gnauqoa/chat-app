import { View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router';
import color from '../../container/color'
import Row from '../../components/Row';
import { LinearGradient } from 'expo-linear-gradient';

import Form from '../../components/Form'
import Message from '../../components/Message'
import UserReceived from '../../components/UserReceived';

const ChatBox = () => {
    // const [message,setMessage] = useState('');
    const [messList,setMessList] = useState<string[]>([]);
    const handleSendMessage = (message: string) => {
        
        //Add message
        setMessList([...messList,message])
    }
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.leftTopContainer}>
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

                <View style={styles.rightTopContainer}>
                    <TouchableOpacity>
                        <Image style={styles.iconPhone} source={require('../../assets/images/phone.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconCamera} source={require('../../assets/images/camera.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.userReceive}>
                        <Image style={styles.avatarMess} source={require('../../assets/images/Avatar.png')} />
                        <View style={styles.messContainer}>
                            <Text style={styles.messageRecv}>Hello</Text>
                            <Text style={styles.messageRecv}>I have some question for you!</Text>
                        </View>
                    </View>
                    
                    {/* <UserReceived/> */}
                    {
                        messList.map((item,index) => {
                            return <Message key={index} content={item} number={index+1}/>
                        })
                    }
                </View>
            </ScrollView>

            
            <Form onSendMess={handleSendMessage} />

            {/* <KeyboardAvoidingView 
                style={styles.addTask}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset = {10}
            > */}
            


            {/* <TouchableOpacity
            onPress= {handleAddMessage}
            >
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity> */}

            {/* </KeyboardAvoidingView> */}
        </View>

    </SafeAreaView>
  )
}

export default ChatBox

const styles =StyleSheet.create({
    container: {
        flex: 1,
        
    },

    body: {
        // backgroundColor: 'red',
        flex:1,
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
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

    leftTopContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rightTopContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconPhone: {
        width: 18,
        height: 18,
        resizeMode: 'stretch',
        marginRight: 20,
    },

    iconCamera: {
        width: 24,
        height: 24,
        resizeMode: 'stretch'
    },



    userReceive: {
        width: '100%',
        flexDirection: 'row',
    },

    avatarMess: {
        width: 36,
        height: 36,
        marginRight: 14,
    },

    messContainer: {
        width: '70%',
        flexDirection: 'column',
        
    },

    messageRecv: {
        alignSelf: 'flex-start',
        width: 'auto',
        fontSize: 16,
        backgroundColor: color.gray,
        paddingHorizontal:10,
        paddingVertical: 12,
        borderRadius: 20,
        marginBottom: 10,
    },


})
