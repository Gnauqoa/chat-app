import { StyleSheet } from 'react-native';

import color from '../../container/color';

const styles = StyleSheet.create({
    userReceive: {
        width: '100%',
        flexDirection: 'row',
    },

    avatarMess: {
        width: 36,
        height: 36,
        marginRight: 14,
    },

    messContainer: {
        width: '70%',
        flexDirection: 'column',
        
    },

    messageRecv: {
        alignSelf: 'flex-start',
        width: 'auto',
        fontSize: 16,
        backgroundColor: color.gray,
        paddingHorizontal:10,
        paddingVertical: 12,
        borderRadius: 20,
        marginBottom: 10,
    },
})

export default styles;