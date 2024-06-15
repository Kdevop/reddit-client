import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const API_ROOT = 'https://www.reddit.com';

// fetch request to be written
export const fetchPostComments = createAsyncThunk('postComments/fetchPostComments', async (postId) => {
    try {
        const response = await fetch(`https://api.reddit.com/comments/${postId}`);
        if (response.status !== 200) {
            console.error('failed to fetch post')
            throw new Error(`Post not found: ${response.status}`)
        } else {
            const json = await response.json();
            console.log(json);
            return json[1].data.children;
        }
    } catch (error) {
        console.error('Failed to fetch post data');
        throw new Error(`Failed to fetch post: ${error.message}`);
    }
}
);

// for later - correct route for comments `https://www.reddit.com/${permalink}.json`

const commentsSlice = createSlice({
    name: 'postComments',
    initialState: {
        comments: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostComments.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchPostComments.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(fetchPostComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                const allComments = action.payload.map(comment => {
                    const {
                        author,
                        created_utc,
                        id,
                        replies,
                        body,

                    } = comment.data;
                    return {
                        author: author,
                        time: created_utc,
                        id: id,
                        replies: replies,
                        body: body,
                    }
                })
                state.comments = allComments;

            });
    }
})

export default commentsSlice.reducer;
export const getComments = (state) => state.postComments.comments;
export const isLoading = (state) => state.postComments.isLoading;
export const hasError = state => state.postComments.hasError; 