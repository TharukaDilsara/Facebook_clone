import React from 'react'
import './marketplace.css'
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

export default function Marketplace({ isOpen, onClose }) {
  if (!isOpen) return null;

  const todaysPicks = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=300&fit=crop',
      price: 'LKR125',
      title: 'HILTI Angle grinder AG 180-20',
      location: 'Homagama, Sri Lanka'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      price: 'LKR950',
      title: 'DSF curtains & Home Elegance',
      location: 'Homagama, Sri Lanka'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=300&fit=crop',
      price: 'LKR3,890,000',
      title: 'Car for Sale',
      location: 'Homagama, Sri Lanka'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=300&h=300&fit=crop',
      price: 'LKR45,000',
      title: 'Motorcycle Honda CB',
      location: 'Homagama, Sri Lanka'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      price: 'LKR12,500',
      title: 'Nike Running Shoes',
      location: 'Homagama, Sri Lanka'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop',
      price: 'LKR2,850',
      title: 'Digital Watch Collection',
      location: 'Homagama, Sri Lanka'
    }
  ];

  return (
    <div className="marketplaceOverlay" onClick={onClose}>
      <div className="marketplaceContainer" onClick={(e) => e.stopPropagation()}>
        {/* Left Sidebar */}
        <div className="marketplaceSidebar">
          <div className="marketplaceHeader">
            <h1 className="marketplaceTitle">Marketplace</h1>
            <SettingsIcon className="settingsIcon" />
          </div>

          {/* Search Bar */}
          <div className="marketplaceSearch">
            <SearchIcon className="searchIcon" />
            <input 
              type="text" 
              placeholder="Search Marketplace" 
              className="searchInput"
            />
          </div>

          {/* Menu Items */}
          <div className="marketplaceMenu">
            <div className="menuItem">
              <div className="menuItemLeft">
                <StorefrontIcon className="menuIcon browseIcon" />
                <span className="menuText">Browse all</span>
              </div>
            </div>

            <div className="menuItem">
              <div className="menuItemLeft">
                <NotificationsIcon className="menuIcon" />
                <span className="menuText">Notifications</span>
              </div>
            </div>

            <div className="menuItem">
              <div className="menuItemLeft">
                <InboxIcon className="menuIcon" />
                <span className="menuText">Inbox</span>
              </div>
            </div>

            <div className="menuItem">
              <div className="menuItemLeft">
                <SecurityIcon className="menuIcon" />
                <span className="menuText">Marketplace access</span>
              </div>
            </div>

            <div className="menuItem">
              <div className="menuItemLeft">
                <ShoppingBagIcon className="menuIcon" />
                <span className="menuText">Buying</span>
              </div>
              <ChevronRightIcon className="chevronIcon" />
            </div>

            <div className="menuItem">
              <div className="menuItemLeft">
                <SellIcon className="menuIcon" />
                <span className="menuText">Selling</span>
              </div>
              <ChevronRightIcon className="chevronIcon" />
            </div>
          </div>

          {/* Create New Listing Button */}
          <button className="createListingBtn">
            <AddIcon className="addIcon" />
            Create new listing
          </button>

          {/* Location Section */}
          <div className="locationSection">
            <h3 className="locationTitle">Location</h3>
            <div className="locationItem">
              <LocationOnIcon className="locationIcon" />
              <div className="locationText">
                <span className="locationName">Homagama, Sri Lanka</span>
                <span className="locationRadius">Within 1 kilometre</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="marketplaceContent">
          <div className="contentHeader">
            <h2 className="contentTitle">Today's picks</h2>
            <div className="locationBadge">
              <LocationOnIcon className="badgeIcon" />
              <span>Homagama • 1 km</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="productsGrid">
            {todaysPicks.map((item) => (
              <div key={item.id} className="productCard">
                <div className="productImage">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="productInfo">
                  <div className="productPrice">{item.price}</div>
                  <div className="productTitle">{item.title}</div>
                  <div className="productLocation">{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}