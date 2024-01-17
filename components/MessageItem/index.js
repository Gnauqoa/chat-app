import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './style'

const MessageItem = (props) => {
  const {number} = props;
  const numberText = number<10 ? `0${number}` : number;
  const itemBg = number%2===0 ? styles.even : styles.odd;

  return (
    <TouchableOpacity>
      <View style={styles.item}>
          <View style={styles.userContainer}>
              <Image source={require('../../assets/images/Avatar.png')} style={styles.avatar} />
              <View style={styles.nameContainer}>
                  <Text style={styles.name}>
                      Person name 1
                  </Text>
                  <Text style={styles.txtNew}>
                      Message new!
                  </Text>
              </View>
          </View>

          <View style={styles.timeContainer} >
              <Text style={styles.txtTime}>2 phút trước</Text>
              <View style={styles.circleNumber}>
                  <Text style={styles.number}>3</Text>
              </View>
          </View>
      </View>
    </TouchableOpacity>
  )
}

export default MessageItem