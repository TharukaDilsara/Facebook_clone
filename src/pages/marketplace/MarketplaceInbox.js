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
  const [activeTab, setActiveTab] = useState('buying');
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

  // Sample buying conversations data
  const buyingConversations = [
    {
      id: 1,
      sellerName: 'Vidul',
      productTitle: 'iPhone 11 Pro',
      subtitle: 'Listings similar to "iPhone 11 Pro"',
      date: '05/08/2024',
      avatar: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=50&h=50&fit=crop&crop=face',
      productImage: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=60&h=60&fit=crop'
    },
    {
      id: 2,
      sellerName: 'Gaurawa',
      productTitle: '',
      subtitle: 'View similar listings',
      date: '04/08/2024',
      avatar: null,
      productImage: null
    },
    {
      id: 3,
      sellerName: 'Hirun',
      productTitle: 'iPhone 11 Pro',
      subtitle: 'Message unavailable',
      date: '04/08/2024',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      productImage: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=60&h=60&fit=crop'
    },
    {
      id: 4,
      sellerName: 'Sanidu',
      productTitle: 'iPhone 11pro',
      subtitle: 'Listings similar to "iPhone 11pro"',
      date: '04/08/2024',
      avatar: 'https://images.unsplash.com/photo-1539571696285-e7d0710d0fb0?w=50&h=50&fit=crop&crop=face',
      productImage: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=60&h=60&fit=crop'
    },
    {
      id: 5,
      sellerName: 'Senura',
      productTitle: '',
      subtitle: 'View similar listings',
      date: '03/08/2024',
      avatar: null,
      productImage: null
    },
    {
      id: 6,
      sellerName: 'Mhd',
      productTitle: 'iPhone 11pro 256gb',
      subtitle: 'Full set box d',
      date: '01/08/2024',
      avatar: 'https://images.unsplash.com/photo-1507491677315-91e80ec5a89e?w=50&h=50&fit=crop&crop=face',
      productImage: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=60&h=60&fit=crop'
    }
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

        {/* Content based on active tab */}
        {activeTab === 'selling' ? (
          /* Empty State for Selling */
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
        ) : (
          /* Conversations List for Buying */
          <div className="conversations-list">
            {buyingConversations.map((conversation) => (
              <div key={conversation.id} className="conversation-item">
                <div className="conversation-avatar">
                  {conversation.productImage ? (
                    <img src={conversation.productImage} alt="Product" />
                  ) : (
                    <div className="default-avatar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#e4e6ea"/>
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#65676b"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="conversation-content">
                  <div className="conversation-header">
                    <h4 className="seller-name">
                      {conversation.sellerName}
                      {conversation.productTitle && (
                        <span className="product-title"> · {conversation.productTitle}</span>
                      )}
                    </h4>
                    <span className="conversation-date">{conversation.date}</span>
                  </div>
                  <p className="conversation-subtitle">{conversation.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplaceInbox;