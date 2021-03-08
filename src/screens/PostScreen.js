import React, { useEffect } from "react";
import { Text, StyleSheet, Image, Button, ScrollView, Alert } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { DATA } from "../data";
import { THEME } from "../theme";

export const PostScreen = ({ route, navigation }) => {
  let postId = route.params.postId;
  const post = DATA.find((p) => p.id === postId);

  useEffect(() => navigation.dispatch(CommonActions.setParams({ booked: post.booked })), []);

  const removeHandler = () => {
    Alert.alert(
      "Delete",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Delete", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <Text style={styles.title}>{post.text}</Text>
      <Button title="delete" color={THEME.DANGER_COLOR} onPress={removeHandler} />
    </ScrollView>
  );
};

PostScreen.navigationOptions = {
  title: "My",
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "open-regular",
    padding: 10,
  },
});
