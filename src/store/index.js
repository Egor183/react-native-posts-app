import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./reducers/posts-reducer";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
