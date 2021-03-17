import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, StyleSheet, Image, Button, ScrollView, Alert } from "react-native";
import { THEME } from "../theme";
import { removePost } from "../store/actions/post-actions";

export const PostScreen = ({ route, navigation }) => {
  let postId = route.params.postId;
  const DATA = useSelector((state) => state.posts.allPosts);
  const post = DATA.find((p) => p.id === postId);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setParams({ booked: post.booked });
  }, []);

  const removeHandler = () => {
    Alert.alert(
      "Delete",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            navigation.navigate("AllPosts");
            dispatch(removePost(postId));
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: post && post.img }} style={styles.image} />
      <Text style={styles.title}>{post && post.text}</Text>
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
