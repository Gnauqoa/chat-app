import { View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router';
import color from '../../container/color'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import SelectUser from '../../components/SelectUser'
import filter from 'lodash.filter'

const sampleData = [
    { username: 'john.doe@example.com', studentID: '123123' },
    { username: 'jane.smith@example.com', studentID: '121212' },
    { username: 'sam.jones@example.com', studentID: '323232' },
    { username: 'ledangquang@gmail.com', studentID: '21521338' },
    { username: 'nguyenthingocha@gmail.com', studentID: '21520217' },
    { username: 'truonghuutho@gmail.com', studentID: '21521479' },
    // Thêm các mục dữ liệu khác nếu cần
  ];

const CreateGroup = () => {
    const [count,setCount] = useState(0);
    const handleSelectUser = (isSelected: boolean) => {
        if (isSelected===true) {
            setCount(count+1);
        }
        else {
            setCount(count-1);
        }
    }

    const [data, setData] = useState<{ username: string; studentID: string; }[]>(sampleData);
    const [fullData, setFullData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const formattedQuery = query.toLowerCase();
        const filteredData = filter(sampleData, (item) => {
          const usernameLower = item.username.toLowerCase();
          const emailLower = item.studentID.toLowerCase();
          return usernameLower.includes(formattedQuery) || emailLower.includes(formattedQuery);
        });
        setData(filteredData);
    }
  return (
<SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset = {40}
            style={styles.container}>
            <StatusBar translucent backgroundColor={'black'} barStyle={'dark-content'}/>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => router.replace('/screen/CreateScreen')}>
                    <View style={styles.wrapIcon}>
                        <Image  source={require('../../assets/images/backBtn.png')} style={styles.iconBack} />
                    </View>
                </TouchableOpacity>

                <Text style={styles.heading}>Tin nhắn mới</Text>
            </View>
            <View style={styles.fromContainer}>
                <Text style={styles.headingSmall}>
                    Đến
                </Text>
                <TextInput 
                    autoCapitalize='none' 
                    placeholder='Search' 
                    clearButtonMode='always'                 
                    style={styles.input} 
                    value={searchQuery}
                    onChangeText={(query) => handleSearch(query)}/>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.headingSmall}>Gợi ý</Text>
                <FlatList 
                            data={data}
                            keyExtractor={(item) => item.username}
                            renderItem={({item}) => (
                                <SelectUser username={item.username} studentID={item.studentID} onSelect={handleSelectUser} />
                            )}
                />         
            </View>
            {count>0 ? (
            <TouchableOpacity onPress={() => router.push('/screen/ChatBox')} style={styles.outer}> 
              <Image style={styles.icon} source={require('../../assets/images/nextArrow.png')} />
            </TouchableOpacity>
            ) : null}

        </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        
    },
    
    topContainer: {
        // backgroundColor: 'red',
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingVertical: 4,
        alignItems: 'center',
    },

    

    input: {
        fontSize: 14,
        color: color.black,
        width: 'auto',
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: color.gray,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 40
    },

    iconSmall: {
        width: 25,
        height: 25,
        
    },

    fromContainer: {
        marginBottom: 20,
    },

    bodyContainer: {
        backgroundColor: color.white,
        width: '100%',
        height: '100%',

        // paddingHorizontal: 20,
    },

    wrapIcon: {
        paddingVertical: 10,
        // backgroundColor: 'red',
    },

    iconBack: {
        width: 14,
        height: 10,
        marginRight: 20
        // backgroundColor: 'red',
    },

    itemContainer: {
        // backgroundColor: 'red',
        paddingVertical: 22,
        paddingHorizontal: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: 'red',
        width: 'auto',
        marginRight: 20,
        color: color.heading,
        
    },

    nextIcon: {
        width: 12,
        height: 20,
        marginRight: 20,   
    },
    
    headingSmall: {
        fontSize: 18,
        color: color.heading,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10
    },
    
    listItems: {
        marginBottom: 20,
    },
    
    outer: {
        width: 60,
        height: 60,
        backgroundColor: color.heading,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        alignSelf: 'flex-end',
        bottom: 30,
        right: 20
    },

    icon: {
        width: 24,
        height: 24,
        resizeMode: 'stretch',
    }

  })

export default CreateGroup