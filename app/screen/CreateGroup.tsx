import { View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router';
import color from '../../container/color'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import SelectUser from '../../components/SelectUser'

const CreateGroup = () => {
    const [count,setCount] = useState(0);
    const handleSelectUser = (isSelected: boolean) => {
        if (isSelected===true) {
            setCount(count+1);
        }
        else {
            setCount(count-1);
        }
    }
  return (
<SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset = {40}
            style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => router.replace('/screen/CreateScreen')}>
                    <View style={styles.wrapIcon}>
                        <Image  source={require('../../assets/images/backBtn.png')} style={styles.iconBack} />
                    </View>
                </TouchableOpacity>

                <Text style={styles.heading}>Tin nhắn mới</Text>
            </View>
            <View style={styles.fromContainer}>
                <Text style={styles.headingSmall}>
                    Đến
                </Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.headingSmall}>Gợi ý</Text>
                <ScrollView style={styles.listItems}>
                    <SelectUser onSelect={handleSelectUser} />
                </ScrollView>           
            </View>
            {count>0 ? (
            <TouchableOpacity onPress={() => router.push('/screen/ChatBox')} style={styles.outer}> 
              <Image style={styles.icon} source={require('../../assets/images/nextArrow.png')} />
            </TouchableOpacity>
            ) : null}

        </KeyboardAvoidingView>

    </SafeAreaView>
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
        // justifyContent: 'space-between',
        paddingVertical: 4,
        alignItems: 'center',
    },

    

    input: {
        fontSize: 14,
        color: color.black,
        width: 'auto',
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: color.gray,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 40
    },

    iconSmall: {
        width: 25,
        height: 25,
        
    },

    fromContainer: {
        marginBottom: 20,
    },

    bodyContainer: {
        backgroundColor: color.white,
        width: '100%',
        height: '100%',

        // paddingHorizontal: 20,
    },

    wrapIcon: {
        paddingVertical: 10,
        // backgroundColor: 'red',
    },

    iconBack: {
        width: 14,
        height: 10,
        marginRight: 20
        // backgroundColor: 'red',
    },

    itemContainer: {
        // backgroundColor: 'red',
        paddingVertical: 22,
        paddingHorizontal: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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

    nextIcon: {
        width: 12,
        height: 20,
        marginRight: 20,   
    },
    
    headingSmall: {
        fontSize: 18,
        color: color.heading,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10
    },
    
    listItems: {
        marginBottom: 20,
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

    icon: {
        width: 24,
        height: 24,
        resizeMode: 'stretch',
    }

  })

export default CreateGroup