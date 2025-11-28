export const getPosts = async () => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
        .then((response) => response.json())
        .then((posts) => posts);
};