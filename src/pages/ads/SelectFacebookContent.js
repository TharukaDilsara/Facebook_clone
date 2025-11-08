import React, { useState } from 'react';
import './selectFacebookContent.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EditIcon from '@mui/icons-material/Edit';
import PublicIcon from '@mui/icons-material/Public';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageIcon from '@mui/icons-material/Image';

const SelectFacebookContent = ({ setCurrentPage }) => {
  const [contentType, setContentType] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const contentTypes = ['All', 'Posts', 'Photos', 'Videos', 'Events'];

  const handleContentTypeChange = (type) => {
    setContentType(type);
    setIsDropdownOpen(false);
  };

  const handleCreateAd = () => {
    // Navigate to create ad page or show create ad functionality
    console.log('Create ad clicked');
  };

  return (
    <div className="select-facebook-content-page">
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="facebook-logo">
            <div className="fb-circle">
              <span>f</span>
            </div>
          </div>
          <h1>Select Facebook content</h1>
          
          {/* Content Type Dropdown */}
          <div className="content-type-section">
            <span className="content-type-label">Content type:</span>
            <div className="content-type-dropdown">
              <button 
                className="dropdown-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {contentType}
                <ExpandMoreIcon className="dropdown-arrow" />
              </button>
              
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {contentTypes.map((type) => (
                    <div 
                      key={type}
                      className={`dropdown-item ${contentType === type ? 'selected' : ''}`}
                      onClick={() => handleContentTypeChange(type)}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-container">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <div className="profile-section">
            <div className="profile-info">
              <img 
                src="/Images/1.png" 
                alt="Tharuka Dilsara" 
                className="profile-pic" 
              />
              <div className="profile-details">
                <span className="profile-name">Tharuka Dilsara</span>
                <div className="profile-status">
                  <PublicIcon className="public-icon" />
                  <span className="profile-subtitle">Public</span>
                </div>
              </div>
              <ExpandMoreIcon className="profile-dropdown-arrow" />
            </div>
          </div>

          <div className="sidebar-menu">
            <h3>Advertise</h3>
            
            <div className="menu-item" onClick={() => setCurrentPage('chooseAdType')}>
              <div className="menu-icon">
                <EditIcon />
              </div>
              <div className="menu-content">
                <div className="menu-title">Choose ad type</div>
                <div className="menu-description">Get started by selecting your own ad type to promote your profile</div>
              </div>
            </div>

            <div className="menu-item active" onClick={() => setCurrentPage('selectFacebookContent')}>
              <div className="menu-icon">
                <TrendingUpIcon />
              </div>
              <div className="menu-content">
                <div className="menu-title">Boost content</div>
                <div className="menu-description">Create an ad from your profile content</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="content-area">
          <div className="content-wrapper">
            {/* Back Button */}
            <button 
              className="back-button"
              onClick={() => setCurrentPage('chooseAdType')}
            >
              <ArrowBackIcon />
            </button>

            {/* Empty State */}
            <div className="empty-state">
              <div className="empty-state-icon">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <rect x="20" y="30" width="80" height="60" rx="8" fill="#E4E6EA" />
                  <rect x="25" y="35" width="70" height="35" rx="4" fill="#F0F2F5" />
                  <circle cx="35" cy="45" r="3" fill="#1877F2" />
                  <rect x="42" y="42" width="40" height="2" rx="1" fill="#BDC3C7" />
                  <rect x="42" y="47" width="30" height="2" rx="1" fill="#BDC3C7" />
                  <rect x="25" y="75" width="70" height="10" rx="2" fill="#F0F2F5" />
                  <polygon points="85,20 95,10 105,20 95,15" fill="#9CA3AF" />
                  <circle cx="15" cy="75" r="4" fill="#9CA3AF" />
                </svg>
              </div>
              
              <h2>You don't have any posts to boost.</h2>
              <p>Try creating a new ad by uploading a photo or video.</p>
              
              <button className="create-ad-button" onClick={handleCreateAd}>
                Create ad
              </button>
              
              <div className="help-text">
                <p>
                  You can choose any eligible, public content that you created in the past 90 days. You 
                  can also boost any earlier posts from your profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectFacebookContent;