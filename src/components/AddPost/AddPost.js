import React, { useState } from 'react'
import "./addPost.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MovieIcon from '@mui/icons-material/Movie';

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
                  placeholder="What's on your mind, Tharuka?" 
                  type="text" 
                  className="addPostInput"
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                />
            </div>
            <hr className='postHr'/> 
            <div className="addPostBottom">
                <div className="addPostOptions">
                    <div className="addPostOption liveVideoOption">
                        <VideocamIcon className='addLiveVideo'></VideocamIcon>
                        <span className="addOptionText">
                            Live video
                        </span>
                    </div>
                    <div className="addPostOption photoVideoOption">
                        <PhotoLibraryIcon className='addPhotoVideo'></PhotoLibraryIcon>
                        <span className="addOptionText">
                            Photo/video
                        </span>
                    </div>
                    <div className="addPostOption reelOption">
                        <MovieIcon className='addReel'></MovieIcon>
                        <span className="addOptionText">
                            Reel
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}