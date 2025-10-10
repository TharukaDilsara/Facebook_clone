import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import AppsIcon from '@mui/icons-material/Apps';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';
import AppsMenu from './AppsMenu/AppsMenu';
import "./NavBar.css"


export default function NavBar({ currentPage, setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('home');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAppsMenuOpen, setIsAppsMenuOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsAppsMenuOpen(false); // Close apps menu when opening profile dropdown
  };

  const closeProfileDropdown = () => {
    setIsProfileDropdownOpen(false);
  };

  const toggleAppsMenu = () => {
    setIsAppsMenuOpen(!isAppsMenuOpen);
    setIsProfileDropdownOpen(false); // Close profile dropdown when opening apps menu
  };

  const closeAppsMenu = () => {
    setIsAppsMenuOpen(false);
  };

  const handleMarketplaceClick = () => {
    setCurrentPage('marketplace');
    setIsProfileDropdownOpen(false); // Close profile dropdown
    setIsAppsMenuOpen(false); // Close apps menu
    setActiveTab('marketplace');
  };

  const handleVideoClick = () => {
    setCurrentPage('video');
    setIsProfileDropdownOpen(false); // Close profile dropdown
    setIsAppsMenuOpen(false); // Close apps menu
    setActiveTab('watch');
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
    setActiveTab('home');
    setIsProfileDropdownOpen(false); // Close profile dropdown
    setIsAppsMenuOpen(false); // Close apps menu
  };

  const handleGroupsClick = () => {
    setCurrentPage('groups');
    setIsProfileDropdownOpen(false); // Close profile dropdown
    setIsAppsMenuOpen(false); // Close apps menu
    setActiveTab('groups');
  };

  return (
    <div className="navBarBox">
        {/* Left Section - Logo and Search */}
        <div className="navBarLeft">
            <div className="facebookLogo">
                <span className="fbLogo">facebook</span>
            </div>
            <div className="searchBarBox">
                <SearchIcon className='searchIcon' />
                <input 
                    placeholder='Search Facebook' 
                    className="searchInput" 
                />
            </div>
        </div>

        {/* Center Section - Navigation Icons */}
        <div className="navBarCenter">
            <div className="navTabs">
                <div 
                    className={`navTab ${activeTab === 'home' ? 'active' : ''}`}
                    onClick={handleHomeClick}
                >
                    <HomeIcon className="navIcon" />
                </div>
                <div 
                    className={`navTab ${activeTab === 'friends' ? 'active' : ''}`}
                    onClick={() => setActiveTab('friends')}
                >
                    <PeopleIcon className="navIcon" />
                </div>
                <div 
                    className={`navTab ${activeTab === 'watch' ? 'active' : ''}`}
                    onClick={handleVideoClick}
                >
                    <OndemandVideoIcon className="navIcon" />
                </div>
                <div 
                    className={`navTab ${activeTab === 'marketplace' ? 'active' : ''}`}
                    onClick={handleMarketplaceClick}
                >
                    <StorefrontIcon className="navIcon" />
                </div>
                <div 
                    className={`navTab ${activeTab === 'groups' ? 'active' : ''}`}
                    onClick={handleGroupsClick}
                >
                    <GroupsIcon className="navIcon" />
                </div>
            </div>
        </div>

        {/* Right Section - Menu, Messenger, Notifications, Profile */}
        <div className="navBarRight">
            <div className="rightIcons">
                <div className="iconButton" onClick={toggleAppsMenu}>
                    <AppsIcon className="rightIcon" />
                </div>
                <div className="iconButton">
                    <ChatIcon className="rightIcon" />
                </div>
                <div className="iconButton">
                    <NotificationsIcon className="rightIcon" />
                    <span className="notificationBadge">3</span>
                </div>
                <div className="profileSection" onClick={toggleProfileDropdown}>
                    <img 
                        src="/Images/1.png" 
                        alt="Profile" 
                        className="profileImage" 
                    />
                    <ArrowDropDownIcon className="dropdownIcon" />
                </div>
            </div>
        </div>
        
        {/* Profile Dropdown */}
        <ProfileDropdown 
          isOpen={isProfileDropdownOpen} 
          onClose={closeProfileDropdown} 
        />

        {/* Apps Menu */}
        <AppsMenu 
          isOpen={isAppsMenuOpen} 
          onClose={closeAppsMenu} 
        />
    </div>
  )
}
