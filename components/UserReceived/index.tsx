import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import color from '../../container/color';

const UserReceived = () => {
  return (
    <View style={styles.userReceive}>
        <Image style={styles.avatarMess} source={require('../../assets/images/Avatar.png')} />
        <View  style={styles.wrapMessage}>
          <Text style={styles.messageRecv}>Hello</Text>
        </View>
    </View>
  )
}

export default UserReceived