import React from 'react';
import './ordersAndPayments.css';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import StarIcon from '@mui/icons-material/Star';

const OrdersAndPayments = ({ setCurrentPage }) => {
  return (
    <div className="orders-payments-container">
      {/* Left Sidebar */}
      <div className="orders-payments-sidebar">
        <div className="orders-payments-header">
          <h1>Orders and payments</h1>
        </div>

        <div className="orders-payments-menu">
          <div className="orders-payments-menu-item active">
            <HomeIcon className="menu-icon" />
            <span>Home</span>
          </div>
          <div className="orders-payments-menu-item" onClick={() => setCurrentPage && setCurrentPage('payment-activity')}>
            <ReceiptIcon className="menu-icon" />
            <span>Activity</span>
          </div>
          <div className="orders-payments-menu-item">
            <RefreshIcon className="menu-icon" />
            <span>Recurring payments</span>
          </div>
          <div className="orders-payments-menu-item">
            <SettingsIcon className="menu-icon" />
            <span>Settings</span>
          </div>
          <div className="orders-payments-menu-item">
            <HelpOutlineIcon className="menu-icon" />
            <span>Help</span>
          </div>
          <div className="orders-payments-menu-item">
            <DescriptionIcon className="menu-icon" />
            <span>Terms & privacy</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="orders-payments-main-content">
        {/* Balances Section */}
        <section className="balances-section">
          <h2>Balances</h2>
          <div className="balance-card">
            <div className="balance-info">
              <div className="balance-icon">
                <StarIcon className="star-icon" />
              </div>
              <div className="balance-details">
                <h3>Facebook Stars</h3>
              </div>
            </div>
            <div className="balance-amount">
              <span>0</span>
            </div>
          </div>
        </section>

        {/* Activity Section */}
        <section className="activity-section">
          <div className="activity-header">
            <h2>Activity</h2>
            <span className="see-all-link">See all</span>
          </div>
          
          <div className="activity-content">
            <div className="no-activity-card">
              <div className="no-activity-content">
                <h3>No payment history</h3>
                <p>When you make purchases, your payment history will appear here.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrdersAndPayments;
