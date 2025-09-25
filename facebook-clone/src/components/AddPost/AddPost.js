import React, { useState } from 'react';
import "./addPost.css";
import PhotoIcon from '@mui/icons-material/Photo';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export default function AddPost() {
  const [postContent, setPostContent] = useState('');

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Logic to handle post submission goes here
    console.log("Post submitted:", postContent);
    setPostContent('');
  };

  return (
    <div className='addPost'>
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src="/images/placeholder.png" alt="" className="addPostPic" />
          <input 
            placeholder='What’s on your mind?' 
            type="text" 
            className="addPostInput" 
            value={postContent} 
            onChange={handlePostChange} 
          />
        </div>
        <hr className='postHr'/> 
        <div className="addPostBottom">
          <div className="addPostOptions">
            <div className="addPostOption">
              <PhotoIcon className='addPhoto' />
              <span className="addPhotoOptionText">Add Photo/Video</span>
            </div>
            <div className="addPostOption">
              <AddLocationAltIcon className='addLocation' />
              <span className="addPhotoOptionText">Add Location</span>
            </div>
          </div>
          <button className="submitPostButton" onClick={handlePostSubmit}>Post</button>
        </div>
      </div>
    </div>
  );
}