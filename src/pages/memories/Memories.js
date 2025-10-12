import React from 'react';
import './memories.css';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Memories() {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="memories-page">
      {/* Facebook Top Navigation Bar */}
      <div className="memories-navbar">
        <div className="memories-navbar-left">
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
        
        <div className="memories-navbar-center">
          <div className="nav-icon-container active">
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
        
        <div className="memories-navbar-right">
          <div className="nav-right-icon">
            <AppsIcon />
          </div>
          <div className="nav-right-icon">
            <MessageIcon />
          </div>
          <div className="nav-right-icon notification-icon">
            <NotificationsActiveIcon />
            <span className="notification-badge">6</span>
          </div>
          <div className="profile-container">
            <img src="/Images/1.png" alt="Profile" className="profile-pic" />
          </div>
        </div>
      </div>

      <div className="memories-container">
        {/* Left Sidebar */}
        <div className="memories-sidebar">
          <div className="memories-header">
            <ArrowBackIcon className="back-icon" onClick={handleBackClick} />
            <h2>Memories</h2>
          </div>
          
          <div className="memories-nav">
            <div className="memories-nav-item active">
              <HomeIcon className="memories-nav-icon" />
              <span>Memories home</span>
            </div>
          </div>

          <div className="memories-settings">
            <h3>Settings</h3>
            
            <div className="memories-setting-item">
              <NotificationsIcon className="memories-setting-icon" />
              <span>Notifications</span>
            </div>
            
            <div className="memories-setting-item">
              <PeopleIcon className="memories-setting-icon" />
              <span>Hide people</span>
              <span className="memories-setting-count">0 Hidden</span>
            </div>
            
            <div className="memories-setting-item">
              <CalendarViewDayIcon className="memories-setting-icon" />
              <span>Hide dates</span>
              <span className="memories-setting-count">0 Hidden</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="memories-main">
          <div className="memories-content">
            {/* Colorful Memories Banner */}
            <div className="memories-banner">
              <div className="memories-banner-images">
                <div className="memories-image memories-image-1"></div>
                <div className="memories-image memories-image-2"></div>
                <div className="memories-image memories-image-3"></div>
                <div className="memories-image memories-image-4"></div>
                <div className="memories-image memories-image-5"></div>
                <div className="memories-image memories-image-6"></div>
              </div>
            </div>

            {/* No Memories Message */}
            <div className="no-memories">
              <h2>No memories today</h2>
              <p>There aren't any memories to see or share today, but we'll let you know when you have some to look back on.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}