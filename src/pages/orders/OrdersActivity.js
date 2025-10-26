import React, { useState } from 'react';
import './ordersActivity.css';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GamepadIcon from '@mui/icons-material/Gamepad';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const OrdersActivity = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample activity data
  const activityData = [
    {
      id: 1,
      type: 'game_purchase',
      title: 'Candy Crush Saga',
      description: 'In-app purchase - Gold Bars',
      amount: '$4.99',
      date: '2025-10-25',
      status: 'completed',
      icon: 'game'
    },
    {
      id: 2,
      type: 'stars_purchase',
      title: 'Facebook Stars',
      description: 'Stars package purchase',
      amount: '$9.99',
      date: '2025-10-24',
      status: 'completed',
      icon: 'star'
    },
    {
      id: 3,
      type: 'subscription',
      title: 'Premium Gaming Pass',
      description: 'Monthly subscription renewal',
      amount: '$14.99',
      date: '2025-10-20',
      status: 'completed',
      icon: 'subscription'
    },
    {
      id: 4,
      type: 'marketplace',
      title: 'Vintage Camera',
      description: 'Marketplace purchase',
      amount: '$125.00',
      date: '2025-10-18',
      status: 'pending',
      icon: 'cart'
    },
    {
      id: 5,
      type: 'game_purchase',
      title: 'PUBG Mobile',
      description: 'Battle Pass Season 24',
      amount: '$9.99',
      date: '2025-10-15',
      status: 'completed',
      icon: 'game'
    }
  ];

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'game':
        return <GamepadIcon className="activity-item-icon" />;
      case 'star':
        return <StarIcon className="activity-item-icon" />;
      case 'subscription':
        return <SubscriptionsIcon className="activity-item-icon" />;
      case 'cart':
        return <ShoppingCartIcon className="activity-item-icon" />;
      default:
        return <ReceiptIcon className="activity-item-icon" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed':
        return '#42b883';
      case 'pending':
        return '#f39c12';
      case 'failed':
        return '#e74c3c';
      default:
        return '#95a5a6';
    }
  };

  const filteredActivity = activityData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || item.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="orders-activity-container">
      {/* Left Sidebar */}
      <div className="orders-activity-sidebar">
        <div className="orders-activity-header">
          <h1>Orders and payments</h1>
        </div>

        <div className="orders-activity-menu">
          <div className="orders-activity-menu-item" onClick={() => setCurrentPage('orders')}>
            <HomeIcon className="menu-icon" />
            <span>Home</span>
          </div>
          <div className="orders-activity-menu-item active">
            <ReceiptIcon className="menu-icon" />
            <span>Activity</span>
          </div>
          <div className="orders-activity-menu-item" onClick={() => setCurrentPage('recurring-payments')}>
            <RefreshIcon className="menu-icon" />
            <span>Recurring payments</span>
          </div>
          <div className="orders-activity-menu-item">
            <SettingsIcon className="menu-icon" />
            <span>Settings</span>
          </div>
          <div className="orders-activity-menu-item">
            <HelpOutlineIcon className="menu-icon" />
            <span>Help</span>
          </div>
          <div className="orders-activity-menu-item">
            <DescriptionIcon className="menu-icon" />
            <span>Terms & privacy</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="orders-activity-main-content">
        <div className="activity-header">
          <h2>Payment Activity</h2>
          <p>View your recent transactions and orders</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="activity-controls">
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-container">
            <FilterListIcon className="filter-icon" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Activities</option>
              <option value="game_purchase">Games</option>
              <option value="stars_purchase">Stars</option>
              <option value="subscription">Subscriptions</option>
              <option value="marketplace">Marketplace</option>
            </select>
          </div>
        </div>

        {/* Activity List */}
        <div className="activity-list">
          {filteredActivity.length > 0 ? (
            filteredActivity.map(item => (
              <div key={item.id} className="activity-item">
                <div className="activity-item-left">
                  <div className="activity-icon-container">
                    {getIcon(item.icon)}
                  </div>
                  <div className="activity-details">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="activity-date">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="activity-item-right">
                  <div className="activity-amount">{item.amount}</div>
                  <div 
                    className="activity-status"
                    style={{ color: getStatusColor(item.status) }}
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-activity">
              <ReceiptIcon className="no-activity-icon" />
              <h3>No transactions found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Summary Statistics */}
        <div className="activity-summary">
          <div className="summary-card">
            <h4>This Month</h4>
            <div className="summary-amount">$164.96</div>
            <div className="summary-count">5 transactions</div>
          </div>
          <div className="summary-card">
            <h4>Last 30 Days</h4>
            <div className="summary-amount">$289.43</div>
            <div className="summary-count">12 transactions</div>
          </div>
          <div className="summary-card">
            <h4>Total Spent</h4>
            <div className="summary-amount">$1,247.85</div>
            <div className="summary-count">47 transactions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersActivity;