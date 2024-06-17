import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
    name: 'header',
    initialState: false,
    reducers: {
        setHeader: (state, action) => {
            return action.payload;
        },
    }
});

export default headerSlice.reducer;
export const {setHeader} = headerSlice.actions;
