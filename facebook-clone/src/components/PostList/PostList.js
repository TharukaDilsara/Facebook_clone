import React from 'react';
import Post from '../Post/Post';
import './postList.css';

export default function PostList({ posts }) {
  return (
    <div className='postList'>
      {posts.map((post) => (
        <Post key={post.id} content={post.content} />
      ))}
    </div>
  );
}