// AddModal.js
import React, {useContext, useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text, Image, StyleSheet, Keyboard } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import color from "../../container/color";
import * as ImagePicker from "expo-image-picker";
import { FlatList, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import useToggle from '../../hooks/useToggle';
import useAuth from "../../hooks/useAuth";
import { router, useLocalSearchParams } from 'expo-router';
import { RoomContext, RoomContextType } from "../../context/room";
import UserItem from '../UserItem';
import Member from '../Member'
import useSearchUsers from "../../hooks/useSearchUsers";
import SelectUser from '../SelectUser';
const transparent = 'rgba(0,0,0,0.5)';

interface AddModalProps {
  visible: boolean;
  onCloseModal: () => void;
}

const data = [
    { name: 'john.doe@example.com', id: '123123' },
    { name: 'jane.smith@example.com', id: '121212' },
    { name: 'sam.jones@example.com', id: '323232' },
    { name: 'ledangquang@gmail.com', id: '21521338' },
    { name: 'nguyenthingocha@gmail.com', id: '21520217' },
    { name: 'truonghuutho@gmail.com', id: '21521479' },
    // Thêm các mục dữ liệu khác nếu cần
  ];

const AddModal: React.FC<AddModalProps> = ({
    visible,
    onCloseModal,
  }
  ) => {
    // const { handleQuery, data } = useSearchUsers();
    const [searchQuery, setSearchQuery] = useState("");
    // const { handleQuery, data } = useSearchUsers();
    const [count,setCount] = useState(0);
    const handleSelectUser = (isSelected: boolean) => {
        if (isSelected===true) {
            setCount(count+1);
        }
        else {
            setCount(count-1);
        }
    }
    const { roomId } = useLocalSearchParams();
    const [editing, setEditing] = useState(false);
    const [name,setName] = useState("Person name");
    const [roomName, setRoomName] = useState("Room 1");
    const { updateUser, logout, user } = useAuth();
    const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: color.white,
          padding: 14,
        }}         
      >
        <View style={styles.header}>
            <View style={styles.topleftHeader}>
                <TouchableOpacity onPress={onCloseModal}>
                    <Image style={styles.backIcon} source={require("../../assets/images/backBtn.png")} />
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Text style={styles.heading}>
                        Thêm thành viên
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </View>

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
            <TouchableOpacity>
                <Text style={styles.txtSearch}>Search</Text>
            </TouchableOpacity>
            </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Text style={styles.headingSmall}>Gợi ý</Text>
                </TouchableWithoutFeedback>
                <FlatList 
                            data={data}
                            keyExtractor={(item) => item.name}
                            renderItem={({item}) => (
                                <SelectUser username={item.name} studentID={item.id} onSelect={handleSelectUser} />
                            )}
                />         
            </View>
            {count>0 ? (
            <TouchableOpacity onPress={() => router.push('/screen/ChatBox')} style={styles.outer}> 
              <Image style={styles.nextIcon} source={require('../../assets/images/nextArrow.png')} />
            </TouchableOpacity>
            ) : null}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  body: {
    flex: 1,
    marginTop: 20,
  },

  wrapOption: {
    backgroundColor: color.backgroundIcon,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 6,
  },
  textIcon: {
    fontSize: 18,
  },

  backIcon: {
    alignSelf: 'flex-start',
    width:24,
    height: 18,
    resizeMode: 'stretch',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  topleftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  addHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.heading,
  },

  itemTxt: {
    fontSize: 20,
    marginLeft: 16,
  },

  headingSmall: {
    fontSize: 18,
    color: color.heading,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
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

    nextIcon: {
        width: 24,
        height: 24,
        resizeMode: 'stretch',
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
        marginHorizontal: 4,
        marginBottom: 20,
      },
    
      input: {
        fontSize: 14,
        color: color.white,
        width: "70%",
        marginRight: 20,
        marginLeft: 10,
        backgroundColor: color.black,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 40,
      },

      
    iconSmall: {
        width: 25,
        height: 25,
    },

    txtSearch: {
        color: color.white,
        fontWeight: "bold",
        lineHeight: 29,
    },
});

export default AddModal;
