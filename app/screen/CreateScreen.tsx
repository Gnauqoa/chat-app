import { View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import React from 'react'

import { router } from 'expo-router';
import UserItem from '../../components/UserItem'
import color from '../../container/color'

const CreateScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => router.push('/screen/HomeScreen')}>
                    <Image source={require('../../assets/images/backBtn.png')} style={styles.iconBack} />
                </TouchableOpacity>

                <View style={styles.inputFind}>
                    <Image source={require('../../assets/images/find_black.png')} style={styles.iconSmall} />
                    <TextInput style={styles.input}/>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <TouchableOpacity onPress={() => {router.push('/screen/CreateGroup')}}>
                    <View style={styles.itemContainer}>
                        <Text style={styles.heading}>Tạo cuộc hội thoại mới</Text>
                        <Image source={require('../../assets/images/nextIcon.png')} style={styles.nextIcon} resizeMode='stretch' />
                    </View> 
                </TouchableOpacity>

                <Text style={styles.headingSmall}>Gợi ý</Text>
                <ScrollView style={styles.listItems}>
                    <UserItem/>
                    <UserItem/>
                    <UserItem/>
                    <UserItem/>
                    <UserItem/>
                    <UserItem/>
                    <UserItem/>
                    <UserItem/>
                    <UserItem/>
                </ScrollView>           
            </View>
        </View>
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

    inputFind: {
        backgroundColor: color.gray,
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


    bodyContainer: {
        backgroundColor: color.white,
        width: '100%',
        height: '100%',

        // paddingHorizontal: 20,
    },

    iconBack: {
        width: 24,
        height: 20,
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
    }
  })

export default CreateScreen