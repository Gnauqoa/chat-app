import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style'
import color from '../../container/color';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface MessageProps {
    key: number,
    content: string,
    number: number,
    onDeleteMess: (index: number) => void;
    onShowTime: (index: number) => void;
  }

const Message: React.FC<MessageProps> = (props) => {
  const currentTimeString: string = new Date().toLocaleTimeString();
  const [showTime,setShowTime] = useState(false);
  const f = new Intl.DateTimeFormat("en-us", {
    
    
  })
  const handleShowTime = () => {
    props.onShowTime(1);
    setShowTime(!showTime)
  }

  const handleDeleteMess = () => {
    props.onDeleteMess(1);
  }

  return (
    <TouchableOpacity onLongPress={handleDeleteMess} onPress={handleShowTime} style={styles.sendContainer}>
      <LinearGradient 
          colors={[color.gradient1,color.gradient2]}
          start={{x:0.5, y:0.5}}
          style={styles.wrapMess}
      >
          <Text style={styles.userMessage}>{props.content}</Text>
      </LinearGradient>
      {showTime && <Text style={styles.time}>{currentTimeString}</Text>}
    </TouchableOpacity>     
  )
}

export default Message