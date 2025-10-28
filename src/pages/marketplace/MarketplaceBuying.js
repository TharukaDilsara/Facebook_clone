import React, { useState } from 'react';
import './marketplaceBuying.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const MarketplaceBuying = ({ setCurrentPage }) => {
  const [selectedTab, setSelectedTab] = useState('recent');

  // Sample iPhone listings
  const listings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=400&h=300&fit=crop',
      title: 'iPhone 11 Pro',
      price: '$0',
      seller: 'Various Sellers'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=400&h=300&fit=crop',
      title: 'iPhone 11 Pro',
      price: '$0',
      seller: 'Various Sellers'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop',
      title: 'iPhone 11pro',
      price: 'LKR95',
      seller: 'Tech Store'
    }
  ];

  return (
    <div className="marketplace-buying-page">
      {/* Left Sidebar */}
      <div className="buying-sidebar">
        {/* Header */}
        <div className="buying-header">
          <ArrowBackIcon 
            className="back-icon" 
            onClick={() => setCurrentPage('marketplace')}
          />
          <div className="buying-title">
            <span className="marketplace-label">Marketplace</span>
            <h1>Buying</h1>
          </div>
        </div>

        {/* Menu Items */}
        <div className="buying-menu">
          <div 
            className={`menu-item ${selectedTab === 'recent' ? 'active' : ''}`}
            onClick={() => setSelectedTab('recent')}
          >
            <AccessTimeIcon className="menu-icon" />
            <span>Recent activity</span>
          </div>
          
          <div 
            className={`menu-item ${selectedTab === 'saved' ? 'active' : ''}`}
            onClick={() => setSelectedTab('saved')}
          >
            <BookmarkBorderIcon className="menu-icon" />
            <span>Saved</span>
          </div>
          
          <div 
            className={`menu-item ${selectedTab === 'alerts' ? 'active' : ''}`}
            onClick={() => setSelectedTab('alerts')}
          >
            <NotificationsIcon className="menu-icon" />
            <span>Your alerts</span>
          </div>
          
          <div 
            className={`menu-item ${selectedTab === 'following' ? 'active' : ''}`}
            onClick={() => setSelectedTab('following')}
          >
            <CheckBoxIcon className="menu-icon" />
            <span>Following</span>
          </div>
          
          <div 
            className={`menu-item ${selectedTab === 'profile' ? 'active' : ''}`}
            onClick={() => setSelectedTab('profile')}
          >
            <PersonIcon className="menu-icon" />
            <span>Marketplace profile</span>
          </div>
        </div>

        {/* Create New Listing Button */}
        <button className="create-listing-btn">
          <AddIcon className="add-icon" />
          Create new listing
        </button>
      </div>

      {/* Main Content */}
      <div className="buying-main-content">
        {/* Listings Grid */}
        <div className="listings-grid">
          {listings.map((listing) => (
            <div key={listing.id} className="listing-card">
              <div className="listing-image">
                <img src={listing.image} alt={listing.title} />
              </div>
              <div className="listing-info">
                <h3>{listing.title}</h3>
                <p className="listing-price">{listing.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="buying-right-sidebar">
        {/* Marketplace Profile Card */}
        <div className="profile-card">
          <h3>Marketplace profile</h3>
          <div className="profile-info">
            <div className="profile-avatar">
              <img src="/images/1.png" alt="Tharuka Dilsara" />
            </div>
            <div className="profile-details">
              <h4>Tharuka Dilsara</h4>
              <p>No active listings</p>
            </div>
          </div>
          <button className="create-listing-profile-btn">
            <AddIcon className="add-icon" />
            Create new listing
          </button>
          <button className="see-profile-btn">
            See Marketplace profile
          </button>
        </div>

        {/* Need Help Section */}
        <div className="help-section">
          <h3>Need help?</h3>
          <div className="help-item">
            <HelpOutlineIcon className="help-icon" />
            <span>See All Help Topics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceBuying;