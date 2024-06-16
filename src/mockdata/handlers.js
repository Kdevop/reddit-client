import { http, HttpResponse } from 'msw';
import subredmock from './mockSubreddits.json';
import postmock from './mockRedditsPosts.json';
import search from './mockSearchResults.json';
import subredpost from './mockSubredditsPost.json';
import fullPost from './mockFullPost.json';



const API_ROOT = 'https://www.reddit.com';

export const handlers = [
    http.get(`${API_ROOT}/subreddits.json`, () => {
        // commenting out response to test huck up of live API
        // return HttpResponse.json(subredmock)
    }), //returns mock subreddit data when api for subreddit data is called
    http.get(`${API_ROOT}/.json`, () => {
        // commenting out response to test huck up of live API
        // return HttpResponse.json(postmock)
    }), //returns mock post data when api for post is called
    http.get(`${API_ROOT}/search/json`, () => {
        // commenting out response to test huck up of live api
        // return HttpResponse.json(search);
    }), // returns a mock search result when the search function is called.
    http.get(`${API_ROOT}/subreddit/.json`, () => {
        // comming out response to test huck up of live api
        // return HttpResponse.json(subredpost);
    }), // returns post for subreddit
    http.get(`${API_ROOT}/fullpost.json`, () => {
        // commenting out to test huck up of live api
        // return HttpResponse.json(fullPost);
    }) //returns post for comments

];

export default handlers;



