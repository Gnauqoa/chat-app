import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style'
import color from '../../container/color';

interface MessageProps {
    key: number,
    content: string,
    number: number,
  }

const Message: React.FC<MessageProps> = (props) => {
  return (
    <View style={styles.sendContainer}>
    <LinearGradient 
        colors={[color.gradient1,color.gradient2]}
        start={{x:0.5, y:0.5}}
        style={styles.wrapMess}
    >
        <Text style={styles.userMessage}>{props.content}</Text>
    </LinearGradient>
    {/* <Text style={styles.time}>09:25 AM</Text> */}
</View>     
  )
}

export default Message