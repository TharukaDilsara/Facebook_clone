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
            
            <div className="category-item">
              <div className="category-icon dance">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7.5L12.5 7L11.5 10L13.5 11.5C13.78 11.72 14 12.22 14 12.54V18H16V12.5L19.5 11L21 9ZM12.5 11.5L11.5 14L9 12V18H7V10.5L12.5 11.5Z"/>
                </svg>
              </div>
              <span>Dance</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon drinks">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3V7C5 8.1 5.9 9 7 9H10C11.1 9 12 8.1 12 7V3H13V7C13 8.66 11.66 10 10 10H7C5.34 10 4 8.66 4 7V3H5ZM7.5 15.5C7.5 16.33 8.17 17 9 17S10.5 16.33 10.5 15.5 9.83 14 9 14 7.5 14.67 7.5 15.5ZM12 13.5L11.5 12H5.5L5 13.5C4.5 14.5 4.5 15.5 5.5 16.5H12.5C13.5 15.5 13.5 14.5 13 13.5L12 13.5Z"/>
                </svg>
              </div>
              <span>Drinks</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon fitness">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 12H4V14H2V12ZM5 11H7V15H5V11ZM8 10H10V16H8V10ZM11 9H13V17H11V9ZM14 8H16V18H14V8ZM17 7H19V19H17V7Z"/>
                </svg>
              </div>
              <span>Fitness & workouts</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon foods">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.1 13.34L8.5 12.34C8.78 11.6 9.56 11.04 10.25 11.04S11.72 11.6 12 12.34L12.4 13.34C12.68 14.04 12.42 14.64 11.72 14.64H8.78C8.08 14.64 7.82 14.04 8.1 13.34ZM7 9V10H8V11H6C5.45 11 5 10.55 5 10V9C5 8.45 5.45 8 6 8H7V9ZM14 8V9H15V10C15 10.55 14.55 11 14 11H13V10H14V9ZM9 2V8H11V2C11 1.45 10.55 1 10 1S9 1.45 9 2Z"/>
                </svg>
              </div>
              <span>Foods</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon games">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15,7.5V2H9V7.5L10.5,9L9,10.5V16H15V10.5L13.5,9L15,7.5M7.5,13A1.5,1.5 0 0,0 6,14.5A1.5,1.5 0 0,0 7.5,16A1.5,1.5 0 0,0 9,14.5A1.5,1.5 0 0,0 7.5,13M16.5,11A1.5,1.5 0 0,0 15,12.5A1.5,1.5 0 0,0 16.5,14A1.5,1.5 0 0,0 18,12.5A1.5,1.5 0 0,0 16.5,11Z"/>
                </svg>
              </div>
              <span>Games</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon gardening">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6,13A3,3 0 0,0 9,16A3,3 0 0,0 12,13C12,11.36 10.79,10 9.21,10H8.79C7.21,10 6,11.36 6,13M12,19H6V17H12V19M16,6V8H14V6H16M13,2V8H11V2H13M18,2V4H16V2H18Z"/>
                </svg>
              </div>
              <span>Gardening</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon health">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11,2V6H15V7H11V11H10V7H6V6H10V2H11M12.5,8A2.5,2.5 0 0,1 15,10.5A2.5,2.5 0 0,1 12.5,13A2.5,2.5 0 0,1 10,10.5A2.5,2.5 0 0,1 12.5,8M12.5,15C14.61,15 16.5,16.67 16.5,18.5V20H8.5V18.5C8.5,16.67 10.39,15 12.5,15Z"/>
                </svg>
              </div>
              <span>Health & medical</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon healthy-living">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11H17.5A5.5,5.5 0 0,0 12,5.5A5.5,5.5 0 0,0 6.5,11H5A7,7 0 0,1 12,4A7,7 0 0,1 19,11M12,16A1,1 0 0,1 13,17V19H11V17A1,1 0 0,1 12,16Z"/>
                </svg>
              </div>
              <span>Healthy living and self-care</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon home-garden">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10,2L3,9V20H8V14H12V20H17V9L10,2M10,4.64L15,9.64V18H14V12H6V18H5V9.64L10,4.64Z"/>
                </svg>
              </div>
              <span>Home and garden</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon music">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12,3V12.26C11.5,12.09 11,12 10.5,12A2.5,2.5 0 0,0 8,14.5A2.5,2.5 0 0,0 10.5,17A2.5,2.5 0 0,0 13,14.5V7H16V5H12V3Z"/>
                </svg>
              </div>
              <span>Music and audio</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon parties">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5,4V7H10.5V19L13,17.5V7H18.5V4H5M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2M6.5,2A1,1 0 0,1 7.5,3A1,1 0 0,1 6.5,4A1,1 0 0,1 5.5,3A1,1 0 0,1 6.5,2M17.5,2A1,1 0 0,1 18.5,3A1,1 0 0,1 17.5,4A1,1 0 0,1 16.5,3A1,1 0 0,1 17.5,2Z"/>
                </svg>
              </div>
              <span>Parties</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon professional">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                </svg>
              </div>
              <span>Professional networking</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon religions">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10,2C11.11,2 12,2.9 12,4C12,5.11 11.11,6 10,6C8.89,6 8,5.11 8,4C8,2.9 8.89,2 10,2M15.5,8.5C15.91,8.91 15.91,9.59 15.5,10L14,11.5V17C14,17.55 13.55,18 13,18H7C6.45,18 6,17.55 6,17V11.5L4.5,10C4.09,9.59 4.09,8.91 4.5,8.5C4.91,8.09 5.59,8.09 6,8.5L8,10.5H12L14,8.5C14.41,8.09 15.09,8.09 15.5,8.5Z"/>
                </svg>
              </div>
              <span>Religions</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon shopping">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7,18C5.9,18 5,17.1 5,16A2,2 0 0,1 7,14A2,2 0 0,1 9,16C9,17.1 8.1,18 7,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5H5.21L4.27,3H1M17,18C15.9,18 15,17.1 15,16A2,2 0 0,1 17,14A2,2 0 0,1 19,16C19,17.1 18.1,18 17,18Z"/>
                </svg>
              </div>
              <span>Shopping</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon social-issues">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,6A2,2 0 0,0 14,8A2,2 0 0,0 16,10A2,2 0 0,0 18,8A2,2 0 0,0 16,6M4,4C6.2,4 8,5.8 8,8C8,10.2 6.2,12 4,12C1.8,12 0,10.2 0,8C0,5.8 1.8,4 4,4M4,6A2,2 0 0,0 2,8A2,2 0 0,0 4,10A2,2 0 0,0 6,8A2,2 0 0,0 4,6M10,14C12.2,14 14,15.8 14,18C14,20.2 12.2,22 10,22C7.8,22 6,20.2 6,18C6,15.8 7.8,14 10,14Z"/>
                </svg>
              </div>
              <span>Social issues</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon sports">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12H16A4,4 0 0,0 12,8V6M12,8A4,4 0 0,1 16,12H14A2,2 0 0,0 12,10V8M12,10A2,2 0 0,1 14,12H12V10Z"/>
                </svg>
              </div>
              <span>Sports</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon theatre">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.5,9A1.5,1.5 0 0,1 7,7.5A1.5,1.5 0 0,1 8.5,6A1.5,1.5 0 0,1 10,7.5A1.5,1.5 0 0,1 8.5,9M15.5,9A1.5,1.5 0 0,1 14,7.5A1.5,1.5 0 0,1 15.5,6A1.5,1.5 0 0,1 17,7.5A1.5,1.5 0 0,1 15.5,9M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
              <span>Theatre</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon tv-films">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18,3V5H16V3H8V5H6V3H4A2,2 0 0,0 2,5V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V5A2,2 0 0,0 20,3H18M4,7H20V17H4V7M9,8A2,2 0 0,0 7,10V14A2,2 0 0,0 9,16H15A2,2 0 0,0 17,14V10A2,2 0 0,0 15,8H9M9,10H15V14H9V10Z"/>
                </svg>
              </div>
              <span>TV and films</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon visual-arts">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12,2A2,2 0 0,1 14,4V8A2,2 0 0,1 12,10H10V8H12V4H10V2H12M8,4A2,2 0 0,1 10,2V4H8V8H10V10H8A2,2 0 0,1 6,8V4A2,2 0 0,1 8,4M18,10A2,2 0 0,1 20,12V16A2,2 0 0,1 18,18H14V16H18V12H14V10H18M6,12A2,2 0 0,1 4,10V12H6V16H4V18H6A2,2 0 0,1 8,16V12A2,2 0 0,1 6,12M12,12V14H10V16H12A2,2 0 0,1 14,18V16A2,2 0 0,1 12,14V12Z"/>
                </svg>
              </div>
              <span>Visual arts</span>
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