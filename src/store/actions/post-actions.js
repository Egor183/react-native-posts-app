import { DATA } from "../../data";
import { LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED, CREATE_POST } from "../types";

export const loadPosts = () => {
  return { type: LOAD_POSTS, payload: DATA };
};

export const toggleBooked = (postId) => {
  return { type: TOGGLE_BOOKED, payload: postId };
};

export const removePost = (postId) => {
  return { type: REMOVE_POST, payload: postId };
};

export const createPost = (img, text) => {
  const id = new Date().getTime();
  const date = new Date().toJSON();
  const booked = false;
  return { type: CREATE_POST, payload: { id, img, text, date, booked } };
};
