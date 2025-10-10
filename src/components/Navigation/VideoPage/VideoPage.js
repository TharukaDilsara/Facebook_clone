import React from 'react'
import './videoPage.css'
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';

export default function VideoPage({ isOpen, onClose }) {
  if (!isOpen) return null;

  const newVideosData = [
    {
      id: 1,
      title: 'New videos from Dinushan Samarasinghe and others.',
      time: 'about an hour ago',
      type: 'recommendation'
    },
    {
      id: 2,
      title: 'Tashindu Dasanayake and others shared videos.',
      time: '3 hours ago',
      type: 'shared'
    },
    {
      id: 3,
      title: 'Videos from Tech Reviews and 5 others.',
      time: '5 hours ago',
      type: 'recommendation'
    },
    {
      id: 4,
      title: 'Live videos from Gaming Community.',
      time: '8 hours ago',
      type: 'live'
    }
  ];

  const videoPost = {
    author: 'Kaluwara - කළුවර',
    date: '6 September',
    isPublic: true,
    canFollow: true,
    content: 'කළුවරට හනු වූ ආගා නිරී වැළෙන ආන්තන සිඳුවීම 😱',
    hashtags: '#ghost #ghoststories #holman #holmankatha #ghoststory',
    videoThumbnail: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800&h=450&fit=crop'
  };

  return (
    <div className="videoPageFullScreen">
      <div className="videoPageContainer">
        {/* Left Sidebar */}
        <div className="videoSidebar">
          <div className="videoHeader">
            <h1 className="videoTitle">Video</h1>
            <SettingsIcon className="videoSettingsIcon" />
          </div>

          {/* Search Bar */}
          <div className="videoSearch">
            <SearchIcon className="searchIcon" />
            <input 
              type="text" 
              placeholder="Search videos" 
              className="searchInput"
            />
          </div>

          {/* Menu Items */}
          <div className="videoMenu">
            <div className="videoMenuItem active">
              <div className="videoMenuItemLeft">
                <PlayCircleIcon className="videoMenuIcon homeIcon" />
                <span className="videoMenuText">Home</span>
              </div>
            </div>

            <div className="videoMenuItem">
              <div className="videoMenuItemLeft">
                <LiveTvIcon className="videoMenuIcon" />
                <span className="videoMenuText">Live</span>
              </div>
            </div>

            <div className="videoMenuItem">
              <div className="videoMenuItemLeft">
                <VideoLibraryIcon className="videoMenuIcon" />
                <span className="videoMenuText">Reels</span>
              </div>
            </div>

            <div className="videoMenuItem">
              <div className="videoMenuItemLeft">
                <BookmarkIcon className="videoMenuIcon" />
                <span className="videoMenuText">Saved videos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="videoContent">
          {/* New Videos Section */}
          <div className="newVideosSection">
            <div className="newVideosHeader">
              <h2 className="newVideosTitle">New videos for you • 4</h2>
            </div>

            <div className="videoRecommendations">
              {newVideosData.map((item) => (
                <div key={item.id} className="recommendationItem">
                  <div className="recommendationContent">
                    <h3 className="recommendationTitle">{item.title}</h3>
                    <div className="recommendationTime">
                      <span className="timeDot">•</span>
                      <span className="timeText">{item.time}</span>
                    </div>
                  </div>
                  <ChevronRightIcon className="recommendationArrow" />
                </div>
              ))}
            </div>
          </div>

          {/* Video Post */}
          <div className="videoPost">
            <div className="videoPostHeader">
              <div className="videoPostAuthor">
                <div className="authorAvatar">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                    alt="Author" 
                  />
                </div>
                <div className="authorInfo">
                  <div className="authorName">
                    {videoPost.author}
                    {videoPost.canFollow && <span className="followButton">Follow</span>}
                  </div>
                  <div className="postMeta">
                    <span className="postDate">{videoPost.date}</span>
                    <PublicIcon className="publicIcon" />
                  </div>
                </div>
              </div>
              <MoreHorizIcon className="moreIcon" />
            </div>

            <div className="videoPostContent">
              <p className="videoPostText">
                {videoPost.content} <span className="videoPostHashtags">{videoPost.hashtags}</span>
              </p>
            </div>

            {/* Video Player Area */}
            <div className="videoPlayerContainer">
              <div className="videoThumbnail">
                <img src={videoPost.videoThumbnail} alt="Video thumbnail" />
                <div className="playButton">
                  <PlayCircleIcon className="playIcon" />
                </div>
                <div className="videoOverlay"></div>
              </div>
            </div>

            {/* Video Actions */}
            <div className="videoActions">
              <div className="videoAction">
                <FavoriteIcon className="actionIcon" />
                <span className="actionText">Like</span>
              </div>
              <div className="videoAction">
                <ChatBubbleIcon className="actionIcon" />
                <span className="actionText">Comment</span>
              </div>
              <div className="videoAction">
                <ShareIcon className="actionIcon" />
                <span className="actionText">Share</span>
              </div>
            </div>
          </div>

          {/* Additional Video Posts */}
          <div className="videoPost">
            <div className="videoPostHeader">
              <div className="videoPostAuthor">
                <div className="authorAvatar">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                    alt="Author" 
                  />
                </div>
                <div className="authorInfo">
                  <div className="authorName">
                    Tech Reviews
                    <span className="followButton">Follow</span>
                  </div>
                  <div className="postMeta">
                    <span className="postDate">5 September</span>
                    <PublicIcon className="publicIcon" />
                  </div>
                </div>
              </div>
              <MoreHorizIcon className="moreIcon" />
            </div>

            <div className="videoPostContent">
              <p className="videoPostText">
                Latest smartphone review - iPhone 15 Pro Max vs Samsung Galaxy S24 Ultra comparison! 📱✨
              </p>
            </div>

            <div className="videoPlayerContainer">
              <div className="videoThumbnail">
                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=450&fit=crop" alt="Video thumbnail" />
                <div className="playButton">
                  <PlayCircleIcon className="playIcon" />
                </div>
                <div className="videoOverlay"></div>
              </div>
            </div>

            <div className="videoActions">
              <div className="videoAction">
                <FavoriteIcon className="actionIcon" />
                <span className="actionText">Like</span>
              </div>
              <div className="videoAction">
                <ChatBubbleIcon className="actionIcon" />
                <span className="actionText">Comment</span>
              </div>
              <div className="videoAction">
                <ShareIcon className="actionIcon" />
                <span className="actionText">Share</span>
              </div>
            </div>
          </div>

          <div className="videoPost">
            <div className="videoPostHeader">
              <div className="videoPostAuthor">
                <div className="authorAvatar">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b593?w=40&h=40&fit=crop&crop=face" 
                    alt="Author" 
                  />
                </div>
                <div className="authorInfo">
                  <div className="authorName">
                    Cooking Masters
                    <span className="followButton">Follow</span>
                  </div>
                  <div className="postMeta">
                    <span className="postDate">4 September</span>
                    <PublicIcon className="publicIcon" />
                  </div>
                </div>
              </div>
              <MoreHorizIcon className="moreIcon" />
            </div>

            <div className="videoPostContent">
              <p className="videoPostText">
                How to make the perfect pasta in 15 minutes! 🍝 Easy recipe for beginners 👩‍🍳 <span className="videoPostHashtags">#cooking #pasta #recipe #food</span>
              </p>
            </div>

            <div className="videoPlayerContainer">
              <div className="videoThumbnail">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=450&fit=crop" alt="Video thumbnail" />
                <div className="playButton">
                  <PlayCircleIcon className="playIcon" />
                </div>
                <div className="videoOverlay"></div>
              </div>
            </div>

            <div className="videoActions">
              <div className="videoAction">
                <FavoriteIcon className="actionIcon" />
                <span className="actionText">Like</span>
              </div>
              <div className="videoAction">
                <ChatBubbleIcon className="actionIcon" />
                <span className="actionText">Comment</span>
              </div>
              <div className="videoAction">
                <ShareIcon className="actionIcon" />
                <span className="actionText">Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
