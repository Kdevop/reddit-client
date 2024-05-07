// import { createSlice, createSelector } from '@reduxjs/toolkit';
// import { getPosts } from '../api/api';

// const initialState = {
//     posts: [],
//     error: false,
//     isLoading: false,
//     searchTerm: '',
//     selectedSubreddit: '',
// };

// const postSlice = createSlice({
//     name: 'redditpost',
//     initialState, 
//     reducers: {
//         setPosts (state, action) {
//             state.post = action.payload;
//         },
//         startGetPosts(state) {
//             state.isLoading = true;
//             state.error = false;
//         },
//         getPostSuccess(state, action) {
//             state.isLoading = false;
//             state.data.children = action.payload;
//         },
//         getPostFailed(state) {
//             state.isLoading = false;
//             state.error = true;
//         },
//     },
// });

// export const {
//     setPosts, 
//     startGetPosts,
//     getPostSuccess,
//     getPostFailed,
// } = postSlice.actions;

// export default postSlice.reducer;

// export const fetchPosts = () => async (dispatch) => {
//     try {
//         dispatch(startGetPosts());
//         const posts = await getPosts();
//         dispatch(getPostSuccess(posts));
        
//     } catch (error) {
//         dispatch(getPostFailed());
//     }
// };

// export const selectedPosts = state => state.posts.post;