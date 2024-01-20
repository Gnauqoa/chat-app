import { StyleSheet } from 'react-native';

import color from '../../container/color';

const styles = StyleSheet.create({
    userMessage: {
        color: color.white,
        // alignSelf: 'flex-end',
    },

    wrapMess: {
        alignSelf: 'flex-end',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 8,
        maxWidthwidth: '75%',
    },

    sendContainer: {
        alignItems: 'flex-end',
        color: '#000E08',
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '400',
        // lineHeight: 12,
        letterSpacing: 0.12,
    },

    time: {
        width: 54,
        
        color: 'rgba(121, 124, 123, 0.50)',
        fontSize: 10,
        fontFamily: 'Poppins',
        fontWeight: '500',
        lineHeight: 10,
        
    }
})

export default styles;