import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/post-actions";
import { THEME } from "../theme";

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.posts.allPosts);

  if (isLoading)
    return (
      <View style={styles.loaderWrapper}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    );

  return <PostList navigation={navigation} data={allPosts} />;
};

const styles = StyleSheet.create({
  loaderWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
