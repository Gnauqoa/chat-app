import { StyleSheet } from 'react-native';

import color from '../../container/color';

const styles = StyleSheet.create({
    avatar: {
        width: 52,
        height: 52,
        marginRight: 14
    },

    userContainer: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderBottomWidth: 0.4,
        borderBottomColor: color.note,
        
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
        backgroundColor: color.heading,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default styles;