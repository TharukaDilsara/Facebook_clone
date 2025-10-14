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

            {/* Additional sample posts can be added here */}
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
                  <p>Latest technology updates and innovations in Sri Lanka's digital transformation journey.</p>
                  <div className="translation-link">See translation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}