import { StyleSheet } from 'react-native';

import color from '../../container/color';

const styles = StyleSheet.create({
  item: {
      // backgroundColor: 'red',
      flexDirection: 'row',
      paddingLeft: 20,
      paddingRight: 30,
      paddingVertical: 10,
      justifyContent: 'space-between',
      alignItems: 'center'
  },


  avatar: {
      width: 52,
      height: 52,
      marginRight: 14
  },

  userContainer: {
      
      // backgroundColor: 'green',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
  },

  nameContainer: {

  },

  name: {
      color: color.black,
      fontWeight: 'bold',
      fontSize: 18
  },

  txtNew: {
      fontSize: 12,
  },

  timeContainer: {
      alignItems: 'flex-end',
  },

  txtTime: {
      fontSize: 13,
      color: color.gray,
      fontWeight: '300',
      marginBottom: 10,
  },

  circleNumber: {
      backgroundColor: 'red',
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
  },

  number: {
      fontSize: 12,
      color: color.white,
      fontWeight: 'bold',
  },
})

export default styles;