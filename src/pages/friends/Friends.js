import React from 'react';
import './friends.css';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SuggestIcon from '@mui/icons-material/RecommendOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Friends({ setCurrentPage }) {
  const handleHomeClick = () => {
    if (setCurrentPage) setCurrentPage('home');
  };

  // Sample friend request data
  const friendRequests = [
    {
      id: 1,
      name: "Sarah Johnson",
      mutualFriends: 163,
      profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen", 
      mutualFriends: 13,
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      mutualFriends: 25,
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Williams",
      mutualFriends: 211,
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      mutualFriends: 92,
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "James Anderson",
      mutualFriends: 371,
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Rachel Green",
      mutualFriends: 19,
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Alex Martinez",
      mutualFriends: 58,
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const handleConfirm = (friendId) => {
    console.log(`Confirmed friend request for ID: ${friendId}`);
    // Add confirmation logic here
  };

  const handleDelete = (friendId) => {
    console.log(`Deleted friend request for ID: ${friendId}`);
    // Add deletion logic here
  };

  return (
    <div className="friends-page">
      {/* Facebook Top Navigation Bar */}
      <div className="friends-navbar">
        <div className="friends-navbar-left">
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
        
        <div className="friends-navbar-center">
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
        
        <div className="friends-navbar-right">
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

      <div className="friends-container">
        {/* Left Sidebar */}
        <div className="friends-sidebar">
          <div className="friends-header">
            <h2>Friends</h2>
            <SettingsIcon className="settings-icon" />
          </div>

          <div className="friends-nav">
            <div className="friends-nav-item active">
              <HomeIcon className="friends-nav-icon" />
              <span>Home</span>
            </div>
            
            <div className="friends-nav-item">
              <PersonAddIcon className="friends-nav-icon" />
              <span>Friend requests</span>
              <ChevronRightIcon className="chevron-icon" />
            </div>
            
            <div className="friends-nav-item">
              <SuggestIcon className="friends-nav-icon" />
              <span>Suggestions</span>
              <ChevronRightIcon className="chevron-icon" />
            </div>
            
            <div className="friends-nav-item">
              <PeopleIcon className="friends-nav-icon" />
              <span>All friends</span>
              <ChevronRightIcon className="chevron-icon" />
            </div>
            
            <div className="friends-nav-item">
              <CardGiftcardIcon className="friends-nav-icon" />
              <span>Birthdays</span>
            </div>
            
            <div className="friends-nav-item">
              <PlaylistAddCheckIcon className="friends-nav-icon" />
              <span>Custom lists</span>
              <ChevronRightIcon className="chevron-icon" />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="friends-main">
          <div className="friends-content">
            <h2>Friend requests</h2>
            
            {/* Friend Request Cards */}
            <div className="friend-requests-grid">
              {friendRequests.map((friend) => (
                <div key={friend.id} className="friend-card">
                  <div className="friend-image-container">
                    <img 
                      src={friend.profileImage} 
                      alt={friend.name}
                      className="friend-image"
                    />
                  </div>
                  
                  <div className="friend-info">
                    <h3 className="friend-name">{friend.name}</h3>
                    <div className="mutual-friends">
                      <div className="mutual-friends-avatars">
                        <div className="avatar avatar-1"></div>
                        <div className="avatar avatar-2"></div>
                      </div>
                      <span>{friend.mutualFriends} mutual friends</span>
                    </div>
                  </div>
                  
                  <div className="friend-actions">
                    <button 
                      className="confirm-btn"
                      onClick={() => handleConfirm(friend.id)}
                    >
                      Confirm
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDelete(friend.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}