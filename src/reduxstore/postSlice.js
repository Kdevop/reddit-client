import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const API_ROOT = 'https://www.reddit.com';


export const fetchredditpost = createAsyncThunk('posts/fetchRedditPost', async (_, { rejectWithValue }) => {
    try {
        const data = await fetch(`${API_ROOT}/.json`);
        const response = await data.json();

        return response.data.children.map((redditpost) => redditpost.data);

    } catch (error) {
        return rejectWithValue('Failed to fetch posts');
    }
});

//we will need to update this following changes to the slice. 
export const fetchFromSearch = createAsyncThunk('posts/fetchFromSearch', async (searchTerm, { getState, rejectWithValue }) => {
    const term = getState().posts.searchTerm;
    try {
        const data = await fetch(`${API_ROOT}/search.json?q=${searchTerm}`);
        if (!data.ok) {
            if (data.status === 404) {
                console.warn(`Resource not found:${data.status}`);
                return rejectWithValue('Resource not found');
            } else {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
        }
        const response = await data.json();
        return response.data.children.map((redditpost) => redditpost.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return rejectWithValue(`Failed to fetch posts: ${error.message}`);
    }
});

export const fetchSubredditPost = createAsyncThunk('posts/fetchSubredditPost', async (subreddit) => {
    try {
        const data = await fetch(`${API_ROOT}/${subreddit}/.json`);
        if(data.status !== 200) {
            console.error('Failed to get reddit post')
            throw new Error(`Post not found: ${data.status}`)
        } else {
            const response = await data.json();
            return response.data.children.map((redditpost) => redditpost.data);
        }
    } catch (error) {
        console.error('Error fetching reddit post data:', error.message);
        throw new Error(`Failed to fetch reddit posts: ${error.message}`);
    }
});


const postSlice = createSlice({
    name: 'posts',
    initialState: {
        data: {
            children: [],
        },
        isLoading: false,
        error: false,
    },
    reducers: {
        //    extra reducers if needed would go here
    }, extraReducers: (builder) => {
        builder
            .addCase(fetchredditpost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data.children = action.payload;
            })
            .addCase(fetchredditpost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(fetchredditpost.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(fetchFromSearch.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data.children = action.payload;
            })
            .addCase(fetchFromSearch.rejected, (state, action) => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(fetchFromSearch.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(fetchSubredditPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data.children = action.payload;
            })
            .addCase(fetchSubredditPost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(fetchSubredditPost.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            
    }
})

export default postSlice.reducer;
export const returnedPost = (state) => state.posts.data.children;