import { createStore, combineReducers } from "redux";
import { postReducer } from "./reducers/posts-reducer";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default createStore(rootReducer);
