import React, { useState } from 'react';
import './metaPaySupport.css';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListIcon from '@mui/icons-material/List';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

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

  const commonQuestions = [
    "Why did my payment in a Facebook message fail?",
    "Why is my Facebook message payment pending?",
    "Payment methods for Meta Pay",
    "Can I cancel a payment that I sent in a Facebook message?"
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
          {/* Left Side - Product Selection */}
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

          {/* Right Side - Common Questions */}
          <div className="support-sidebar">
            <div className="common-questions-section">
              <h3>Common questions</h3>
              <div className="questions-list">
                {commonQuestions.map((question, index) => (
                  <div key={index} className="question-item">
                    <span>{question}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="more-support-section">
              <h3>More support options</h3>
              
              <div className="support-option">
                <ListIcon className="support-icon" />
                <span>Browse all help topics</span>
              </div>
              
              <div className="support-option">
                <ContactSupportIcon className="support-icon" />
                <span>Contact us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaPaySupport;