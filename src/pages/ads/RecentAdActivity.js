import React, { useState } from 'react';
import './recentAdActivity.css';

const RecentAdActivity = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('recent');

  return (
    <div className="recent-ad-activity-page">
      {/* Header Section */}
      <div className="ad-activity-header">
        <div className="facebook-logo">
          <div className="fb-circle">
            <span>FB</span>
          </div>
          <span className="facebook-text">FACEBOOK</span>
        </div>
        
        <h1>Recent ad activity</h1>
        <p className="header-description">
          See ads you recently interacted with and easily follow up with the ones you care about
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-elements">
        <div className="decoration decoration-1">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="20" y="20" width="40" height="40" rx="8" fill="#FF9500"/>
            <circle cx="35" cy="35" r="6" fill="white"/>
            <circle cx="45" cy="45" r="4" fill="white"/>
            <path d="M30 50L50 30" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="decoration decoration-2">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
            <rect x="10" y="10" width="100" height="60" rx="8" fill="#4267B2"/>
            <circle cx="30" cy="30" r="8" fill="white"/>
            <rect x="45" y="25" width="50" height="4" rx="2" fill="white"/>
            <rect x="45" y="35" width="35" height="3" rx="1.5" fill="white"/>
            <rect x="45" y="43" width="40" height="3" rx="1.5" fill="white"/>
          </svg>
        </div>
        
        <div className="decoration decoration-3">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="15" y="15" width="70" height="70" rx="12" fill="#42E2B8"/>
            <path d="M35 40L45 50L65 30" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="decoration decoration-4">
          <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
            <rect x="10" y="10" width="70" height="50" rx="10" fill="#1877F2"/>
            <path d="M25 30L35 40L55 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="decoration decoration-5">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="25" fill="#F7CA18"/>
            <rect x="22" y="22" width="16" height="16" rx="3" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'recent' ? 'active' : ''}`}
            onClick={() => setActiveTab('recent')}
          >
            Recent
          </button>
          <button 
            className={`tab ${activeTab === 'saved' ? 'active' : ''}`}
            onClick={() => setActiveTab('saved')}
          >
            Saved
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="tab-content">
        {activeTab === 'recent' ? (
          <div className="empty-state">
            <p>No recent ad activity to show.</p>
          </div>
        ) : (
          <div className="empty-state">
            <p>No saved ads to show.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentAdActivity;