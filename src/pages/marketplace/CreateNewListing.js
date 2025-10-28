import React, { useState } from 'react';
import './createNewListing.css';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ListIcon from '@mui/icons-material/List';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const CreateNewListing = ({ setCurrentPage }) => {
  const [selectedListingType, setSelectedListingType] = useState(null);

  const listingTypes = [
    {
      id: 'item',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="#FFE0E6"/>
          <path d="M15 12L25 12C26.1 12 27 12.9 27 14L27 26C27 27.1 26.1 28 25 28L15 28C13.9 28 13 27.1 13 26L13 14C13 12.9 13.9 12 15 12Z" fill="#E74C3C"/>
          <circle cx="20" cy="18" r="3" fill="#FFFFFF"/>
          <path d="M16 22L24 22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Item for sale',
      description: 'Create a single listing for one or more items to sell.'
    },
    {
      id: 'vehicle',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="#D4F6F3"/>
          <path d="M12 20L28 20C29.1 20 30 20.9 30 22L30 26C30 27.1 29.1 28 28 28L12 28C10.9 28 10 27.1 10 26L10 22C10 20.9 10.9 20 12 20Z" fill="#16A085"/>
          <circle cx="15" cy="25" r="2" fill="#FFFFFF"/>
          <circle cx="25" cy="25" r="2" fill="#FFFFFF"/>
          <path d="M12 20L14 16L26 16L28 20" fill="#138D75"/>
          <rect x="18" y="14" width="4" height="2" fill="#FFFFFF"/>
        </svg>
      ),
      title: 'Vehicle for sale',
      description: 'Sell a car, van or other type of vehicle.'
    },
    {
      id: 'property',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="#FFE4B5"/>
          <path d="M20 12L28 18L28 26C28 27.1 27.1 28 26 28L14 28C12.9 28 12 27.1 12 26L12 18L20 12Z" fill="#FF8C00"/>
          <rect x="17" y="22" width="6" height="6" fill="#FFFFFF"/>
          <rect x="15" y="18" width="3" height="3" fill="#FFFFFF"/>
          <rect x="22" y="18" width="3" height="3" fill="#FFFFFF"/>
        </svg>
      ),
      title: 'Property for sale or rent',
      description: 'List a house or flat for sale or rent.'
    }
  ];

  return (
    <div className="create-listing-modal">
      <div className="create-listing-container">
        {/* Left Sidebar */}
        <div className="create-listing-sidebar">
          {/* Header */}
          <div className="create-listing-header">
            <CloseIcon 
              className="close-icon" 
              onClick={() => setCurrentPage('marketplace-buying')}
            />
            <h1>Create new listing</h1>
          </div>

          {/* Steps Menu */}
          <div className="steps-menu">
            <div className="step-item active">
              <CheckCircleIcon className="step-icon active-icon" />
              <span>Choose listing type</span>
            </div>
            
            <div className="step-item disabled">
              <ListIcon className="step-icon" />
              <span>Your listings</span>
            </div>
            
            <div className="step-item disabled">
              <HelpOutlineIcon className="step-icon" />
              <span>Seller help</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="create-listing-main">
          <div className="listing-type-container">
            <h2>Choose listing type</h2>
            
            <div className="listing-types-grid">
              {listingTypes.map((type) => (
                <div 
                  key={type.id}
                  className={`listing-type-card ${selectedListingType === type.id ? 'selected' : ''}`}
                  onClick={() => setSelectedListingType(type.id)}
                >
                  <div className="listing-type-icon">
                    {type.icon}
                  </div>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewListing;