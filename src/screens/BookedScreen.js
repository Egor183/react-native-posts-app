import React from "react";
import { DATA } from "../data";
import { PostList } from "../components/PostList";

export const BookedScreen = ({ navigation }) => {
  return <PostList navigation={navigation} data={DATA.filter((post) => post.booked)} />;
};
