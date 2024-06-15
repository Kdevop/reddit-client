import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const API_ROOT = 'https://www.reddit.com';

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
        state.subreddits = action.payload;
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

export const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', async (_, { rejectWithValue }) => {
    try{
        const data = await fetch(`${API_ROOT}/subreddits.json`);
        const response = await data.json();
        const output = response.data.children.map((subreddits) => subreddits.data);
        return output;
    } catch (error) {
        return rejectWithValue('Failed to fetch subreddits');
    }
})


export const selectedSubreddits = (state) => state.subreddits.subreddits;



// export const fetchSubreddits = () => async (dispatch) => {
//   try {
//     dispatch(startGetSubreddits());
//     const subreddits = await getSubreddits();
//     console.log(subreddits);
//     dispatch(getSubredditsSuccess(subreddits));
//   } catch (error) {
//     dispatch(getSubredditsFailed());
//   }
// };




