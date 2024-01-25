import { View, Text,Image, SafeAreaView, ImageBackground, StatusBar, Linking,StyleSheet, TouchableOpacity, Platform } from 'react-native'
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

const Main = () => {
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
    // const handleSearch = (query: string) => {
    //     setSearchQuery(query);
    //     const formattedQuery = query.toLowerCase();
    //     const filteredData = filter(sampleData, (item) => {
    //       const usernameLower = item.username.toLowerCase();
    //       const emailLower = item.studentID.toLowerCase();
    //       return usernameLower.includes(formattedQuery) || emailLower.includes(formattedQuery);
    //     });
    //     setData(filteredData);
    // }
  return (
    <View style={styles.body}>
        <View style={styles.inputFind}>
                <Image
                    source={require("../../assets/images/find.png")}
                    style={styles.iconSmall}
                />
                <TextInput
                    autoCapitalize="none"
                    placeholder="Search"
                    placeholderTextColor={color.white}
                    style={styles.input}
                    clearButtonMode="always"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                {/* <TouchableOpacity onPress={() => onNewQuery(searchQuery)}>
                    <Text style={styles.txtSearch}>
                    {searchQuery.length > 0 ? "Search" : ""}
                    </Text>
                </TouchableOpacity> */}
                </View>
                <Text style={styles.headingSmall}>
                    Gợi ý:
                </Text>
                
                <View style={styles.bodyContainer}>
                    <FlatList 
                                data={data}
                                keyExtractor={(item) => item.username}
                                renderItem={({item}) => (
                                    <SelectUser username={item.username} studentID={item.studentID} onSelect={handleSelectUser} />
                                )}
                    />         
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: color.white,
    },

    inputFind: {
        backgroundColor: color.black,
        // opacity: 0.4,
        width: "auto",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 40,
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginHorizontal: 20,
        marginVertical: 20,
    },

    iconSmall: {
        width: 25,
        height: 25,
        
    },

    input: {
        fontSize: 14,
        color: color.white,
        width: 'auto',
        marginRight: 20,
        marginLeft: 10,
        backgroundColor: color.black,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 40
    },

    headingSmall: {
        fontSize: 18,
        color: color.heading,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10
    },

    bodyContainer: {
        backgroundColor: color.white,
        width: '100%',
        height: '100%',

        // paddingHorizontal: 20,
    },
})

export default Main