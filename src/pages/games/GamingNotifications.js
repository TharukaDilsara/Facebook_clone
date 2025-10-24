import React from 'react';
import './gamingNotifications.css';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BarChartIcon from '@mui/icons-material/BarChart';

const GamingNotifications = ({ setCurrentPage }) => {
  const gameCategories = [
    'All', 'Action', 'Adventure', 'Arcade', 'Board', 'Card', 'Casino', 
    'Educational', 'Family', 'Music', 'Puzzle', 'Racing', 'Role Playing', 
    'Simulation', 'Sports', 'Strategy', 'Trivia', 'Word'
  ];

  return (
    <div className="gaming-notifications-container">
      {/* Left Sidebar */}
      <div className="gaming-notifications-sidebar">
        <div className="gaming-notifications-sidebar-header">
          <h1>Games</h1>
          <SettingsIcon className="settings-icon" />
        </div>

        <div className="gaming-notifications-search">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search games"
            className="search-input"
          />
        </div>

        <div className="gaming-notifications-menu">
          <div className="gaming-notifications-menu-item" onClick={() => setCurrentPage && setCurrentPage('games')}>
            <SportsEsportsIcon className="menu-icon" />
            <span>Play games</span>
          </div>
          <div className="gaming-notifications-menu-item">
            <BarChartIcon className="menu-icon" />
            <span>Gaming Activity</span>
          </div>
          <div className="gaming-notifications-menu-item active">
            <NotificationsIcon className="menu-icon" />
            <span>Notifications</span>
          </div>
        </div>

        <div className="your-games-section">
          <div className="section-header">
            <h3>Your games</h3>
            <span className="see-all">See all</span>
          </div>
          <p className="games-subtitle">Save a game to Your games to create a shortcut for it here.</p>
          <div className="gaming-notifications-menu-item">
            <BookmarkIcon className="menu-icon" />
            <span>Save games</span>
          </div>
        </div>

        <div className="categories-section">
          <h3>Categories</h3>
          <div className="categories-grid">
            {gameCategories.map((category) => (
              <div key={category} className="category-item">
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="gaming-notifications-main-content">
        <div className="notifications-empty-state">
          <div className="notifications-illustration">
            {/* SVG Illustration */}
            <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
              {/* Camera/Telescope on tripod illustration */}
              <g className="illustration-group">
                {/* Tripod legs */}
                <line x1="60" y1="140" x2="80" y2="90" stroke="#8E8E93" strokeWidth="3" strokeLinecap="round"/>
                <line x1="140" y1="140" x2="120" y2="90" stroke="#8E8E93" strokeWidth="3" strokeLinecap="round"/>
                <line x1="100" y1="140" x2="100" y2="90" stroke="#8E8E93" strokeWidth="3" strokeLinecap="round"/>
                
                {/* Tripod connection */}
                <circle cx="100" cy="90" r="8" fill="#8E8E93"/>
                
                {/* Camera/telescope body */}
                <rect x="80" y="65" width="40" height="25" rx="5" fill="#A8A8B0"/>
                
                {/* Camera lens */}
                <circle cx="70" cy="77.5" r="12" fill="#4A90E2"/>
                <circle cx="70" cy="77.5" r="8" fill="#1C6DD0"/>
                
                {/* Person figure */}
                <g transform="translate(130, 30)">
                  {/* Head */}
                  <circle cx="20" cy="15" r="12" fill="#4A90E2"/>
                  
                  {/* Body */}
                  <rect x="15" y="27" width="10" height="20" rx="5" fill="#4A90E2"/>
                  
                  {/* Arms */}
                  <rect x="10" y="30" width="8" height="3" rx="1.5" fill="#4A90E2"/>
                  <rect x="27" y="30" width="8" height="3" rx="1.5" fill="#4A90E2"/>
                  
                  {/* Legs */}
                  <rect x="17" y="47" width="3" height="12" rx="1.5" fill="#4A90E2"/>
                  <rect x="22" y="47" width="3" height="12" rx="1.5" fill="#4A90E2"/>
                </g>
                
                {/* Notification bell icon */}
                <g transform="translate(40, 20)">
                  <path d="M15 10C15 6.69 12.31 4 9 4S3 6.69 3 10c0 3.1-.87 4.47-1.87 5.47-.37.37-.13 1.03.49 1.03h4.72c.28 1.17 1.35 2 2.66 2s2.38-.83 2.66-2h4.72c.62 0 .86-.66.49-1.03C15.87 14.47 15 13.1 15 10z" fill="#A8A8B0"/>
                  <circle cx="9" cy="6" r="1" fill="#4A90E2"/>
                </g>
              </g>
            </svg>
          </div>
          
          <div className="notifications-empty-text">
            <h2>No notifications yet</h2>
            <p>You don't currently have any notifications. When you play games or when streamers that you follow go live, you'll see those notifications here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingNotifications;