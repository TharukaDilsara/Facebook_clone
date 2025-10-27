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
          {/* Access Status Text */}
          <div className="access-status-content">
            <h3>You have full access to Marketplace</h3>
            <p>You can sell items and message sellers on Marketplace.</p>
          </div>
        </div>

        {/* Resources and Tools Section */}
        <div className="resources-section">
          <h3>Resources and tools</h3>
          
          <div className="resource-item">
            <div className="resource-icon">
              <SellIcon className="icon" />
            </div>
            <div className="resource-content">
              <h4>Your listings</h4>
              <p>See your current and past listings.</p>
            </div>
            <ChevronRightIcon className="chevron" />
          </div>

          <div className="resource-item">
            <div className="resource-icon">
              <StorefrontIcon className="icon" />
            </div>
            <div className="resource-content">
              <h4>Commerce Policies</h4>
              <p>Learn more about our rules and what's allowed on Marketplace.</p>
            </div>
            <ChevronRightIcon className="chevron" />
          </div>
        </div>

        {/* More About Profile Section */}
        <div className="profile-info-section">
          <h3>More about your profile</h3>
          
          <div className="profile-item">
            <div className="profile-icon">
              <SecurityIcon className="icon" />
            </div>
            <div className="profile-content">
              <h4>Profile status</h4>
              <p>Review your profile health</p>
            </div>
            <ChevronRightIcon className="chevron" />
          </div>
        </div>

        {/* Feedback Section */}
        <div className="feedback-section">
          <h4>Is this information helpful for you?</h4>
          <div className="feedback-buttons">
            <button className="feedback-btn no">No</button>
            <button className="feedback-btn yes">Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceAccess;