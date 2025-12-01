import { getPosts } from "./asyncFunc";

describe('checking the receipt of posts', () => {
    test('the number of posts is 10', async () => {
        const posts = await getPosts();
        expect(posts.length).toBe(10);
    });
});