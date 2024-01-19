import { View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router';
import color from '../../container/color'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

const EditProfileScreen = () => {
  return (
    <ImageBackground style={{height: '100%', width: '100%'}} source={require('../../assets/images/Home.png')} resizeMode='stretch'>
        <StatusBar backgroundColor={'black'} barStyle={'light-content'}/>
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => router.push('/screen/ProfileScreen')}>
                    <Image style={styles.backBtn} source={require('../../assets/images/backBtnWhite.png')} />
                </TouchableOpacity>
                <Text style={styles.heading}>
                    Thông tin cá nhân
                </Text>
                <View style={styles.body}>
                    <View style={styles.boxRectangle}>
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.avatarUser}>
                            <Image style={styles.avatar} source={require('../../assets/images/Avatar.png')} />

                            <Text style={styles.name}>
                                Your name
                            </Text>

                            <Text style={styles.caption}> 
                                Chú thích
                            </Text>

                        </View>

                        <View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.title}>Gmail</Text>
                                <TextInput underlineColorAndroid={color.underline} style={styles.content}>21521479@gm.uit.edu.vn</TextInput>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.title}>Mã số sinh viên</Text>
                                <TextInput underlineColorAndroid={color.underline} style={styles.content}>21521479</TextInput>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.title}>Khoa</Text>
                                <TextInput underlineColorAndroid={color.underline} style={styles.content}>Khoa học Máy tính</TextInput>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.title}>Lớp</Text>
                                <TextInput underlineColorAndroid={color.underline} style={styles.content}>KHCL2021.1</TextInput>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.title}>Ngày sinh</Text>
                                <TextInput underlineColorAndroid={color.underline} style={styles.content}>03/07/2003</TextInput>
                            </View>
                        </View>

                        <TouchableOpacity  onPress={() => router.push('/screen/ProfileScreen')}>
                            <LinearGradient 
                                colors={[color.gradient1,color.gradient2]}
                                start={{x:0.5, y:0.5}}
                                style={styles.wrapBtn}
                            >
                                <Text style={styles.editBtn}>
                                    Update
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>


                </View>

            </View>
        </SafeAreaView>
    </ImageBackground>
  )
}

export default EditProfileScreen

const styles =StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        
    },

    body: {
        flex: 1,
        // paddingHorizontal: 20,
        paddingTop: 70,
        // backgroundColor: color.white,
        
    },

    boxRectangle: {
        backgroundColor: color.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flex:1,
        // marginTop: ,
    },

    bodyContainer: {
        position: 'absolute',
        width: '100%',
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
        paddingBottom: 40,
    },

    avatarUser: {
        alignSelf: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        marginBottom: 4,
    },

    avatar: {
        width: 120,
        height: 120,
        borderRadius: 120,
        borderWidth: 4,
        borderColor: color.white,
    },

    name: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: color.heading,
    },
    
    caption: {
        fontSize: 16,
        color: color.heading,
        fontWeight: '500'
    },

    wrapBtn: {
        alignSelf: 'center',
        paddingHorizontal: 50,
        paddingVertical: 8,
        borderRadius: 30,
        marginTop: 20,
    },
    
    editBtn: {
        alignSelf: 'center',
        color: color.white,  
        fontWeight: 'bold', 
        fontSize: 14,
    },

    infoContainer: {
        marginTop: 8,
        marginHorizontal: 32,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color.heading,
        paddingVertical: 4,
    },
    
    content: {
        fontSize: 14,
        paddingBottom: 6,
    },
    
    backBtn: {
        position: 'absolute',
        width: 40,
        height: 40,
        alignSelf: 'flex-start',
        left: 14,
        top: 14,
    }
})