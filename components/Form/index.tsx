import { View, Text,TouchableOpacity, TextInput, Image, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import color from '../../container/color';

interface FormProps {
    onSendMess: (message: string) => void;
  }

const Form: React.FC<FormProps> = (props) => {
    const [message,setMessage] = useState('');
    const handleSendMess = () => {
        
        props.onSendMess(message);
        // alert(message);
        setMessage('');
        // Keyboard.dismiss();
    }
  return (
    <View style={styles.Form}>
        <TouchableOpacity>
            <Text style={styles.moreIcon}>+</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
            <TextInput 
                value={message}
                placeholder='Write your message'
                placeholderTextColor={color.note}
                style={styles.input}
                onChangeText={(text) => setMessage(text)} 
            />

            {message.length>0 ? (
                <TouchableOpacity onPress={handleSendMess}> 
                    <Image style={styles.iconSend} source={require('../../assets/images/sendBtn.png')} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity>
                    <Image style={styles.iconMicro} source={require('../../assets/images/micro.png')} />
                </TouchableOpacity>
            )}

        </View>

    </View>
  )
}

export default Form