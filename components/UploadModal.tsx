// UploadModal.js
import React from 'react';
import { View, Modal, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import color from "../container/color";
import * as ImagePicker from "expo-image-picker";

const transparent = 'rgba(0,0,0,0.5)';

interface UploadModalProps {
  visible: boolean;
  onClose: () => void;
  onUploadGallery: () => void;
  onUploadCamera: () => void;
  onRemoveImage: () => void;
}


const UploadModal: React.FC<UploadModalProps> = ({
    visible,
    onClose,
    onUploadGallery,
    onUploadCamera,
    onRemoveImage,
  }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: transparent,
        }}         
      >
        <View style={{
          backgroundColor: 'white', padding: 15, width: '90%', borderRadius: 10,
        }} >
          <TouchableOpacity onPress={onClose}>
            <FontAwesomeIcon
              icon={faX}
              color="black"
              size={26}
              style={styles.closeIcon}
            />
          </TouchableOpacity>

          <Text style={{ color: color.black, fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }}>Profile Photo </Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity onPress={onUploadCamera}>
              <View style={styles.wrapOption}>
                <Image style={styles.icon} source={require("../assets/images/cameraIcon.png")} />
                <Text style={styles.textIcon}>Camera</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onUploadGallery}>
              <View style={styles.wrapOption}>
                <Image style={styles.icon} source={require("../assets/images/gallery.png")} />
                <Text style={styles.textIcon}>Gallery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onRemoveImage}>
              <View style={styles.wrapOption}>
                <Image style={styles.icon} source={require("../assets/images/delete.png")} />
                <Text style={styles.textIcon}>Remove</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    width: 30,
    height: 30,
    marginBottom: 6,
  },
  textIcon: {
    fontSize: 18,
  },
  closeIcon: {
    alignSelf: 'flex-end',
  }
});

export default UploadModal;
