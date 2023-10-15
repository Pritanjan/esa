import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: {},
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPosts(state, action) {
            state.posts = action.pauload;
        },
    },
});

export default postSlice.reducer;

export function SetPosts(post) {
    return (dispatch, getState) => {
        dispatch(postSlice.actions.getPosts(post));
    };
}