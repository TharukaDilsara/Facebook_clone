import React, { useState } from 'react';
import './chooseAdType.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import PublicIcon from '@mui/icons-material/Public';

const ChooseAdType = ({ setCurrentPage }) => {
  return (
    <div className="choose-ad-type-page">
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="facebook-logo">
            <div className="fb-circle">
              <span>f</span>
            </div>
          </div>
          <h1>Choose ad type</h1>
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
            </div>
          </div>

          <div className="sidebar-menu">
            <h3>Advertise</h3>
            
            <div className="menu-item active">
              <div className="menu-icon">
                <EditIcon />
              </div>
              <div className="menu-content">
                <div className="menu-title">Choose ad type</div>
                <div className="menu-description">Get started by selecting your own ad type to promote your profile</div>
              </div>
            </div>

            <div className="menu-item" onClick={() => setCurrentPage('selectFacebookContent')}>
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
              onClick={() => setCurrentPage('adCentre')}
            >
              <ArrowBackIcon />
            </button>

            {/* Content Header */}
            <div className="content-header">
              <h2>Choose ad type</h2>
            </div>

            {/* Ad Type Options */}
            <div className="ad-type-grid">
              <div 
                className="ad-type-card create-new"
                onClick={() => setCurrentPage('createNewAd')}
              >
                <div className="card-icon">
                  <EditIcon className="icon" />
                </div>
                <h3>Create new ad</h3>
                <p>Make an ad using text, photos or videos to promote your profile</p>
              </div>

              <div 
                className="ad-type-card boost-content"
                onClick={() => setCurrentPage('selectFacebookContent')}
              >
                <div className="card-icon facebook-icon">
                  <FacebookIcon className="icon" />
                </div>
                <h3>Boost Facebook content</h3>
                <p>Get more people to see and engage with your posts</p>
              </div>
            </div>

            {/* Remove the help section for cleaner design */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAdType;