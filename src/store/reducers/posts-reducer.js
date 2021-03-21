import { CREATE_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from "../types";

const initialState = {
  allPosts: [],
  bookedPosts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS: {
      return { ...state, allPosts: action.payload, bookedPosts: action.payload.filter((post) => post.booked === true) };
    }

    case TOGGLE_BOOKED: {
      return {
        ...state,
        allPosts: state.allPosts.map((post) => {
          if (post.id === action.payload) post.booked = !post.booked;
          return post;
        }),
        bookedPosts: state.allPosts.filter((post) => post.booked),
      };
    }

    case REMOVE_POST: {
      return {
        ...state,
        allPosts: state.allPosts.filter((p) => p.id !== action.payload),
        bookedPosts: state.allPosts.filter((p) => p.id !== action.payload),
      };
    }

    case CREATE_POST: {
      return {
        ...state,
        allPosts: [action.payload, ...state.allPosts],
      };
    }

    default:
      return state;
  }
};
