import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Post } from "../components/Post";

export const PostList = ({ navigation, data }) => {
  const openPost = (post) => {
    navigation.navigate("Post", { postId: post.id, date: post.date });
  };

  if (!data.length) {
    return (
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Create you first post... </Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => `${post.id}`}
        renderItem={({ item }) => <Post post={item} onOpen={openPost} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },

  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    fontFamily: "open-regular",
  },
});
