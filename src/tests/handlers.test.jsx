import { setupWorker } from './src/';
import {rest} from 'msw';
import { beforeAll, describe, expect, it, test } from "vitest";
import { handlers } from "../mockdata/handlers";
import subredmock from '../mockdata/mockSubreddits.json';
import postmock from '../mockdata/mockRedditsPosts.json';

beforeAll(() => setupWorker.listen({onUnhandledRequest: 'bypass'}));
afterEach(() => setupWorker.resetHandlers());
afterAll(() => setupWorker.close());

test('subreddits endpoint returns mock data', async () => {
    const response = await fetch('https://www.reddit.com/subreddits.json');
    const data = await response.json();
    expect(data).toEqual(subredmock);
});

test('posts endpoint returns mock data', async () => {
    const response = await fetch('https://www.reddit.com/.json');
    const data = await response.json();
    expect(data).toEqual(postmock); 
});
