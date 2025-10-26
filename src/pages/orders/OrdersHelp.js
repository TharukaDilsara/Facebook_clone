import React, { useState } from 'react';
import './ordersHelp.css';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MetaPaySupport from '../../components/MetaPaySupport/MetaPaySupport';

const OrdersHelp = ({ setCurrentPage }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showMetaPaySupport, setShowMetaPaySupport] = useState(false);

  const products = [
    'Facebook Pay',
    'Marketplace',
    'Facebook Gaming',
    'Instagram',
    'WhatsApp',
    'Meta Quest',
    'Facebook Ads',
    'Creator Bonus'
  ];

  const commonQuestions = [
    {
      id: 1,
      question: "Why did my payment in a Facebook message fail?",
      category: "payments"
    },
    {
      id: 2,
      question: "Why is my Facebook message payment pending?",
      category: "payments"
    },
    {
      id: 3,
      question: "Payment methods for Meta Pay",
      category: "methods"
    },
    {
      id: 4,
      question: "Can I cancel a payment that I sent in a Facebook message?",
      category: "cancellation"
    }
  ];

  const handleProductToggle = (product) => {
    setSelectedProducts(prev => 
      prev.includes(product) 
        ? prev.filter(p => p !== product)
        : [...prev, product]
    );
  };

  return (
    <div className="orders-help-container">
      {/* Left Sidebar */}
      <div className="orders-help-sidebar">
        <div className="orders-help-header">
          <h1>Orders and payments</h1>
        </div>

        <div className="orders-help-menu">
          <div className="orders-help-menu-item" onClick={() => setCurrentPage('orders')}>
            <HomeIcon className="menu-icon" />
            <span>Home</span>
          </div>
          <div className="orders-help-menu-item" onClick={() => setCurrentPage('orders-activity')}>
            <ReceiptIcon className="menu-icon" />
            <span>Activity</span>
          </div>
          <div className="orders-help-menu-item" onClick={() => setCurrentPage('recurring-payments')}>
            <RefreshIcon className="menu-icon" />
            <span>Recurring payments</span>
          </div>
          <div className="orders-help-menu-item" onClick={() => setCurrentPage('orders-settings')}>
            <SettingsIcon className="menu-icon" />
            <span>Settings</span>
          </div>
          <div className="orders-help-menu-item active">
            <HelpOutlineIcon className="menu-icon" />
            <span>Help</span>
          </div>
          <div className="orders-help-menu-item">
            <DescriptionIcon className="menu-icon" />
            <span>Terms & privacy</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="orders-help-main-content">
        {/* Payments Filter Section */}
        <div className="payments-section">
          <h2>Payments</h2>
          
          <div className="filter-section">
            <div className="product-filter">
              <div 
                className="filter-dropdown-trigger"
                onClick={() => setShowProductDropdown(!showProductDropdown)}
              >
                <span>Select product(s)</span>
                <KeyboardArrowDownIcon className="dropdown-arrow" />
              </div>
              
              {showProductDropdown && (
                <div className="product-dropdown">
                  {products.map((product, index) => (
                    <div 
                      key={index}
                      className="product-option"
                      onClick={() => handleProductToggle(product)}
                    >
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product)}
                        onChange={() => {}}
                        className="product-checkbox"
                      />
                      <span>{product}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <p className="filter-description">
              Transactions will be filtered based on selected products.
            </p>
          </div>

          {/* No Activity State */}
          <div className="no-activity-section">
            <div className="no-activity-icon">
              <div className="document-icon">
                <div className="document-header"></div>
                <div className="document-lines">
                  <div className="document-line"></div>
                  <div className="document-line"></div>
                  <div className="document-line"></div>
                  <div className="document-line"></div>
                </div>
              </div>
            </div>
            <h3>No activity</h3>
            <p>There is no activity matching this filter.</p>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Common Questions */}
      <div className="help-right-sidebar">
        <div className="common-questions-section">
          <h3>Common questions</h3>
          <div className="questions-list">
            {commonQuestions.map(question => (
              <div key={question.id} className="question-item">
                <span>{question.question}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="support-options-section">
          <h3>More support options</h3>
          
          <div className="support-option">
            <ListIcon className="support-icon" />
            <span>Browse all help topics</span>
          </div>
          
          <div className="support-option" onClick={() => setShowMetaPaySupport(true)}>
            <ContactSupportIcon className="support-icon" />
            <span>Contact us</span>
          </div>
        </div>
      </div>

      {/* Meta Pay Support Modal */}
      <MetaPaySupport 
        isOpen={showMetaPaySupport} 
        onClose={() => setShowMetaPaySupport(false)} 
      />
    </div>
  );
};

export default OrdersHelp;