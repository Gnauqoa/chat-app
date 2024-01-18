import { View, Text, TouchableOpacity, Image, useAnimatedValue } from 'react-native'
import React, { useState } from 'react'

import styles from './style'
import color from '../../container/color';

const SelectUser = (props) => {
  // const {number} = props;
  // const numberText = number<10 ? `0${number}` : number;
  // const itemBg = number%2===0 ? styles.even : styles.odd;
  const [isSelected,setSelect] = useState(false);
  const handleSelect = (select) => {
    setSelect(!select);
    props.onSelect(!select);
    return;
  }
  const outerStyle = {
    backgroundColor: isSelected ? color.heading : color.white, // Sử dụng color.heading khi isSelected là true
  };

  return (
    <TouchableOpacity onPress={() => handleSelect(isSelected) }>
        <View style={styles.itemContainer}>
            <View style={styles.userContainer}> 
              <Image source={require('../../assets/images/Avatar.png')} style={styles.avatar} />
              <View style={styles.userInfoContainer}>
                  <Text style={styles.userHeading}>Axyaabc</Text>
                  <Text style={styles.userInfo}>MSSV | role</Text>
              </View>
            </View>


            <TouchableOpacity onPress={() => handleSelect(isSelected) } style={[styles.outer,outerStyle]}> 
                <Image style={styles.inner} source={require('../../assets/images/tick.png')} />
            </TouchableOpacity>

        </View>
    </TouchableOpacity>
  )
}

export default SelectUser


