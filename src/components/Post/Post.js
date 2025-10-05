import React, { useState } from 'react';
import './post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInHours = Math.floor((now - postTime) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h`;
    return `${Math.floor(diffInHours / 24)}d`;
  };

  return (
    <div className="post">
      <div className="postWrapper">
        {/* Post Header */}
        <div className="postTop">
          <div className="postTopLeft">
            <img 
              src={post.userProfilePic} 
              alt={post.userName}
              className="postProfileImg"
            />
            <div className="postInfo">
              <span className="postUsername">{post.userName}</span>
              <span className="postDate">{formatTime(post.createdAt)}</span>
            </div>
          </div>
          <div className="postTopRight">
            <MoreHorizIcon className="postOptions" />
          </div>
        </div>

        {/* Post Content */}
        <div className="postCenter">
          {post.content && (
            <p className="postText">{post.content}</p>
          )}
          {post.image && (
            <img src={post.image} alt="Post content" className="postImg" />
          )}
        </div>

        {/* Post Stats */}
        <div className="postBottom">
          <div className="postBottomInfo">
            <div className="postLikeCounter">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1024px-Facebook_Thumb_icon.svg.png" alt="like" className="likeIcon" />
              <span className="postLikeCounter">{likesCount} people like it</span>
            </div>
            <div className="postCommentText">
              {post.comments} comments
            </div>
          </div>

          {/* Post Actions */}
          <div className="postBottomActions">
            <div 
              className={`postBottomAction ${liked ? 'liked' : ''}`}
              onClick={handleLike}
            >
              <ThumbUpIcon className="actionIcon" />
              <span className="actionText">Like</span>
            </div>
            <div 
              className="postBottomAction"
              onClick={() => setShowComments(!showComments)}
            >
              <ChatBubbleOutlineIcon className="actionIcon" />
              <span className="actionText">Comment</span>
            </div>
            <div className="postBottomAction">
              <ShareIcon className="actionIcon" />
              <span className="actionText">Share</span>
            </div>
          </div>

          {/* Comments Section */}
          {showComments && (
            <div className="commentsSection">
              <div className="commentInput">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                  alt="Your profile" 
                  className="commentProfileImg"
                />
                <input 
                  type="text" 
                  placeholder="Write a comment..." 
                  className="commentInputField"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;