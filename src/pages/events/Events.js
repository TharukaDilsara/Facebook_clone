import React from 'react';
import './events.css';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InterestsIcon from '@mui/icons-material/Interests';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Events({ setCurrentPage }) {
  const handleHomeClick = () => {
    if (setCurrentPage) setCurrentPage('home');
  };

  return (
    <div className="events-page">
      {/* Facebook Top Navigation Bar */}
      <div className="events-navbar">
        <div className="events-navbar-left">
          <div className="facebook-logo">
            <svg viewBox="0 0 36 36" fill="#1877f2" height="40" width="40">
              <path d="M20.3 36V22.7h4.5l.7-5.3h-5.2v-3.4c0-1.5.4-2.6 2.6-2.6h2.8V6.2c-.5-.1-2.2-.2-4.1-.2-4.1 0-6.9 2.5-6.9 7V17.4H10v5.3h4.7V36h5.6z"></path>
            </svg>
          </div>
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search Facebook" className="search-input" />
          </div>
        </div>
        
        <div className="events-navbar-center">
          <div className="nav-icon-container" onClick={handleHomeClick} style={{cursor:'pointer'}}>
            <HomeIcon className="nav-icon" />
          </div>
          <div className="nav-icon-container">
            <VideoCallIcon className="nav-icon" />
          </div>
          <div className="nav-icon-container">
            <StorefrontIcon className="nav-icon" />
          </div>
          <div className="nav-icon-container">
            <GroupIcon className="nav-icon" />
          </div>
          <div className="nav-icon-container">
            <SportsEsportsIcon className="nav-icon" />
          </div>
        </div>
        
        <div className="events-navbar-right">
          <div className="nav-right-icon">
            <AppsIcon />
          </div>
          <div className="nav-right-icon">
            <MessageIcon />
          </div>
          <div className="nav-right-icon notification-icon">
            <NotificationsActiveIcon />
            <span className="notification-badge">3</span>
          </div>
          <div className="profile-container">
            <img src="/Images/1.png" alt="Profile" className="profile-pic" />
          </div>
        </div>
      </div>

      <div className="events-container">
        {/* Left Sidebar */}
        <div className="events-sidebar">
          <div className="events-header">
            <h2>Events</h2>
          </div>
          
          <div className="events-search">
            <div className="events-search-container">
              <SearchIcon className="events-search-icon" />
              <input type="text" placeholder="Search events" className="events-search-input" />
            </div>
          </div>

          <div className="events-nav">
            <div className="events-nav-item active">
              <HomeIcon className="events-nav-icon" />
              <span>Home</span>
            </div>
            
            <div className="events-nav-item">
              <div className="events-nav-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span>Your events</span>
              <ExpandMoreIcon className="expand-icon" />
            </div>
          </div>

          <div className="events-notifications">
            <div className="events-nav-item">
              <NotificationsIcon className="events-nav-icon" />
              <span>Notifications</span>
            </div>
          </div>

          <div className="create-event-btn">
            <AddIcon className="add-icon" />
            <span>Create New Event</span>
          </div>

          <div className="events-categories">
            <h3>Categories</h3>
            
            <div className="category-item">
              <div className="category-icon classics">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
                </svg>
              </div>
              <span>Classics</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon comedy">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2C5.59 2 2 5.59 2 10s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                </svg>
              </div>
              <span>Comedy</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon crafts">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.5 12c0 .28-.11.53-.29.71l-3.54 3.54c-.18.18-.43.29-.71.29s-.53-.11-.71-.29L9 13l-2.25 2.25c-.18.18-.43.29-.71.29s-.53-.11-.71-.29L1.79 12.71C1.61 12.53 1.5 12.28 1.5 12s.11-.53.29-.71L5.33 7.75 2.5 4.92 4.92 2.5l2.83 2.83L11.29 1.79c.18-.18.43-.29.71-.29s.53.11.71.29l3.54 3.54c.18.18.29.43.29.71z"/>
                </svg>
              </div>
              <span>Crafts</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="events-main">
          <div className="events-content">
            <h1>Discover events</h1>
            
            {/* Filter Options */}
            <div className="events-filters">
              <div className="filter-item">
                <LocationOnIcon className="filter-icon" />
                <span>My location</span>
                <ExpandMoreIcon className="expand-icon" />
              </div>
              
              <div className="filter-item">
                <CalendarTodayIcon className="filter-icon" />
                <span>Any date</span>
                <ExpandMoreIcon className="expand-icon" />
              </div>
              
              <div className="filter-tabs">
                <div className="filter-tab active">Top</div>
                <div className="filter-tab">Friends</div>
                <div className="filter-tab">Following</div>
              </div>
            </div>

            {/* Event Cards */}
            <div className="events-grid">
              <div className="event-card">
                <div className="event-image">
                  <div className="event-gradient-bg album-launch"></div>
                  <div className="event-options">
                    <MoreHorizIcon />
                  </div>
                </div>
                <div className="event-info">
                  <div className="event-date">Sat, 25 Oct at 16:00</div>
                  <div className="event-title">මධු බක්මුරු - Album Launch</div>
                  <div className="event-location">Bakeriya Space, Pannipitiya</div>
                  <div className="event-stats">132 interested · 52 going</div>
                </div>
                <div className="event-actions">
                  <button className="interested-btn">
                    <InterestsIcon />
                    <span>Interested</span>
                  </button>
                  <button className="share-btn">
                    <ShareIcon />
                  </button>
                </div>
              </div>

              <div className="event-card">
                <div className="event-image">
                  <div className="event-gradient-bg facets"></div>
                  <div className="event-options">
                    <MoreHorizIcon />
                  </div>
                </div>
                <div className="event-info">
                  <div className="event-date">Sat, 3 Jan 2026-5 Jan 2026</div>
                  <div className="event-title">FACETS SRI LANKA 2026</div>
                  <div className="event-location">Cinnamon Life</div>
                  <div className="event-stats">418 interested · 48 going</div>
                </div>
                <div className="event-actions">
                  <button className="interested-btn">
                    <InterestsIcon />
                    <span>Interested</span>
                  </button>
                  <button className="share-btn">
                    <ShareIcon />
                  </button>
                </div>
              </div>

              <div className="event-card">
                <div className="event-image">
                  <div className="event-gradient-bg economic"></div>
                  <div className="event-options">
                    <MoreHorizIcon />
                  </div>
                </div>
                <div className="event-info">
                  <div className="event-date">Thu, 17 Oct at 14:00</div>
                  <div className="event-title">Economic Development Forum</div>
                  <div className="event-location">Colombo Conference Center</div>
                  <div className="event-stats">89 interested · 23 going</div>
                </div>
                <div className="event-actions">
                  <button className="interested-btn">
                    <InterestsIcon />
                    <span>Interested</span>
                  </button>
                  <button className="share-btn">
                    <ShareIcon />
                  </button>
                </div>
              </div>

              <div className="event-card">
                <div className="event-image">
                  <div className="event-gradient-bg riverstone"></div>
                  <div className="event-options">
                    <MoreHorizIcon />
                  </div>
                </div>
                <div className="event-info">
                  <div className="event-date">Sun, 20 Oct at 09:00</div>
                  <div className="event-title">Riverstone Visit | 6th Excursion</div>
                  <div className="event-location">Riverstone, Knuckles Range</div>
                  <div className="event-stats">156 interested · 78 going</div>
                </div>
                <div className="event-actions">
                  <button className="interested-btn">
                    <InterestsIcon />
                    <span>Interested</span>
                  </button>
                  <button className="share-btn">
                    <ShareIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}