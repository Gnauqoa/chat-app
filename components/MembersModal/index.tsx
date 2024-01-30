// MembersModal.js
import React, {useContext, useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text, Image, StyleSheet, Alert } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import color from "../../container/color";
import * as ImagePicker from "expo-image-picker";
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import useToggle from '../../hooks/useToggle';
import useAuth from "../../hooks/useAuth";
import { useLocalSearchParams } from 'expo-router';
import { RoomContext, RoomContextType } from "../../context/room";
import UserItem from '../UserItem';
import Member from '../Member'
import useSearchUsers from "../../hooks/useSearchUsers";
const transparent = 'rgba(0,0,0,0.5)';
import { Stack, router } from 'expo-router';
import AddModal from '../AddModal';
import { layer } from '@fortawesome/fontawesome-svg-core';
interface MembersModalProps {
  visible: boolean;
  onCloseModal: () => void;
}

const dataTest = [
    { key:0, name: 'john.doe@example.com', id: '123123' },
    { key:1, name: 'jane.smith@example.com', id: '121212' },
    { key:2, name: 'sam.jones@example.com', id: '323232' },
    { key:3,name: 'ledangquang@gmail.com', id: '21521338' },
    { key:4, name: 'nguyenthingocha@gmail.com', id: '21520217' },
    { key:5, name: 'truonghuutho@gmail.com', id: '21521479' },
    // Thêm các mục dữ liệu khác nếu cần
  ];

const MembersModal: React.FC<MembersModalProps> = ({
    visible,
    onCloseModal,
  }
  ) => {
    // const { handleQuery, data } = useSearchUsers();
    const [data,setData] = useState(dataTest);
    const { roomId } = useLocalSearchParams();
    const [editing, setEditing] = useState(false);
    const [name,setName] = useState("Person name");
    const [roomName, setRoomName] = useState("Room 1");
    const { updateUser, logout, user } = useAuth();
    const [openAddModal, setOpenAddModal] = useState(false);
    const handleDeleteUser = (index: number) => {
      Alert.alert('Xóa thành viên', 'Bạn chắc chăn muốn xóa thành viên này?', [
        {
          text: 'Cancel',
          onPress: () => {}
        },
        {text: 'OK', onPress: () => {
          let dataTmp = [...data];
          dataTmp.splice(index,1);
          setData(dataTmp);
        } },
      ]);
    }
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
                <Text style={styles.heading}>
                    Thành viên
                </Text>
            </View>
            <TouchableOpacity onPress={() => setOpenAddModal(true)}>
                <Text style={styles.addHeading}>
                    THÊM
                </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.body}>
            <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                    <Member
                        username={item.name}
                        studentID={item.id}
                        onDeleteUser={() => handleDeleteUser(item.key)}
                    />
                    )}
            />
        </View>       
      </View>
          {/* Sử dụng component Modal */}
      <AddModal
            visible={openAddModal}
            onCloseModal={() => setOpenAddModal(false)}
        />
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
        paddingVertical: 14,
        // borderBottomWidth: 0.4,
        // borderBottomColor: color.note,
        
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
});

export default MembersModal;
