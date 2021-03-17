import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/post-actions";

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.posts.allPosts);

  return <PostList navigation={navigation} data={allPosts} />;
};
