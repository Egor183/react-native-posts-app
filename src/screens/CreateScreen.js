import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, TextInput, Image, Button, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { THEME } from "../theme";
import { createPost } from "../store/actions/post-actions";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [showError, setShowError] = useState(false);

  const createPostHandler = () => {
    if (text) {
      setShowError(false);
      navigation.navigate("AllPosts");
      dispatch(
        createPost("https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg", text)
      );
    } else {
      setShowError(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.center}>
        <Text style={styles.mainText}>CreateScreen</Text>
        <Image
          source={{ uri: "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg" }}
          style={styles.image}
        />
        <TextInput style={styles.textInput} placeholder="Add description..." multiline onChangeText={setText} />
        {showError && <Text style={styles.error}>the field cannot be empty</Text>}
        <View style={styles.buttonWrapper}>
          <Button title="Create post" onPress={createPostHandler} />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    width: "90%",
    height: 200,
    marginTop: 20,
  },

  error: {
    fontFamily: "open-regular",
    color: THEME.DANGER_COLOR,
    marginTop: 10,
  },

  buttonWrapper: {
    marginTop: 10,
  },
});
