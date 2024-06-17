import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import formatImage from '../utilities/formatImage';


export const API_ROOT = 'https://www.reddit.com';

export const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', async (_, { rejectWithValue }) => {
    try{
        const response = await fetch(`${API_ROOT}/subreddits.json`);
        const data = await response.json();
        console.log(data);
        
        return data.data.children;
    } catch (error) {
        return rejectWithValue('Failed to fetch subreddits');
    }
})

const initialState = {
  subreddits: [],
  error: false,
  isLoading: false,
}

const subRedditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    // space for 'normal' reducers
  }, extraReducers: (builder) => {
    builder
        .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false
        const newSubreddits = action.payload.map((subreddit) => {
            const {
              icon_img,
              community_icon,
              id,
              display_name,
              url
            } = subreddit.data;
            return {
              iconImg: icon_img,
              communityIcon: formatImage(community_icon),
              id: id,
              display_name: display_name,
              url
            };
          });
          newSubreddits.shift();
          state.subreddits = newSubreddits;
        })
        .addCase(fetchSubreddits.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
        })
        .addCase(fetchSubreddits.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        });
    }
});

export default subRedditSlice.reducer;
export const selectedSubreddits = (state) => state.subreddits.subreddits;
export const isLoading = (state) => state.subreddit.isLoading;
export const hasError = (state) => state.subreddit.error;





