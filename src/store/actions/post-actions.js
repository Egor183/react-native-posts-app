import * as FileSystem from "expo-file-system";
import { DB } from "../../dataBase";
import { LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED, CREATE_POST } from "../types";

export const loadPosts = () => {
  return async (dispatch) => {
    const posts = await DB.getPosts();
    dispatch({ type: LOAD_POSTS, payload: posts || [] });
  };
};

export const toggleBooked = (postId, booked) => async (dispatch) => {
  await DB.togglePost(postId, booked);

  return dispatch({ type: TOGGLE_BOOKED, payload: postId });
};

export const removePost = (postId) => async (dispatch) => {
  await DB.removePost(postId);
  return dispatch({ type: REMOVE_POST, payload: postId });
};

export const createPost = (img, text) => async (dispatch) => {
  const fileName = img.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({ from: img, to: newPath });
  } catch (e) {
    console.log(e);
  }
  const date = new Date().toJSON();
  const id = await DB.createPost({ text, date, img: newPath });

  dispatch({ type: CREATE_POST, payload: { id, text, date, img: newPath } });
};
