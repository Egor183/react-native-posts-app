import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { View, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

const getPermissions = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
  if (status === "granted") {
    return true;
  } else {
    console.error("Location permission not granted");
    return false;
  }
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PhotoPicker = ({ setImage, setIsCameraShowed, isCameraShowed }) => {
  let camera;

  const loadPhotoHandler = async () => {
    const permissions = await getPermissions();
    if (!permissions) return;

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const makePhoto = async () => {
    setIsCameraShowed(true);

    if (isCameraShowed) {
      const permissions = await getPermissions();
      if (!permissions) return;
      let result = await camera.takePictureAsync();
      setImage(result.uri);
      setIsCameraShowed(false);
    }
  };

  return (
    <View>
      {isCameraShowed && (
        <Camera
          style={styles.camera}
          ref={(r) => {
            camera = r;
          }}
        />
      )}
      <View style={styles.buttonContainer}>
        <View>
          <Button title="Load photo" onPress={loadPhotoHandler} stye={styles.button} />
        </View>
        <View>
          <Button title="Make photo" onPress={makePhoto} stye={styles.button} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center",
    width: 250,

    justifyContent: "space-between",
    alignItems: "center",
  },

  camera: {
    width: windowWidth,
    height: 0.5 * windowHeight,
    alignSelf: "center",
  },
});

export default PhotoPicker;
