import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import color from '../../container/color';

const UserReceived = () => {
  return (
    <View style={styles.userReceive}>
        <Image style={styles.avatarMess} source={require('../../assets/images/Avatar.png')} />
        <View style={styles.messContainer}>
            <Text style={styles.messageRecv}>Hello</Text>
            <Text style={styles.messageRecv}>I have some question for you!</Text>
        </View>
    </View>
  )
}

export default UserReceived