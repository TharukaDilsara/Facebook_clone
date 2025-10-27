import React, { useState } from 'react';
import './marketplaceAccess.css';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InboxIcon from '@mui/icons-material/Inbox';
import SecurityIcon from '@mui/icons-material/Security';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SellIcon from '@mui/icons-material/Sell';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MarketplaceAccess = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="marketplace-access-page">
      {/* Left Sidebar */}
      <div className="marketplace-access-sidebar">
        <div className="marketplace-header">
          <h1>Marketplace</h1>
          <SettingsIcon className="settings-icon" />
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search Marketplace"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Menu Items */}
        <div className="marketplace-menu">
          <div className="menu-item" onClick={() => setCurrentPage('marketplace')}>
            <StorefrontIcon className="menu-icon" />
            <span>Browse all</span>
          </div>
          <div className="menu-item" onClick={() => setCurrentPage('marketplace-notifications')}>
            <NotificationsIcon className="menu-icon" />
            <span>Notifications</span>
          </div>
          <div className="menu-item" onClick={() => setCurrentPage('marketplace-inbox')}>
            <InboxIcon className="menu-icon" />
            <span>Inbox</span>
          </div>
          <div className="menu-item active">
            <SecurityIcon className="menu-icon" />
            <span>Marketplace access</span>
          </div>
          <div className="menu-item">
            <ShoppingBagIcon className="menu-icon" />
            <span>Buying</span>
            <ChevronRightIcon className="chevron-icon" />
          </div>
          <div className="menu-item">
            <SellIcon className="menu-icon" />
            <span>Selling</span>
            <ChevronRightIcon className="chevron-icon" />
          </div>
        </div>

        {/* Create New Listing Button */}
        <button className="create-listing-btn">
          <AddIcon className="add-icon" />
          Create new listing
        </button>

        {/* Location Section */}
        <div className="location-section">
          <h3>Location</h3>
          <div className="location-info">
            <LocationOnIcon className="location-icon" />
            <div className="location-text">
              <span className="location-name">Homagama, Sri Lanka</span>
              <span className="location-range">Within 1 kilometre</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="marketplace-access-main">
        {/* Profile Section */}
        <div className="profile-section">
          <h2>Tharuka Dilsara</h2>
          <p className="profile-subtitle">Main profile</p>
        </div>

        {/* Access Status Card */}
        <div className="access-status-card">
          {/* Marketplace Store Illustration */}
          <div className="marketplace-illustration">
            <svg width="200" height="140" viewBox="0 0 200 140" fill="none">
              {/* Background gradient */}
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e3f2fd" />
                  <stop offset="100%" stopColor="#bbdefb" />
                </linearGradient>
              </defs>
              <rect width="200" height="140" fill="url(#bgGradient)" rx="8" />
              
              {/* Floating diamond shapes */}
              <g opacity="0.6">
                <polygon points="30,25 40,35 30,45 20,35" fill="#4fc3f7" />
                <polygon points="170,30 180,40 170,50 160,40" fill="#29b6f6" />
                <polygon points="45,80 55,90 45,100 35,90" fill="#03a9f4" />
                <polygon points="155,85 165,95 155,105 145,95" fill="#0288d1" />
                <polygon points="25,110 35,120 25,130 15,120" fill="#0277bd" />
                <polygon points="175,110 185,120 175,130 165,120" fill="#01579b" />
              </g>
              
              {/* Central storefront */}
              <g transform="translate(75, 40)">
                {/* Store building */}
                <rect x="0" y="20" width="50" height="40" fill="#1976d2" rx="4" />
                <rect x="0" y="15" width="50" height="10" fill="#2196f3" rx="2" />
                
                {/* Store entrance */}
                <rect x="15" y="35" width="20" height="25" fill="white" rx="2" />
                <rect x="20" y="40" width="4" height="8" fill="#1976d2" />
                <rect x="26" y="40" width="4" height="8" fill="#1976d2" />
                <rect x="20" y="50" width="10" height="2" fill="#1976d2" />
                
                {/* Store sign */}
                <rect x="5" y="8" width="40" height="12" fill="#0d47a1" rx="2" />
                <circle cx="25" cy="14" r="3" fill="white" />
              </g>
            </svg>
          </div>

          {/* Access Status Text */}
          <div className="access-status-content">
            <h3>You have full access to Marketplace</h3>
            <p>You can sell items and message sellers on Marketplace.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceAccess;