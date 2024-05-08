import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subRedditReducer from './subredditSlice';
import postSliceReducer from './postSlice';
import {thunk as thunkMiddleware} from 'redux-thunk';
import searchSlice from "../components/search/searchSlice";

const rootReducers = combineReducers({
    subreddits: subRedditReducer, 
    posts: postSliceReducer,
    search: searchSlice,
})

const store = configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
        
});

export default store;