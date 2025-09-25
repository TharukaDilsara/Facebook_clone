import React, { useState } from 'react'
import "./addPost.css"
import PhotoIcon from '@mui/icons-material/Photo';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

export default function AddPost() {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    if (postText.trim()) {
      // Handle post submission logic here
      console.log('Posting:', postText);
      setPostText('');
    }
  };

  return (
    <div className='addPost'>
        <div className="addPostContainer">
           <div className="addPostTop">
                <img src="/Images/1.png" alt="" className="addPostPic" />
                <input 
                  placeholder='What in Your Mind' 
                  type="text" 
                  className="addPostInput"
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                />
            </div>
            <hr className='postHr'/> 
            <div className="addPostBottom">
                <div className="addPostOptions">
                    <div className="addPostOption">
                        <PhotoIcon className='addPhoto' style={{color: '#45bd62'}}></PhotoIcon>
                        <span className="addPhotoOptionText">
                            Photo/Video
                        </span>
                    </div>
                    <div className="addPostOption">
                        <AddLocationAltIcon className='addLocation' style={{color: '#ff5722'}}></AddLocationAltIcon>
                        <span className="addPhotoOptionText">
                            Check In
                        </span>
                    </div>
                    <div className="addPostOption">
                        <EmojiEmotionsIcon className='addEmoji' style={{color: '#f7b928'}}></EmojiEmotionsIcon>
                        <span className="addPhotoOptionText">
                            Feeling/Activity
                        </span>
                    </div>
                    <div className="addPostOption">
                        <EventIcon className='addEvent' style={{color: '#f02849'}}></EventIcon>
                        <span className="addPhotoOptionText">
                            Live Event
                        </span>
                    </div>
                    <div className="addPostOption">
                        <ArticleIcon className='addArticle' style={{color: '#1976d2'}}></ArticleIcon>
                        <span className="addPhotoOptionText">
                            Write Article
                        </span>
                    </div>
                </div>
                <button 
                  className="shareButton" 
                  onClick={handlePost}
                  disabled={!postText.trim()}
                >
                  Share
                </button>
            </div>
        </div>
    </div>
  )
}