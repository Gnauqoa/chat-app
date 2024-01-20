import { StyleSheet } from 'react-native';

import color from '../../container/color';

const styles = StyleSheet.create({
    Form: {
        width:'auto',
        // backgroundColor: 'green',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
    },

    moreIcon: {
        color: color.note,
        fontSize: 40,
        fontWeight: '200',
        marginRight: 10,
    },

    inputContainer: {
        width: '90%',
        backgroundColor: color.gray,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },

    iconMicro: {
        width: 14,
        height: 24,
        resizeMode: 'stretch',
    },

    iconSend: {
        width: 34,
        height: 34,
        resizeMode: 'stretch',
    },

    input: {
        height: 44,
        width: '90%',
        // backgroundColor: color.gray,
        // borderColor: color.second,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: color.black,
        
    },
})

export default styles;