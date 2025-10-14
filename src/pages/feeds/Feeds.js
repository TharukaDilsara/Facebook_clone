import React from 'react';
import './feeds.css';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import FlagIcon from '@mui/icons-material/Flag';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedIcon from '@mui/icons-material/Verified';
import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

export default function Feeds({ setCurrentPage }) {
  const handleHomeClick = () => {
    if (setCurrentPage) setCurrentPage('home');
  };

  return (
    <div className="feeds-page">
      {/* Facebook Top Navigation Bar */}
      <div className="feeds-navbar">
        <div className="feeds-navbar-left">
          <div className="facebook-logo">
            <svg viewBox="0 0 36 36" fill="#1877f2" height="40" width="40">
              <path d="M20.3 36V22.7h4.5l.7-5.3h-5.2v-3.4c0-1.5.4-2.6 2.6-2.6h2.8V6.2c-.5-.1-2.2-.2-4.1-.2-4.1 0-6.9 2.5-6.9 7V17.4H10v5.3h4.7V36h5.6z"></path>
            </svg>
          </div>
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search Facebook" className="search-input" />
          </div>
        </div>
        
        <div className="feeds-navbar-center">
          <div className="nav-icon-container" onClick={handleHomeClick} style={{cursor:'pointer'}}>
            <HomeIcon className="nav-icon" />
          </div>
          <div className="nav-icon-container">
            <VideoCallIcon className="nav-icon" />
          </div>
          <div className="nav-icon-container">
            <StorefrontIcon className="nav-icon" />
          </div>
          <div className="nav-icon-container">
            <GroupIcon className="nav-icon" />
          </div>
          <div className="nav-icon-container">
            <SportsEsportsIcon className="nav-icon" />
          </div>
        </div>
        
        <div className="feeds-navbar-right">
          <div className="nav-right-icon">
            <AppsIcon />
          </div>
          <div className="nav-right-icon">
            <MessageIcon />
          </div>
          <div className="nav-right-icon notification-icon">
            <NotificationsActiveIcon />
            <span className="notification-badge">11</span>
          </div>
          <div className="profile-container">
            <img src="/Images/1.png" alt="Profile" className="profile-pic" />
          </div>
        </div>
      </div>

      <div className="feeds-container">
        {/* Left Sidebar */}
        <div className="feeds-sidebar">
          <div className="feeds-header">
            <h2>Feeds</h2>
          </div>

          <div className="feeds-nav">
            <div className="feeds-nav-item active">
              <RssFeedIcon className="feeds-nav-icon" />
              <span>All</span>
            </div>
            
            <div className="feeds-nav-item">
              <StarIcon className="feeds-nav-icon" />
              <span>Favourites</span>
            </div>
            
            <div className="feeds-nav-item">
              <PeopleIcon className="feeds-nav-icon" />
              <span>Friends</span>
            </div>
            
            <div className="feeds-nav-item">
              <GroupIcon className="feeds-nav-icon" />
              <span>Groups</span>
            </div>
            
            <div className="feeds-nav-item">
              <FlagIcon className="feeds-nav-icon" />
              <span>Pages</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="feeds-main">
          <div className="feeds-content">
            {/* Sample News Post */}
            <div className="feed-post">
              <div className="post-header">
                <div className="post-author-info">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=60&h=60&fit=crop&crop=face" 
                    alt="Hiru News" 
                    className="author-avatar"
                  />
                  <div className="author-details">
                    <div className="author-name">
                      <span>Hiru News</span>
                      <VerifiedIcon className="verified-icon" />
                    </div>
                    <div className="post-meta">
                      <span>2m</span>
                      <PublicIcon className="public-icon" />
                    </div>
                  </div>
                </div>
                <div className="post-actions">
                  <MoreHorizIcon className="more-icon" />
                  <CloseIcon className="close-icon" />
                </div>
              </div>

              <div className="post-content">
                <div className="post-text">
                  <p>අගමැති නරේන්ද්‍ර මොදී ජනපති හමුවේණි - ජනකම් ඩිනයක මලලසේකර</p>
                  <p>දඟනගන වන බව කියයි... <span className="see-more">See more</span></p>
                  <div className="translation-link">See translation</div>
                </div>

                <div className="post-image">
                  <div className="news-image-container">
                    <div className="news-branding">
                      <span className="news-handle">@hirunews</span>
                    </div>
                    <div className="news-content-overlay">
                      <div className="news-title-sinhala">
                        අගමැති නරේන්ද්‍ර<br />
                        මොදී ජනපති හමුවේණි
                      </div>
                      <div className="weather-section">
                        <div className="weather-icon">☀️</div>
                        <div className="weather-info">
                          <div className="location">හට්ටන්</div>
                          <div className="weather-details">සුළඟින් කලබල වූ වායුගුණය</div>
                        </div>
                      </div>
                      <div className="news-logo">
                        <span className="hiru-logo">HIRU<br />NEWS</span>
                      </div>
                      <div className="news-bottom-text">
                        ජනකම් ඩිනයක මලලසේකර<br />
                        දඟනගන වන බව කියයි
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech News Post */}
            <div className="feed-post">
              <div className="post-header">
                <div className="post-author-info">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=60&h=60&fit=crop&crop=face" 
                    alt="Tech News Lanka" 
                    className="author-avatar"
                  />
                  <div className="author-details">
                    <div className="author-name">
                      <span>Tech News Lanka</span>
                      <VerifiedIcon className="verified-icon" />
                    </div>
                    <div className="post-meta">
                      <span>1h</span>
                      <PublicIcon className="public-icon" />
                    </div>
                  </div>
                </div>
                <div className="post-actions">
                  <MoreHorizIcon className="more-icon" />
                  <CloseIcon className="close-icon" />
                </div>
              </div>

              <div className="post-content">
                <div className="post-text">
                  <p>🚀 Breaking: Sri Lanka's first AI-powered startup accelerator launches in Colombo! 🇱🇰</p>
                  <p>The new program will support 50+ local startups with cutting-edge technology and international partnerships. Applications open next month... <span className="see-more">See more</span></p>
                  <div className="translation-link">See translation</div>
                </div>
                <div className="post-image">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=300&fit=crop" 
                    alt="Tech startup office"
                    className="regular-post-image"
                  />
                </div>
              </div>
              
              <div className="post-engagement">
                <div className="engagement-buttons">
                  <div className="engagement-button">
                    <ThumbUpIcon />
                    <span>Like</span>
                  </div>
                  <div className="engagement-button">
                    <ChatBubbleOutlineIcon />
                    <span>Comment</span>
                  </div>
                  <div className="engagement-button">
                    <ShareIcon />
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sports News Post */}
            <div className="feed-post">
              <div className="post-header">
                <div className="post-author-info">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face" 
                    alt="Sports Central" 
                    className="author-avatar"
                  />
                  <div className="author-details">
                    <div className="author-name">
                      <span>Sports Central</span>
                      <VerifiedIcon className="verified-icon" />
                    </div>
                    <div className="post-meta">
                      <span>3h</span>
                      <PublicIcon className="public-icon" />
                    </div>
                  </div>
                </div>
                <div className="post-actions">
                  <MoreHorizIcon className="more-icon" />
                  <CloseIcon className="close-icon" />
                </div>
              </div>

              <div className="post-content">
                <div className="post-text">
                  <p>🏏 MATCH RESULT: Sri Lanka defeats Australia by 7 wickets in the first ODI!</p>
                  <p>Brilliant performance by the Sri Lankan team. Kusal Mendis scored an unbeaten century. Next match scheduled for Thursday at Pallekele.</p>
                </div>
                <div className="post-image">
                  <img 
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=300&fit=crop" 
                    alt="Cricket match"
                    className="regular-post-image"
                  />
                </div>
              </div>
              
              <div className="post-engagement">
                <div className="engagement-buttons">
                  <div className="engagement-button">
                    <ThumbUpIcon />
                    <span>Like</span>
                  </div>
                  <div className="engagement-button">
                    <ChatBubbleOutlineIcon />
                    <span>Comment</span>
                  </div>
                  <div className="engagement-button">
                    <ShareIcon />
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Blog Post */}
            <div className="feed-post">
              <div className="post-header">
                <div className="post-author-info">
                  <img 
                    src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60&h=60&fit=crop&crop=face" 
                    alt="Sarah Travel" 
                    className="author-avatar"
                  />
                  <div className="author-details">
                    <div className="author-name">
                      <span>Sarah's Travel Diaries</span>
                    </div>
                    <div className="post-meta">
                      <span>5h</span>
                      <PublicIcon className="public-icon" />
                    </div>
                  </div>
                </div>
                <div className="post-actions">
                  <MoreHorizIcon className="more-icon" />
                  <CloseIcon className="close-icon" />
                </div>
              </div>

              <div className="post-content">
                <div className="post-text">
                  <p>Just visited the breathtaking Sigiriya Rock Fortress! 🏰✨</p>
                  <p>The ancient frescoes and the view from the top are absolutely incredible. If you're planning a trip to Sri Lanka, this should definitely be on your list! 📸</p>
                  <p>#SriLanka #Sigiriya #Travel #Heritage</p>
                </div>
                <div className="post-image">
                  <img 
                    src="https://images.unsplash.com/photo-1566993263097-eb6c674c3077?w=600&h=400&fit=crop" 
                    alt="Sigiriya Rock"
                    className="regular-post-image"
                  />
                </div>
              </div>
              
              <div className="post-engagement">
                <div className="engagement-buttons">
                  <div className="engagement-button">
                    <ThumbUpIcon />
                    <span>Like</span>
                  </div>
                  <div className="engagement-button">
                    <ChatBubbleOutlineIcon />
                    <span>Comment</span>
                  </div>
                  <div className="engagement-button">
                    <ShareIcon />
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business News Post */}
            <div className="feed-post">
              <div className="post-header">
                <div className="post-author-info">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                    alt="Business Today" 
                    className="author-avatar"
                  />
                  <div className="author-details">
                    <div className="author-name">
                      <span>Business Today LK</span>
                      <VerifiedIcon className="verified-icon" />
                    </div>
                    <div className="post-meta">
                      <span>6h</span>
                      <PublicIcon className="public-icon" />
                    </div>
                  </div>
                </div>
                <div className="post-actions">
                  <MoreHorizIcon className="more-icon" />
                  <CloseIcon className="close-icon" />
                </div>
              </div>

              <div className="post-content">
                <div className="post-text">
                  <p>📈 MARKET UPDATE: Colombo Stock Exchange shows positive trends this week</p>
                  <p>Banking and telecom sectors lead the growth with significant gains. Expert analysis suggests continued growth momentum in Q4 2024... <span className="see-more">See more</span></p>
                </div>
              </div>
            </div>

            {/* Food Blog Post */}
            <div className="feed-post">
              <div className="post-header">
                <div className="post-author-info">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face" 
                    alt="Foodie Adventures" 
                    className="author-avatar"
                  />
                  <div className="author-details">
                    <div className="author-name">
                      <span>Foodie Adventures</span>
                    </div>
                    <div className="post-meta">
                      <span>8h</span>
                      <PublicIcon className="public-icon" />
                    </div>
                  </div>
                </div>
                <div className="post-actions">
                  <MoreHorizIcon className="more-icon" />
                  <CloseIcon className="close-icon" />
                </div>
              </div>

              <div className="post-content">
                <div className="post-text">
                  <p>🍛 Made authentic Sri Lankan rice and curry today! The aroma is filling the entire house 😍</p>
                  <p>Recipe includes: Coconut rice, fish curry, dhal curry, pol sambol, and papadam. Nothing beats homemade Sri Lankan food! 🇱🇰❤️</p>
                  <p>Who else loves cooking traditional dishes? Share your favorite recipes in the comments!</p>
                </div>
                <div className="post-image">
                  <img 
                    src="https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600&h=400&fit=crop" 
                    alt="Sri Lankan food"
                    className="regular-post-image"
                  />
                </div>
              </div>
            </div>

            {/* Education Post */}
            <div className="feed-post">
              <div className="post-header">
                <div className="post-author-info">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                    alt="EduLanka" 
                    className="author-avatar"
                  />
                  <div className="author-details">
                    <div className="author-name">
                      <span>EduLanka</span>
                      <VerifiedIcon className="verified-icon" />
                    </div>
                    <div className="post-meta">
                      <span>12h</span>
                      <PublicIcon className="public-icon" />
                    </div>
                  </div>
                </div>
                <div className="post-actions">
                  <MoreHorizIcon className="more-icon" />
                  <CloseIcon className="close-icon" />
                </div>
              </div>

              <div className="post-content">
                <div className="post-text">
                  <p>🎓 SCHOLARSHIP ALERT: University of Colombo announces new merit scholarships for 2025!</p>
                  <p>Applications open for undergraduate programs in Engineering, Medicine, and IT. Deadline: December 15, 2024. Full details available on our website.</p>
                  <p>Don't miss this opportunity! Share with students who might benefit. 📚✨</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}