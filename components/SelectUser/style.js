import { StyleSheet } from 'react-native';

import color from '../../container/color';

const styles = StyleSheet.create({
    avatar: {
        width: 52,
        height: 52,
        marginRight: 14
    },

    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderBottomWidth: 0.4,
        borderBottomColor: color.note,
        justifyContent: 'space-between'
    },

    userContainer: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
    },



    userInfoContainer: {

    },

    userHeading: {
        color: color.black,
        fontWeight: 'bold',
        fontSize: 18
    },

    userInfo: {
        color: color.note,
        fontSize: 14,
    },

    outer: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: color.note,
        backgroundColor: color.white,
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inner: {
        width: 12,
        height: 12,
        resizeMode: 'stretch',
    }
})

export default styles;