import React from 'react';
import './recurringPayments.css';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DescriptionIcon from '@mui/icons-material/Description';

const RecurringPayments = ({ setCurrentPage }) => {
  return (
    <div className="recurring-payments-container">
      {/* Left Sidebar */}
      <div className="recurring-payments-sidebar">
        <div className="recurring-payments-header">
          <h1>Orders and payments</h1>
        </div>

        <div className="recurring-payments-menu">
          <div className="recurring-payments-menu-item" onClick={() => setCurrentPage && setCurrentPage('orders')}>
            <HomeIcon className="menu-icon" />
            <span>Home</span>
          </div>
          <div className="recurring-payments-menu-item">
            <ReceiptIcon className="menu-icon" />
            <span>Activity</span>
          </div>
          <div className="recurring-payments-menu-item active">
            <RefreshIcon className="menu-icon" />
            <span>Recurring payments</span>
          </div>
          <div className="recurring-payments-menu-item" onClick={() => setCurrentPage('orders-settings')}>
            <SettingsIcon className="menu-icon" />
            <span>Settings</span>
          </div>
          <div className="recurring-payments-menu-item">
            <HelpOutlineIcon className="menu-icon" />
            <span>Help</span>
          </div>
          <div className="recurring-payments-menu-item">
            <DescriptionIcon className="menu-icon" />
            <span>Terms & privacy</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="recurring-payments-main-content">
        <div className="recurring-payments-empty-state">
          <div className="recurring-payments-icon">
            <RefreshIcon className="refresh-icon" />
          </div>
          <div className="recurring-payments-message">
            <h2>No recurring payments</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringPayments;