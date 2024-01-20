import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './style'
import { router } from 'expo-router'



const UserItem = (props) => {

  return (
    <TouchableOpacity onPress={() => router.push('/screen/ChatBox')}>
        <View style={styles.userContainer}>
            <Image source={require('../../assets/images/Avatar.png')} style={styles.avatar} />
            <View style={styles.userInfoContainer}>
                <Text style={styles.userHeading}>{props.username}</Text>
                <Text style={styles.userInfo}>MSSV: {props.studentID}</Text>
            </View>
            
        </View>


    </TouchableOpacity>
  )
}

export default UserItem

