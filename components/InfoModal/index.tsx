// InfoModal.js
import React, {useContext, useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import color from "../../container/color";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from 'react-native-gesture-handler';
import useToggle from '../../hooks/useToggle';
import useAuth from "../../hooks/useAuth";
import { useLocalSearchParams } from 'expo-router';
import { RoomContext, RoomContextType } from "../../context/room";
import MembersModal from '../MembersModal';
import UploadModal from '../UploadModal';
const transparent = 'rgba(0,0,0,0.5)';

interface InfoModalProps {
  visible: boolean;
  onCloseModal: () => void;
}


const InfoModal: React.FC<InfoModalProps> = ({
    visible,
    onCloseModal,
  }
  ) => {
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const { data, onUpdate } = useContext(RoomContext) as RoomContextType;
    const { roomId } = useLocalSearchParams();
    const [editing, setEditing] = useState(false);
    const [roomName, setRoomName] = useState("Room 1");
    const [image,setImage] = useState("");
    const { updateUser, logout, user } = useAuth();
    const uploadImage = async (mode: string) => {
      try {
        let result: ImagePicker.ImagePickerResult;
        if (mode == "gallery") {
          await ImagePicker.requestMediaLibraryPermissionsAsync();
          result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1,
          })
        } else {
          await ImagePicker.requestCameraPermissionsAsync();
          result = await ImagePicker.
          launchCameraAsync({
            cameraType: ImagePicker.CameraType.front,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1,
          });
        }
  
        if (!result.canceled) {
          // save image
          await saveImage(result.assets[0].uri);
        }
      } catch (error) {
        alert("Error uploading image: " + error);
        setOpenModal(false);
      }
    };
  
    const removeImage = async () => {
      try {
        saveImage("");
      } catch (error) {
        alert(error);
        setOpenModal(false);
      }
    }
  
    const saveImage = async (image: string) => {
      try {
        setImage(image);
        setOpenModal(false);
      } catch (error) {
        throw error;
      }
    }

    const handleCancelPress = () => {
        setRoomName(data.items[index].name);
        setEditing(false);
      };
      const handleSavePress = () => {
        setEditing(false);
        onUpdate(roomId.toString(), { name: roomName });
      };
    const index = data.items.findIndex(
        (item) => item.id.toString() === roomId.toString()
    );
    useEffect(() => {
        if (index === -1) return;
        setRoomName(data.items[index].name);
    }, [roomId, data.items]);
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
        <TouchableOpacity onPress={onCloseModal}>
            <FontAwesomeIcon
              icon={faX}
              color="black"
              size={26}
              style={styles.closeIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Image 
              style={styles.avatar}
              source={image ? { uri: image } : require("../../assets/images/Avatar.png")}
          />
        </TouchableOpacity>
        {/* Sử dụng component Modal */}
        <UploadModal
                visible={openModal}
                onClose={() => setOpenModal(false)}
                onUploadCamera={() => uploadImage("camera")}
                onUploadGallery={() => uploadImage("gallery")}
                onRemoveImage={removeImage}
          />
        {editing ? (
            <View>
                <TextInput
                  style={styles.roomName}
                  value={roomName}
                  onChangeText={(text) => setRoomName(text)}
                  onBlur={handleSavePress}
                ></TextInput>
            </View>
        ) : (
            <TouchableOpacity onPress={() => setEditing(true)}>
                <Text style={styles.roomName}>{roomName}</Text>
            </TouchableOpacity>
        )}

        <View style={styles.optionsContainer}>
            {editing ? (
            <TouchableOpacity onPress={handleCancelPress}>
                <FontAwesomeIcon
                icon={faX}
                color="black"
                size={18}
                style={styles.optionIcon}
                />
            </TouchableOpacity>
            ) : (
                ""
            )}

            {editing ? (
            <TouchableOpacity onPress={handleSavePress}>
                <FontAwesomeIcon
                icon={faCheck}
                color="black"
                size={18}
                style={styles.optionIcon}
                />
            </TouchableOpacity>
            ) : (
                ""
            )}
        </View>
        <Text style={styles.headingSmall}>
            Tùy chỉnh
        </Text>
        <TouchableOpacity onPress={() => setOpenInfoModal(true)}>
            <View style={styles.optionItem}>
                <Image style={styles.icon} source={require("../../assets/images/users.png")}/>
                <Text style={styles.itemTxt}>
                    Xem thành viên
                </Text>
            </View>
        </TouchableOpacity>
      </View>
    {/* Sử dụng component Modal */}
        <MembersModal
            visible={openInfoModal}
            onCloseModal={() => setOpenInfoModal(false)}
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

  closeIcon: {
    alignSelf: 'flex-end',
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120,
    borderWidth: 4,
    borderColor: color.white,
    alignSelf: "center",
  },

  roomName: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  roomNameEdit: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  optionIcon: {
    paddingHorizontal: 30,
  },

  headingSmall: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    
  },

  itemTxt: {
    fontSize: 20,
    marginLeft: 16,
  }
});

export default InfoModal;
