import React, { useState } from 'react';
import './metaPaySupport.css';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MetaPaySupport = ({ isOpen, onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const supportProducts = [
    {
      id: 'messenger',
      name: 'Messenger',
      description: 'Get help with Messenger payments and money transfers'
    },
    {
      id: 'shopping',
      name: 'Shopping',
      description: 'Support for Marketplace and Facebook Shop purchases'
    },
    {
      id: 'donations',
      name: 'Donations',
      description: 'Help with charitable donations and fundraisers'
    },
    {
      id: 'games',
      name: 'Games',
      description: 'Gaming purchases, in-app payments, and virtual items'
    },
    {
      id: 'events',
      name: 'Paid online events',
      description: 'Tickets and payments for online events'
    },
    {
      id: 'premium',
      name: 'Premium videos',
      description: 'Premium content subscriptions and video purchases'
    },
    {
      id: 'subscriptions',
      name: 'Subscriptions',
      description: 'Recurring subscriptions and membership payments'
    },
    {
      id: 'bulletin',
      name: 'Bulletin',
      description: 'Newsletter subscriptions and creator support'
    },
    {
      id: 'stars',
      name: 'Stars',
      description: 'Facebook Stars purchases and creator support'
    }
  ];



  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // Here you would typically navigate to specific help for that product
    console.log(`Selected product: ${product.name}`);
  };

  if (!isOpen) return null;

  return (
    <div className="meta-pay-support-overlay">
      <div className="meta-pay-support-modal">
        {/* Header */}
        <div className="support-header">
          <h1>Meta Pay support</h1>
          <button className="close-button" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Main Content */}
        <div className="support-content">
          {/* Product Selection */}
          <div className="support-main">
            <h2>Select a product you need help with.</h2>
            
            <div className="product-list">
              {supportProducts.map((product) => (
                <div 
                  key={product.id}
                  className="product-item"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="product-info">
                    <span className="product-name">{product.name}</span>
                  </div>
                  <ChevronRightIcon className="product-arrow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaPaySupport;