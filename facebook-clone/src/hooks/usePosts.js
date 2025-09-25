import { useState } from 'react';

const usePosts = () => {
    const [posts, setPosts] = useState([]);

    const addPost = (postContent) => {
        const newPost = {
            id: Date.now(),
            content: postContent,
            createdAt: new Date().toISOString(),
        };
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    const getPosts = () => {
        return posts;
    };

    return { posts, addPost, getPosts };
};

export default usePosts;