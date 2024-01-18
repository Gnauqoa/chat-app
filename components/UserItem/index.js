import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './style'

const UserItem = (props) => {
  const {number} = props;
  const numberText = number<10 ? `0${number}` : number;
  const itemBg = number%2===0 ? styles.even : styles.odd;

  return (
    <TouchableOpacity>
        <View style={styles.userContainer}>
            <Image source={require('../../assets/images/Avatar.png')} style={styles.avatar} />
            <View style={styles.userInfoContainer}>
                <Text style={styles.userHeading}>Axyaabc</Text>
                <Text style={styles.userInfo}>MSSV | role</Text>
            </View>
            
        </View>


    </TouchableOpacity>
  )
}

export default UserItem

