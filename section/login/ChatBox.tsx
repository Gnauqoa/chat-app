import { Alert, View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import React, { useEffect, useRef, useState } from 'react'
import { Stack, router } from 'expo-router';
import color from '../../container/color'
import Row from '../../components/Row';
import { LinearGradient } from 'expo-linear-gradient';

import Form from '../../components/Form'
import Message from '../../components/Message'
import UserReceived from '../../components/UserReceived';
import { format, isToday, parse } from 'date-fns';
import { vi } from 'date-fns/locale'; 

const ChatBox = () => {
    const displayDates: JSX.Element[] = [];
    const [previousDate, setPreviousDate] = useState<string | null>(null);
    const scrollViewRef = useRef<ScrollView>(null);
    // const [message,setMessage] = useState('');
    const [messList, setMessList] = useState<{ message: string; createdAt: Date }[]>([]);
    const [currentDate, setCurrentDate] = useState<Date | null>(null);
    // Lấy thời gian hiện tại
    const currentTime = new Date();
    // Định dạng thời gian theo AM/PM và locale tiếng Việt
    const formattedTime = format(currentTime, 'hh:mm a', { locale: vi });
    const handleSendMessage = (message: string) => { 
        // Add newMessage
        const newMessage = { message, createdAt: new Date() };
        setMessList([...messList, newMessage]);
        // console.log(formattedTime);

        // Check if the message is sent on a new day
        if (!currentDate || !isToday(newMessage.createdAt)) {
        setCurrentDate(newMessage.createdAt);
        } 
    }

     // Sử dụng useEffect để cuộn xuống cuối cùng khi messList thay đổi
    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
          }
    }, [messList]);

    const handleShowTime = (index: number) => {
        
    }  

    const handleDeleteMess = (index: number) => {
        Alert.alert('Delete message', 'Do you really want to delete this message', [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            {
                text: 'OK', 
                onPress: () => {
                    // Delete task
                    const messageListTmp = [...messList];
                    messageListTmp.splice(index,1);
                    setMessList(messageListTmp);
                } },
          ]);
    }
  return (
    <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset = {Platform.OS === 'ios' ? 40 : 20}
            style={styles.container}>
            <StatusBar translucent backgroundColor={'black'} barStyle={'dark-content'}/>
            <View style={styles.topContainer}>
                <View style={styles.leftTopContainer}>
                    <TouchableOpacity onPress={() => router.replace('/screen/HomeScreen')}>
                        <View style={styles.wrapBackBtn}>
                            <Image  source={require('../../assets/images/backBtn.png')} style={styles.iconBack} />
                        </View>
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

            <ScrollView ref={scrollViewRef} style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                <View style={styles.body}>
                    {/* <View style={styles.userReceive}>
                        <Image style={styles.avatarMess} source={require('../../assets/images/Avatar.png')} />
                        <View style={styles.messContainer}>
                            <Text style={styles.messageRecv}>Hello</Text>
                            <Text style={styles.messageRecv}>I have some question for you!</Text>
                        </View>
                    </View> */}
                    
                    {/* {messList.map((item, index) => {
                        const formattedTime = format(item.createdAt, 'hh:mm a', { locale: vi });
                        const displayDate = isToday(item.createdAt) ? 'Today' : format(item.createdAt, 'dd/MM/yyyy', { locale: vi });

                        return (
                            <View key={index}>
                            {currentDate !== null && (
                              <Text style={{ textAlign: 'center', marginBottom: 8, color: 'gray' }}>{displayDate}</Text>
                            )}
                          </View>
                        );
                    })} */}
                    
                    <UserReceived key={1} content={'Hello'} number={1}  onShowTime={() => handleShowTime(1)} time={formattedTime}  />
                    {
                            messList.map((item, index) => {
                                const formattedTime = format(item.createdAt, 'hh:mm a', { locale: vi });
                                const currentDisplayDate = isToday(item.createdAt)
                                ? 'Today'
                                : format(item.createdAt, 'dd/MM/yyyy', { locale: vi });
                                let showDate = false;
                                let displayDate = null;
                                
                                if (previousDate !== currentDisplayDate) {
                                    
                                    setPreviousDate(currentDisplayDate);
                                    showDate=true;
                                    console.log(showDate)
                                    displayDate = (
                                        <Text key={`date-${index}`} style={{ textAlign: 'center', marginBottom: 8, color: 'gray' }}>
                                          {currentDisplayDate}
                                        </Text>
                                      );
                                      
                                }
                            return (
                                <View key={index}>
                                            {/* <Text key={`date-${index}`} style={{ textAlign: 'center', marginBottom: 10, marginTop:10, color: 'gray' }}>
                                                {currentDisplayDate}
                                             </Text> */}
                                            {displayDates}
                                            <Message
                                            key={index}
                                            content={item.message}
                                            number={index + 1}
                                            onDeleteMess={() => handleDeleteMess(index)}
                                            onShowTime={() => handleShowTime(index)}
                                            time={formattedTime}
                                            />
                                </View>
                            );
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
        </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default ChatBox

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
    },

    body: {
        // backgroundColor: 'red',
        flex:1,
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
      },
    
    scrollContent: {
        paddingBottom: 0, // Đảm bảo giá trị này là 0
    },


    scrollView: {
        flex: 1,
        height: '100%',
        flexShrink: 1,
    },

    topContainer: {
        backgroundColor: 'white',
        // position: 'absolute',
        // marginHorizontal: 20,
        // paddingHorizontal: 20,
        paddingVertical: 20,
        // marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#333333',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
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
    
    wrapBackBtn: {
        paddingVertical: 12,
        paddingLeft: 20,
        // backgroundColor: 'red',
    },

    iconBack: {
        width: 14,
        height: 10,
        marginRight: 20,
        // padding: 20,
        // backgroundColor: 'red',
    },

    leftTopContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rightTopContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
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
