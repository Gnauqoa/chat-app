import { View, Text } from 'react-native'
import React from 'react'
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
  const handleShowTime = () => {
    props.onShowTime(1);
    
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
      <Text style={styles.time}>09:25 AM</Text>
    </TouchableOpacity>     
  )
}

export default Message