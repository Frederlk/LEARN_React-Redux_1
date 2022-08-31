// const handlers = {
//     DEFAULT: (state) => state,
// };

import { CREATE_POST, FETCH_POSTS } from "./types";

const initialState = {
    posts: [],
    fetchedPosts: [],
};

// Pure Functions
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case FETCH_POSTS:
            return { ...state, fetchedPosts: action.payload };
        default:
            return state;
    }

    // const handle = handlers[action.type] || handlers.DEFAULT;
    // return handle(state, action);
};
