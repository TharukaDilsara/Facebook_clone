import React, { useState } from 'react';
import './marketplaceInbox.css';
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

const MarketplaceInbox = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('selling');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    'All',
    'Pending payment',
    'Paid',
    'To be dispatched',
    'Dispatched',
    'Cash on delivery',
    'Completed'
  ];

  return (
    <div className="marketplace-inbox-page">
      {/* Left Sidebar */}
      <div className="marketplace-inbox-sidebar">
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
          <div className="menu-item active">
            <InboxIcon className="menu-icon" />
            <span>Inbox</span>
          </div>
          <div className="menu-item">
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
      <div className="marketplace-inbox-main">
        {/* Tabs */}
        <div className="inbox-tabs">
          <div 
            className={`tab ${activeTab === 'selling' ? 'active' : ''}`}
            onClick={() => setActiveTab('selling')}
          >
            Selling
          </div>
          <div 
            className={`tab ${activeTab === 'buying' ? 'active' : ''}`}
            onClick={() => setActiveTab('buying')}
          >
            Buying
          </div>
        </div>

        {/* Filter Section */}
        <div className="filter-section">
          <span className="filter-label">Filter by label</span>
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter.toLowerCase().replace(/\s+/g, '-') ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.toLowerCase().replace(/\s+/g, '-'))}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        <div className="inbox-empty-state">
          <div className="paper-plane-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <path 
                d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" 
                fill="#9ca3af" 
              />
              <circle cx="17" cy="12" r="2" fill="#3b82f6" />
            </svg>
          </div>
          <h3>No chats</h3>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceInbox;