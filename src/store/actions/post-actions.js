import { DATA } from "../../data";
import { LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from "../types";

export const loadPosts = () => {
  return { type: LOAD_POSTS, payload: DATA };
};

export const toggleBooked = (postId) => {
  return { type: TOGGLE_BOOKED, payload: postId };
};

export const removePost = (postId) => {
  return { type: REMOVE_POST, payload: postId };
};
