import React, { useState } from 'react';
import './marketplaceNotifications.css';
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

const MarketplaceNotifications = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="marketplace-notifications-page">
      {/* Left Sidebar */}
      <div className="marketplace-notifications-sidebar">
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
          <div className="menu-item active">
            <NotificationsIcon className="menu-icon" />
            <span>Notifications</span>
          </div>
          <div className="menu-item" onClick={() => setCurrentPage('marketplace-inbox')}>
            <InboxIcon className="menu-icon" />
            <span>Inbox</span>
          </div>
          <div className="menu-item" onClick={() => setCurrentPage('marketplace-access')}>
            <SecurityIcon className="menu-icon" />
            <span>Marketplace access</span>
          </div>
          <div className="menu-item" onClick={() => setCurrentPage('marketplace-buying')}>
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
      <div className="marketplace-notifications-main">
        <div className="notifications-header">
          <h2>Notifications</h2>
        </div>

        {/* Empty State */}
        <div className="notifications-empty-state">
          <div className="notification-bell-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              {/* Bell shape */}
              <path 
                d="M12 2C13.1 2 14 2.9 14 4C16.8 4.7 19 7.2 19 10.5V16L21 18V19H3V18L5 16V10.5C5 7.2 7.2 4.7 10 4C10 2.9 10.9 2 12 2Z" 
                fill="#9ca3af" 
              />
              {/* Bell clapper */}
              <circle cx="12" cy="21" r="2" fill="#3b82f6" />
            </svg>
          </div>
          <h3>You have no notifications.</h3>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceNotifications;