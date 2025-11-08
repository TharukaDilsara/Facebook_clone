import React, { useState } from 'react';
import './chooseAdType.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const ChooseAdType = ({ setCurrentPage }) => {
  const [selectedAdType, setSelectedAdType] = useState(null);

  const adTypes = [
    {
      id: 'choose-ad-type',
      icon: <EditIcon />,
      title: 'Choose ad type',
      description: 'Start creating your own ad type to promote your profile',
      isActive: true
    },
    {
      id: 'boost-content',
      icon: <TrendingUpIcon />,
      title: 'Boost content',
      description: 'Create an ad from your profile content'
    }
  ];

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
                <span className="profile-subtitle">2 credits</span>
              </div>
            </div>
          </div>

          <div className="sidebar-menu">
            <h3>Advertise</h3>
            
            {adTypes.map((adType) => (
              <div 
                key={adType.id}
                className={`menu-item ${adType.isActive ? 'active' : ''}`}
                onClick={() => setSelectedAdType(adType.id)}
              >
                <div className="menu-icon">
                  {adType.icon}
                </div>
                <div className="menu-content">
                  <div className="menu-title">{adType.title}</div>
                  <div className="menu-description">{adType.description}</div>
                </div>
              </div>
            ))}
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
              <div className="ad-type-card">
                <div className="card-icon">
                  <EditIcon className="icon" />
                </div>
                <h3>Choose ad type</h3>
                <p>Start creating your own ad type to promote your profile</p>
                <button className="select-button">Select</button>
              </div>

              <div className="ad-type-card">
                <div className="card-icon">
                  <TrendingUpIcon className="icon" />
                </div>
                <h3>Boost content</h3>
                <p>Create an ad from your profile content</p>
                <button className="select-button">Select</button>
              </div>
            </div>

            {/* Help Section */}
            <div className="help-section">
              <h3>Need help choosing?</h3>
              <p>Learn more about the different ad types and which one might work best for your goals.</p>
              <button className="help-button">Get help</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAdType;