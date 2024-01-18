import { StyleSheet } from 'react-native';

import color from '../../container/color';

const styles = StyleSheet.create({
    userMessage: {
        color: color.white,
        // alignSelf: 'flex-end',
    },

    wrapMess: {
        // alignSelf: 'flex-end',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 8,
    },

    sendContainer: {
        alignItems: 'flex-end',
    },

    time: {
        fontSize: 13,
        color: color.note,
        marginBottom: 10,
    }
})

export default styles;