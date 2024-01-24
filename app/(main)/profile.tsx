import { TextInput, View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {  router, useRouter } from 'expo-router';
import color from '../../container/color'
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import useAuth from '../../hooks/useAuth';

const ProfileScreen = () => {
    const { logout } = useAuth();
    const router = useRouter();
    const [editing,setEditing] = useState(false);
    const [name,setName] = useState('Your name');
    const [gmail,setGmail] = useState('21521479@gmail.com');
    const [maSV,setmaSV] = useState('21521479');
    const [major,setMajor] = useState('Khoa học máy tính');
    const [nameClass,setNameClass] = useState('KHCL2021.1');
    const [birth,setBirth] = useState('03/07/2003');
    const handleEditPress = () => {
      setEditing(true);
    };
    const handleCancelPress = () => {
      setEditing(false);
    };
    const handleSavePress = () => {
      setEditing(false);
    };
    const handleLogOut = () => {
      logout;
      router.push("/(auth)/login");
    }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground style={{height: '100%', width: '100%'}} source={require('../../assets/images/Home.png')} resizeMode='stretch'>
        <StatusBar
        translucent
        barStyle={"light-content"}
        />
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Thông tin cá nhân
                </Text>
                <View style={styles.body}>
                    <View style={styles.whiteRectangle}></View>
                    <View style={styles.boxContainer}>
                            <Image style={styles.avatar} source={require('../../assets/images/Avatar.png')} />
                            <View>
                                <View style={styles.nameContainer}>
                                    <View style={styles.edtName}>
                                      {editing ? (
                                        <TextInput 
                                          style={styles.name}
                                          value={name}
                                          onChangeText={(text) => setName(text)}
                                          onBlur={handleSavePress}
                                        >
                                      </TextInput>
                                      ) : (
                                        <TouchableOpacity onPress={handleEditPress}>
                                          <Text style={styles.name}>{name}</Text>
                                        </TouchableOpacity>
                                      )}
                                        <View style={styles.selectContainer}>
                                          {editing ? (
                                              <TouchableOpacity onPress={handleCancelPress}>
                                                <FontAwesomeIcon icon={faX} color='black' size={30} style={styles.optionIcon}/>
                                              </TouchableOpacity>
                                            ) : (
                                                ""
                                          )}

                                            {editing ? (
                                                <TouchableOpacity onPress={handleSavePress}>
                                                  <FontAwesomeIcon icon={faCheck} color='black' size={30} style={styles.optionIcon}/> 
                                                </TouchableOpacity>
                                              ) : (
                                                ""
                                              )}
                                        </View>

                                    </View>

                                    <Text style={styles.caption}>Chú thích</Text>
                                </View>

                                <ScrollView>
                                    <View style={styles.wrapInfosContainer}>
                                        <View style={styles.infoContainer}>
                                            <Text style={styles.title}>Gmail</Text>
                                            <Text style={styles.content}>21521479@gm.uit.edu.vn</Text>
                                        </View>
                                        <View style={styles.infoContainer}>
                                            <Text style={styles.title}>Mã số sinh viên</Text>
                                            <Text style={styles.content}>21521479</Text>
                                        </View>
                                        <View style={styles.infoContainer}>
                                            <Text style={styles.title}>Khoa</Text>
                                            <Text style={styles.content}>Khoa học Máy tính</Text>
                                        </View>
                                        <View style={styles.infoContainer}>
                                            <Text style={styles.title}>Lớp</Text>
                                            <Text style={styles.content}>KHCL2021.1</Text>
                                        </View>
                                        <View style={styles.infoContainer}>
                                            <Text style={styles.title}>Ngày sinh</Text>
                                            <Text style={styles.content}>03/07/2003</Text>
                                        </View>

                                    </View>
                                </ScrollView>
                            </View>      
                        </View>
                        <View style={styles.logoutContainer}>
                          <TouchableOpacity onPress={handleLogOut}>
                            <LinearGradient 
                                          colors={[color.gradient1,color.gradient2]}
                                          start={{x:0.5, y:0.5}}
                                          style={styles.wrapBtn}
                                      >
                                          <Text style={styles.logoutBtn}>
                                              Log out
                                          </Text>
                              </LinearGradient>
                          </TouchableOpacity>
                        </View>

                </View>

            </View>
      </ImageBackground>

    </SafeAreaView>
  )
}

export default ProfileScreen

const styles =StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },

    wrapInfosContainer: {
        // backgroundColor: 'red'
    },

    nameContainer: {
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10 
    },

    body: {
        flex: 1,
        // justifyContent: 'flex-end',
        
    },

    whiteRectangle: {
        top: 50,
        backgroundColor: color.white,
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },

    boxContainer: {
        position: 'absolute',
        flex: 1,
        width: '100%',
    },

    avatarContainer: {
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
        marginBottom: 20,
    },

    avatar: {
        width: 120,
        height: 120,
        borderRadius: 120,
        borderWidth: 4,
        borderColor: color.white,
        alignSelf: 'center',
    },

    name: {
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
        paddingHorizontal: 60,
        paddingVertical: 8,
        borderRadius: 30,
        marginBottom: 10,
    },
    
    logoutBtn: {
        alignSelf: 'center',
        color: color.white,  
        fontWeight: 'bold', 
        fontSize: 12,
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
    },
    

    edtName: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 4,
    },

    optionIcon: {
      paddingHorizontal: 30,
    },

    selectContainer: {
      width: 120,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'red',    
    },

    logoutContainer: {
      paddingVertical: 20,
      backgroundColor: color.white,
    }
})