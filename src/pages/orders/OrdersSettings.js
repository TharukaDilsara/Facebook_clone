import React, { useState } from 'react';
import './ordersSettings.css';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const OrdersSettings = ({ setCurrentPage }) => {
  const [usePinToConfirm, setUsePinToConfirm] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('US dollars');

  const handlePinToggle = () => {
    setUsePinToConfirm(!usePinToConfirm);
  };

  const currencies = [
    'US dollars',
    'Euro',
    'British Pound',
    'Canadian Dollar',
    'Australian Dollar',
    'Japanese Yen',
    'Swiss Franc',
    'Chinese Yuan',
    'Indian Rupee'
  ];

  return (
    <div className="orders-settings-container">
      {/* Left Sidebar */}
      <div className="orders-settings-sidebar">
        <div className="orders-settings-header">
          <h1>Orders and payments</h1>
        </div>

        <div className="orders-settings-menu">
          <div className="orders-settings-menu-item" onClick={() => setCurrentPage('orders')}>
            <HomeIcon className="menu-icon" />
            <span>Home</span>
          </div>
          <div className="orders-settings-menu-item" onClick={() => setCurrentPage('orders-activity')}>
            <ReceiptIcon className="menu-icon" />
            <span>Activity</span>
          </div>
          <div className="orders-settings-menu-item" onClick={() => setCurrentPage('recurring-payments')}>
            <RefreshIcon className="menu-icon" />
            <span>Recurring payments</span>
          </div>
          <div className="orders-settings-menu-item active">
            <SettingsIcon className="menu-icon" />
            <span>Settings</span>
          </div>
          <div className="orders-settings-menu-item">
            <HelpOutlineIcon className="menu-icon" />
            <span>Help</span>
          </div>
          <div className="orders-settings-menu-item">
            <DescriptionIcon className="menu-icon" />
            <span>Terms & privacy</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="orders-settings-main-content">
        {/* Security Section */}
        <div className="settings-section">
          <div className="section-header">
            <SecurityIcon className="section-icon" />
            <h2>Security</h2>
          </div>
          
          <div className="settings-card">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Use PIN to confirm payments</h3>
                <p>Confirm your PIN when you make a payment, edit bank account details or connect your payment info across Meta's family of apps.</p>
              </div>
              <div className="setting-control">
                <div 
                  className={`toggle-switch ${usePinToConfirm ? 'active' : ''}`}
                  onClick={handlePinToggle}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Currency Section */}
        <div className="settings-section">
          <div className="section-header">
            <AccountBalanceIcon className="section-icon" />
            <h2>Currency</h2>
          </div>
          
          <div className="settings-card">
            <div className="setting-item clickable">
              <div className="setting-info">
                <h3>Currency</h3>
                <p className="current-value">{selectedCurrency}</p>
              </div>
              <ChevronRightIcon className="chevron-icon" />
            </div>
            
            {/* Currency Selection Dropdown (Hidden by default) */}
            <div className="currency-dropdown">
              <h4>Select Currency</h4>
              <div className="currency-options">
                {currencies.map((currency, index) => (
                  <div 
                    key={index}
                    className={`currency-option ${selectedCurrency === currency ? 'selected' : ''}`}
                    onClick={() => setSelectedCurrency(currency)}
                  >
                    <span>{currency}</span>
                    {selectedCurrency === currency && (
                      <div className="selected-indicator"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Settings Section */}
        <div className="settings-section">
          <div className="section-header">
            <SettingsIcon className="section-icon" />
            <h2>Payment preferences</h2>
          </div>
          
          <div className="settings-card">
            <div className="setting-item clickable">
              <div className="setting-info">
                <h3>Default payment method</h3>
                <p className="current-value">Not set</p>
              </div>
              <ChevronRightIcon className="chevron-icon" />
            </div>
            
            <div className="setting-item clickable">
              <div className="setting-info">
                <h3>Payment notifications</h3>
                <p className="current-value">Email and push notifications</p>
              </div>
              <ChevronRightIcon className="chevron-icon" />
            </div>
            
            <div className="setting-item clickable">
              <div className="setting-info">
                <h3>Purchase history</h3>
                <p className="current-value">Download your data</p>
              </div>
              <ChevronRightIcon className="chevron-icon" />
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="settings-section">
          <div className="section-header">
            <DescriptionIcon className="section-icon" />
            <h2>Privacy & data</h2>
          </div>
          
          <div className="settings-card">
            <div className="setting-item clickable">
              <div className="setting-info">
                <h3>Data usage</h3>
                <p className="current-value">Manage how your payment data is used</p>
              </div>
              <ChevronRightIcon className="chevron-icon" />
            </div>
            
            <div className="setting-item clickable">
              <div className="setting-info">
                <h3>Transaction sharing</h3>
                <p className="current-value">Control transaction visibility</p>
              </div>
              <ChevronRightIcon className="chevron-icon" />
            </div>
            
            <div className="setting-item clickable">
              <div className="setting-info">
                <h3>Delete payment data</h3>
                <p className="current-value">Remove stored payment information</p>
              </div>
              <ChevronRightIcon className="chevron-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersSettings;