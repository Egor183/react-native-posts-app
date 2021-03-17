import React from "react";
import { useSelector } from "react-redux";
import { PostList } from "../components/PostList";

export const BookedScreen = ({ navigation }) => {
  const bookedPosts = useSelector((state) => state.posts.bookedPosts);

  return <PostList navigation={navigation} data={bookedPosts} />;
};
