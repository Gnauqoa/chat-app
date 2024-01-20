import { StyleSheet } from 'react-native';

import color from '../../container/color';

const styles = StyleSheet.create({
    userReceive: {
        width: '75%',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
        marginBottom: 10,
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
    wrapMessage: {
        width: 'auto',
        height: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 20,
        backgroundColor: color.gray,
    },

    messageRecv: {
        // alignSelf: 'flex-start',
        // width: 'auto',
        // fontSize: 16,
        // backgroundColor: color.gray,
        // paddingHorizontal:10,
        // paddingVertical: 12,
        // borderRadius: 20,
        color: color.black,
    },
})

export default styles;