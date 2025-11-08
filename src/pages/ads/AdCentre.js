import React, { useState } from 'react';
import './adCentre.css';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BarChartIcon from '@mui/icons-material/BarChart';
import CampaignIcon from '@mui/icons-material/Campaign';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AdCentreModal from '../../components/AdCentreModal/AdCentreModal';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import EditIcon from '@mui/icons-material/Edit';

const AdCentre = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('all-ads');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdvertiseClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateAds = () => {
    // Navigate to Choose Ad Type page
    setCurrentPage('chooseAdType');
    setIsModalOpen(false);
  };

  const handleManageAds = () => {
    // Handle manage ads functionality
    console.log('Manage ads clicked');
    setIsModalOpen(false);
  };

  return (
    <div className="ad-centre-page">
      {/* Left Sidebar */}
      <div className="ad-centre-sidebar">
        {/* Manage Pages and profiles section */}
        <div className="manage-section">
          <h2 className="manage-title">Manage Pages and profiles</h2>
          
          <div className="profile-dropdown">
            <div className="profile-info">
              <img 
                src="/Images/1.png" 
                alt="Tharuka Dilsara" 
                className="profile-pic" 
              />
              <span className="profile-name">Tharuka Dilsara</span>
              <ExpandMoreIcon className="dropdown-arrow" />
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="sidebar-nav">
          <div className="nav-item active" onClick={() => setCurrentPage('home')}>
            <HomeIcon className="nav-icon" />
            <span>Home</span>
          </div>
          
          <div className="nav-item current">
            <CampaignIcon className="nav-icon" />
            <span>Ad Centre</span>
            <ExpandMoreIcon className="expand-icon" />
          </div>

          {/* Sub-menu items */}
          <div className="sub-menu">
            <div 
              className={`nav-sub-item ${activeTab === 'all-ads' ? 'active' : ''}`}
              onClick={() => setActiveTab('all-ads')}
            >
              All ads
            </div>
            <div 
              className={`nav-sub-item ${activeTab === 'ad-credits' ? 'active' : ''}`}
              onClick={() => setActiveTab('ad-credits')}
            >
              Ad credits
            </div>
          </div>
        </div>

        {/* Advertise Button */}
        <button className="advertise-btn" onClick={handleAdvertiseClick}>
          <CampaignIcon className="btn-icon" />
          Advertise
        </button>
      </div>

      {/* Main Content */}
      <div className="ad-centre-main">
        <div className="main-content">
          {/* Header Section */}
          <div className="content-header">
            <h1>Ad Centre</h1>
          </div>

          {/* Hero Section with illustration */}
          <div className="hero-section">
            <div className="hero-illustration">
              <svg width="400" height="200" viewBox="0 0 400 200" fill="none">
                {/* Background elements */}
                <rect x="50" y="40" width="80" height="120" rx="8" fill="#E3F2FD" />
                <rect x="150" y="60" width="100" height="100" rx="8" fill="#E8F5E8" />
                <rect x="270" y="30" width="80" height="140" rx="8" fill="#FFF3E0" />
                
                {/* Person illustration */}
                <ellipse cx="200" cy="110" rx="25" ry="30" fill="#8B4513" />
                <circle cx="200" cy="95" r="15" fill="#FFDBAC" />
                <path d="M190 90 Q200 85 210 90" stroke="#333" strokeWidth="2" fill="none" />
                <circle cx="195" cy="92" r="2" fill="#333" />
                <circle cx="205" cy="92" r="2" fill="#333" />
                <ellipse cx="200" cy="98" rx="3" ry="2" fill="#FF6B6B" />
                
                {/* Additional decorative elements */}
                <circle cx="80" cy="60" r="8" fill="#2196F3" />
                <circle cx="320" cy="50" r="6" fill="#4CAF50" />
                <path d="M70 150 Q90 140 110 150" stroke="#FF9800" strokeWidth="3" fill="none" />
                <path d="M290 160 Q310 150 330 160" stroke="#9C27B0" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>

          {/* Get Started Section */}
          <div className="get-started-section">
            <h2>Get started with a recommendation for your first ad</h2>
            <p>
              Answer a few questions about your business and goals and we'll make recommendations to help you choose the right ad, audience and budget.
            </p>
            <button className="get-started-btn" onClick={handleAdvertiseClick}>Get Started</button>
          </div>

          {/* Summary Section */}
          <div className="summary-section">
            <div className="summary-header">
              <h3>Summary</h3>
              <div className="info-icon">
                <span>ⓘ</span>
              </div>
              <ExpandMoreIcon className="expand-summary" />
            </div>
            <p className="summary-text">
              Tharuka Dilsara spent $0.00 on 0 ads in the last 60 days.
            </p>
          </div>

          {/* Recent Ads Section */}
          <div className="recent-ads-section">
            <h3>Recent ads</h3>
            <div className="no-ads-content">
              <div className="no-ads-illustration">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <rect x="20" y="30" width="80" height="60" rx="8" fill="#E3F2FD" />
                  <rect x="30" y="40" width="25" height="15" rx="2" fill="#1877F2" />
                  <rect x="60" y="40" width="40" height="4" rx="2" fill="#BDC3C7" />
                  <rect x="60" y="48" width="30" height="3" rx="1.5" fill="#BDC3C7" />
                  <rect x="30" y="60" width="60" height="3" rx="1.5" fill="#BDC3C7" />
                  <rect x="30" y="68" width="45" height="3" rx="1.5" fill="#BDC3C7" />
                  <circle cx="100" cy="25" r="8" fill="#FFE0B2" />
                  <circle cx="15" cy="70" r="6" fill="#C8E6C9" />
                </svg>
              </div>
              <div className="no-ads-text">
                <h4>You have not created any ads yet</h4>
                <p>Metrics for individual ads will appear here once you get started.</p>
                <button className="advertise-center-btn" onClick={handleAdvertiseClick}>Advertise</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <div className="activity-section">
            <h3>Activity</h3>
            <div className="activity-item">
              <BarChartIcon className="activity-icon" />
              <span>Recommendations</span>
              <EditIcon className="edit-btn" />
            </div>
          </div>

          <div className="tools-section">
            <h3>Tools</h3>
            
            <div className="tool-item">
              <CreditCardIcon className="tool-icon" />
              <div className="tool-content">
                <div className="tool-title">Billing and payments</div>
                <div className="tool-description">Set up a payment method to create ads.</div>
              </div>
            </div>

            <div className="tool-item">
              <SettingsIcon className="tool-icon" />
              <div className="tool-content">
                <div className="tool-title">Ad account settings</div>
                <div className="tool-description">Manage settings such as your account contact and account roles.</div>
              </div>
            </div>

            <div className="tool-item">
              <ChatIcon className="tool-icon" />
              <div className="tool-content">
                <div className="tool-title">Stay connected on chat</div>
                <div className="tool-description">Allow Meta to send you communications related to your ads on Messenger.</div>
              </div>
            </div>
          </div>

            <div className="advertise-section">
              <button className="advertise-side-btn" onClick={handleAdvertiseClick}>Advertise</button>
            </div>
          </div>
        </div>

        {/* Modal */}
        <AdCentreModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onCreateAds={handleCreateAds}
          onManageAds={handleManageAds}
        />
      </div>
    );
  };export default AdCentre;