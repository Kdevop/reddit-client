import { http, HttpResponse } from 'msw';
import subredmock from './mockSubreddits.json';
import postmock from './mockRedditsPosts.json';
import search from './mockSearchResults.json';
import subredpost from './mockSubredditsPost.json';
import fullPost from './mockFullPost.json';



const API_ROOT = 'https://www.reddit.com';

export const handlers = [
    http.get(`${API_ROOT}/subreddits.json`, () => {
        return HttpResponse.json(subredmock)
    }), //returns mock subreddit data when api for subreddit data is called
    http.get(`${API_ROOT}/.json`, () => {
        return HttpResponse.json(postmock)
    }), //returns mock post data when api for post is called
    http.get(`${API_ROOT}/search/json`, () => {
        return HttpResponse.json(search);
    }), // returns a mock search result when the search function is called.
    http.get(`${API_ROOT}/subreddit/.json`, () => {
        return HttpResponse.json(subredpost);
    }), // returns post for subreddit
    http.get(`${API_ROOT}/fullpost.json`, () => {
        return HttpResponse.json(fullPost);
    }) //returns post for comments

];

export default handlers;


// ${API_ROOT}/search/json?q=happy

// http.get(`${API_ROOT}/search/json?`, (req) => {
//     const url = new URL(req.url, API_ROOT);
// // the above createws a new url object
//     const term = url.searchParams.get('q');
//     if(term == 'happy') {
//         return HttpResponse.json(search);
//     } else {
//         return HttpResponse.status(400).json({error: 'Not Found'});
//     }
// })


// http.get(`${API_ROOT}/search/json`, () => {
//     return HttpResponse.json(search);


// http.get(`${API_ROOT}/search/json`, (req, res, ctx) => {
//     const url = req.url;
//     if (url === `${API_ROOT}/search/json?q=happy`) {
//         return res(ctx.json(search));
//     } else {
//         return res(
//             ctx.status(404),
//             ctx.json({error: 'Not Found'})
//         );
//     }
// }),
