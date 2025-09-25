import React from 'react';
import './post.css';

export default function Post({ post }) {
  return (
    <div className='post'>
      <div className='postTop'>
        <div className='postTopLeft'>
          <img className='postProfileImg' src={post.userImage || '/images/placeholder.png'} alt='' />
          <span className='postUsername'>{post.username}</span>
          <span className='postDate'>{post.date}</span>
        </div>
      </div>
      <div className='postCenter'>
        <span className='postText'>{post.content}</span>
        {post.image && <img className='postImg' src={post.image} alt='' />}
      </div>
      <div className='postBottom'>
        <span className='postLikeCounter'>{post.likes} people like this</span>
      </div>
    </div>
  );
}