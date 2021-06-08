import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput, Image, Button, Keyboard, Dimensions } from "react-native";
import addPhoto from "../assets/a5f6dcb2cb8b7630dc5ecdaeecd6a2de.png";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { THEME } from "../theme";
import { createPost } from "../store/actions/post-actions";
import PhotoPicker from "../components/PhotoPicker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [showError, setShowError] = useState(false);
  const [image, setImage] = useState();
  const [isCameraShowed, setIsCameraShowed] = useState(false);

  const createPostHandler = () => {
    if (text) {
      setShowError(false);
      dispatch(createPost(image, text));
      navigation.navigate("AllPosts");
    } else {
      setShowError(true);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setImage();
      setText("");
    }, [])
  );

  return (
    <View>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.center}>
            <Text style={styles.mainText}>CreateScreen</Text>
            {!isCameraShowed && (
              <Image source={image ? { uri: image } : addPhoto} style={styles.image} resizeMode="stretch" />
            )}
            <PhotoPicker setImage={setImage} setIsCameraShowed={setIsCameraShowed} isCameraShowed={isCameraShowed} />
            <TextInput
              value={text}
              style={styles.textInput}
              placeholder="Add description..."
              multiline
              onChangeText={setText}
            />
            {showError && <Text style={styles.error}>the field cannot be empty</Text>}
            <View style={styles.buttonWrapper}>
              <Button title="Create post" onPress={createPostHandler} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  mainText: {
    marginTop: 20,
    fontFamily: "open-regular",
    fontSize: 20,
  },

  textInput: {
    width: "90%",
    fontFamily: "open-regular",
    padding: 10,
    marginTop: 20,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    textAlignVertical: "top",
  },

  image: {
    marginTop: 20,
    marginBottom: 20,
    width: windowWidth,
    height: 0.5 * windowHeight,
  },

  error: {
    fontFamily: "open-regular",
    color: THEME.DANGER_COLOR,
    marginTop: 10,
  },

  buttonWrapper: {
    marginTop: 10,
    marginBottom: 30,
  },
});
