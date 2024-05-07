// export const API_ROOT = 'https://www.reddit.com';

// export const getSubreddits = async () => {
//     const response = await fetch(`${API_ROOT}/subreddits.json`);
//     const json = await response.json();
//     const output = json.data.children.map((subreddit) => subreddit.data);
//     return output;
// };

// export const getPosts =  async () => {
//     const response = await fetch(`${API_ROOT}/.json`);
//     console.log(response);
//     const json = await response.json();
//     const output = json.data.children.map((post) => post.data);
//     return output;
// };