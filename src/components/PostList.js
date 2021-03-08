import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Post } from "../components/Post";

export const PostList = ({ navigation, data }) => {
  const openPost = (post) => {
    navigation.navigate("Post", { postId: post.id, date: post.date });
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPost} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
