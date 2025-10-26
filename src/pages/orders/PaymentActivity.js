import React from 'react';
import './paymentActivity.css';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DescriptionIcon from '@mui/icons-material/Description';

const PaymentActivity = ({ setCurrentPage }) => {
  return (
    <div className="payment-activity-container">
      {/* Left Sidebar */}
      <div className="payment-activity-sidebar">
        <div className="payment-activity-header">
          <h1>Orders and payments</h1>
        </div>

        <div className="payment-activity-menu">
          <div className="payment-activity-menu-item" onClick={() => setCurrentPage && setCurrentPage('orders')}>
            <HomeIcon className="menu-icon" />
            <span>Home</span>
          </div>
          <div className="payment-activity-menu-item active">
            <ReceiptIcon className="menu-icon" />
            <span>Activity</span>
          </div>
          <div className="payment-activity-menu-item">
            <RefreshIcon className="menu-icon" />
            <span>Recurring payments</span>
          </div>
          <div className="payment-activity-menu-item">
            <SettingsIcon className="menu-icon" />
            <span>Settings</span>
          </div>
          <div className="payment-activity-menu-item">
            <HelpOutlineIcon className="menu-icon" />
            <span>Help</span>
          </div>
          <div className="payment-activity-menu-item">
            <DescriptionIcon className="menu-icon" />
            <span>Terms & privacy</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="payment-activity-main-content">
        <div className="no-transactions-container">
          <div className="no-transactions-illustration">
            {/* Receipt/Document SVG Illustration */}
            <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
              <g className="receipt-illustration">
                {/* Document background */}
                <rect x="25" y="15" width="70" height="90" rx="4" fill="#9ca3af" opacity="0.8"/>
                
                {/* Document lines */}
                <rect x="35" y="30" width="35" height="3" rx="1.5" fill="white" opacity="0.9"/>
                <rect x="35" y="40" width="50" height="3" rx="1.5" fill="white" opacity="0.9"/>
                <rect x="35" y="50" width="40" height="3" rx="1.5" fill="white" opacity="0.9"/>
                <rect x="35" y="60" width="45" height="3" rx="1.5" fill="white" opacity="0.9"/>
                <rect x="35" y="70" width="30" height="3" rx="1.5" fill="white" opacity="0.9"/>
                <rect x="35" y="85" width="25" height="3" rx="1.5" fill="white" opacity="0.9"/>
                
                {/* Document shadow */}
                <rect x="27" y="17" width="70" height="90" rx="4" fill="#6b7280" opacity="0.3" style={{transform: 'translateZ(-1px)'}}/>
              </g>
            </svg>
          </div>
          
          <div className="no-transactions-content">
            <h2>No transactions</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentActivity;