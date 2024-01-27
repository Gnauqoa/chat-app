import {
  TextInput,
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import color from "../../container/color";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import useToggle from "../../hooks/useToggle";
import * as ImagePicker from "expo-image-picker";
import UploadModal from "../../components/UploadModal";
const transparent = 'rgba(0,0,0,0.5)';


const ProfileScreen = () => {
  const { updateUser, logout, user } = useAuth();
  const { toggle: editing, onOpen, onClose } = useToggle();
  const [name, setName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [image,setImage] = useState("");
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

  // function renderModal() {
  //   return (
  //     <Modal
  //       visible={openModal}
  //       animationType="fade"
  //       transparent={true}
  //     >
  //       <View
  //         style={{
  //           flex: 1,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           backgroundColor: transparent,
  //         }}         
  //       >
  //         <View style={{
  //           backgroundColor: 'white', padding:15, width:'90%', borderRadius: 10,
  //         }} >
  //           <TouchableOpacity onPress={() => setOpenModal(false)}>
  //             <FontAwesomeIcon
  //               icon={faX}
  //               color="black"
  //               size={26}
  //               style={styles.closeIcon}
  //             />
  //           </TouchableOpacity>

  //           <Text style={{color: color.black, fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>Profile Photo </Text>
  //           <View style={styles.optionsContainer}>
  //               <TouchableOpacity onPress={() => uploadImage("camera")}>
  //                 <View style={styles.wrapOption}>
  //                   <Image style={styles.icon} source={require("../../assets/images/cameraIcon.png")} />
  //                   <Text style={styles.textIcon}>Camera</Text>
  //                 </View>
  //               </TouchableOpacity>
  //               <TouchableOpacity onPress={() => uploadImage("gallery")}>
  //                 <View style={styles.wrapOption}>
  //                   <Image style={styles.icon} source={require("../../assets/images/gallery.png")} />
  //                   <Text style={styles.textIcon}>Gallery</Text>
  //                 </View>
  //               </TouchableOpacity>
  //               <TouchableOpacity onPress={() => removeImage()}>
  //                 <View style={styles.wrapOption}>
  //                   <Image style={styles.icon} source={require("../../assets/images/delete.png")} />
  //                   <Text style={styles.textIcon}>Remove</Text>
  //                 </View>
  //               </TouchableOpacity>
  //           </View>
  //         </View>
  //       </View>
  //     </Modal>
  //   )
  // }

  const handleSavePress = () => {
    onClose();
    updateUser(name);
  };
  useEffect(() => {
    if (user?.name) setName(user.name);
  }, [user?.name]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={require("../../assets/images/Home.png")}
        resizeMode="stretch"
      >
        <StatusBar translucent barStyle={"light-content"} />
        <View style={styles.container}>
          <Text style={styles.heading}>Thông tin cá nhân</Text>
          <View style={styles.body}>
            <View style={styles.whiteRectangle}></View>
            <View style={styles.boxContainer}>
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
              <View>
                <View style={styles.nameContainer}>
                  <View style={styles.edtName}>
                    {editing ? (
                      <TextInput
                        style={styles.name}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        onBlur={handleSavePress}
                      ></TextInput>
                    ) : (
                      <TouchableOpacity onPress={onOpen}>
                        <Text style={styles.name}>{name}</Text>
                      </TouchableOpacity>
                    )}
                    <View style={styles.selectContainer}>
                      {editing ? (
                        <TouchableOpacity onPress={onClose}>
                          <FontAwesomeIcon
                            icon={faX}
                            color="black"
                            size={30}
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
                            size={30}
                            style={styles.optionIcon}
                          />
                        </TouchableOpacity>
                      ) : (
                        ""
                      )}
                    </View>
                  </View>
                </View>

                <ScrollView>
                  <View style={styles.wrapInfosContainer}>
                    <View style={styles.infoContainer}>
                      <Text style={styles.title}>Gmail</Text>
                      <Text style={styles.content}>{user?.email}</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
            <View style={styles.logoutContainer}>
              <TouchableOpacity onPress={logout}>
                <LinearGradient
                  colors={[color.gradient1, color.gradient2]}
                  start={{ x: 0.5, y: 0.5 }}
                  style={styles.wrapBtn}
                >
                  <Text style={styles.logoutBtn}>Log out</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },

  wrapInfosContainer: {
    // backgroundColor: 'red'
  },

  nameContainer: {
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  body: {
    flex: 1,
    // justifyContent: 'flex-end',
  },

  whiteRectangle: {
    top: 50,
    backgroundColor: color.white,
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  boxContainer: {
    position: "absolute",
    flex: 1,
    width: "100%",
  },

  avatarContainer: {
    position: "absolute",
    width: "100%",
  },

  TabBar: {
    width: "auto",
    flexDirection: "row",
    backgroundColor: color.white,
  },

  tabContainer: {
    flex: 1,
    // backgroundColor: 'red',
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  iconTab: {
    width: 30,
    height: 30,
  },

  txtTab: {
    fontSize: 16,
  },

  textOn: {
    fontWeight: "bold",
    color: color.heading,
  },

  textOff: {
    fontWeight: "500",
    color: color.note,
  },

  heading: {
    fontSize: 28,
    color: color.white,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 50,
    paddingBottom: 40,
  },

  avatarUser: {
    alignSelf: "center",
    alignItems: "center",
    // backgroundColor: 'red',
    marginBottom: 20,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120,
    borderWidth: 4,
    borderColor: color.white,
    alignSelf: "center",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: color.heading,
  },

  caption: {
    fontSize: 16,
    color: color.heading,
    fontWeight: "500",
  },

  wrapBtn: {
    alignSelf: "center",
    paddingHorizontal: 60,
    paddingVertical: 8,
    borderRadius: 30,
    marginBottom: 10,
  },

  logoutBtn: {
    alignSelf: "center",
    color: color.white,
    fontWeight: "bold",
    fontSize: 12,
  },

  infoContainer: {
    marginTop: 8,
    marginHorizontal: 32,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: color.heading,
    paddingVertical: 4,
  },

  content: {
    fontSize: 20,
  },

  edtName: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },

  optionIcon: {
    paddingHorizontal: 30,
  },

  selectContainer: {
    width: 120,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red',
  },

  logoutContainer: {
    paddingVertical: 20,
    backgroundColor: color.white,
  },

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
