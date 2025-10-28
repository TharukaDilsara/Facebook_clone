import React, { useState } from 'react';
import './marketplace.css';
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
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import YardIcon from '@mui/icons-material/Yard';
import BrushIcon from '@mui/icons-material/Brush';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BuildIcon from '@mui/icons-material/Build';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PetsIcon from '@mui/icons-material/Pets';
import SportsIcon from '@mui/icons-material/Sports';
import ToysIcon from '@mui/icons-material/Toys';

const MarketplacePage = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample marketplace items based on your screenshot
  const todaysPicks = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=400&h=300&fit=crop',
      price: 'LKR48,000',
      title: 'Iphone Xs 256GB',
      location: 'Homagama, Sri Lanka'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      price: 'LKR375',
      title: 'Used Books for Sale - සරල සිංහල කථන',
      location: 'Homagama, Sri Lanka'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
      price: 'LKR27',
      title: 'Car for Sale',
      location: 'Homagama, Sri Lanka'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      price: 'LKR145,000',
      title: 'Wooden Furniture Set',
      location: 'Homagama, Sri Lanka'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      price: 'LKR85,000',
      title: 'Gaming Chair - Professional',
      location: 'Homagama, Sri Lanka'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
      price: 'LKR275,000',
      title: 'Honda Motorcycle CB150R',
      location: 'Homagama, Sri Lanka'
    }
  ];

  return (
    <div className="marketplace-page">
      {/* Left Sidebar */}
      <div className="marketplace-sidebar">
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
          <div className="menu-item active">
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

        {/* Categories Section */}
        <div className="categories-section">
          <h3>Categories</h3>
          <div className="categories-menu">
            <div className="category-item">
              <DirectionsCarIcon className="category-icon" />
              <span>Vehicles</span>
            </div>
            <div className="category-item">
              <HomeIcon className="category-icon" />
              <span>Property for rent</span>
            </div>
            <div className="category-item">
              <CategoryIcon className="category-icon" />
              <span>Classifieds</span>
            </div>
            <div className="category-item">
              <CheckroomIcon className="category-icon" />
              <span>Clothing</span>
            </div>
            <div className="category-item">
              <PhoneAndroidIcon className="category-icon" />
              <span>Electronics</span>
            </div>
            <div className="category-item">
              <SportsEsportsIcon className="category-icon" />
              <span>Entertainment</span>
            </div>
            <div className="category-item">
              <FavoriteIcon className="category-icon" />
              <span>Family</span>
            </div>
            <div className="category-item">
              <CardGiftcardIcon className="category-icon" />
              <span>Free stuff</span>
            </div>
            <div className="category-item">
              <YardIcon className="category-icon" />
              <span>Garden and outdoors</span>
            </div>
            <div className="category-item">
              <BrushIcon className="category-icon" />
              <span>Hobbies</span>
            </div>
            <div className="category-item">
              <HomeWorkIcon className="category-icon" />
              <span>Home goods</span>
            </div>
            <div className="category-item">
              <BuildIcon className="category-icon" />
              <span>Home improvement supplies</span>
            </div>
            <div className="category-item">
              <MusicNoteIcon className="category-icon" />
              <span>Musical instruments</span>
            </div>
            <div className="category-item">
              <LocalOfferIcon className="category-icon" />
              <span>Office supplies</span>
            </div>
            <div className="category-item">
              <PetsIcon className="category-icon" />
              <span>Pet supplies</span>
            </div>
            <div className="category-item">
              <HomeIcon className="category-icon" />
              <span>Property for sale</span>
            </div>
            <div className="category-item">
              <SportsIcon className="category-icon" />
              <span>Sporting goods</span>
            </div>
            <div className="category-item">
              <ToysIcon className="category-icon" />
              <span>Toys and games</span>
            </div>
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
      <div className="marketplace-main">
        {/* Header with Location */}
        <div className="main-header">
          <h2>Today's picks</h2>
          <div className="location-badge">
            <LocationOnIcon className="badge-location-icon" />
            <span>Homagama • 1 km</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {todaysPicks.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="product-info">
                <div className="product-price">{item.price}</div>
                <div className="product-title">{item.title}</div>
                <div className="product-location">{item.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;