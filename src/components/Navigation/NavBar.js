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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./NavBar.css"


export default function NavBar() {
  const [activeTab, setActiveTab] = useState('home');

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
                    onClick={() => setActiveTab('home')}
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
                    onClick={() => setActiveTab('watch')}
                >
                    <OndemandVideoIcon className="navIcon" />
                </div>
                <div 
                    className={`navTab ${activeTab === 'marketplace' ? 'active' : ''}`}
                    onClick={() => setActiveTab('marketplace')}
                >
                    <StorefrontIcon className="navIcon" />
                </div>
                <div 
                    className={`navTab ${activeTab === 'groups' ? 'active' : ''}`}
                    onClick={() => setActiveTab('groups')}
                >
                    <GroupsIcon className="navIcon" />
                </div>
            </div>
        </div>

        {/* Right Section - Menu, Messenger, Notifications, Profile */}
        <div className="navBarRight">
            <div className="rightIcons">
                <div className="iconButton">
                    <AppsIcon className="rightIcon" />
                </div>
                <div className="iconButton">
                    <ChatIcon className="rightIcon" />
                </div>
                <div className="iconButton">
                    <NotificationsIcon className="rightIcon" />
                    <span className="notificationBadge">3</span>
                </div>
                <div className="profileSection">
                    <img 
                        src="/Images/1.png" 
                        alt="Profile" 
                        className="profileImage" 
                    />
                    <ArrowDropDownIcon className="dropdownIcon" />
                </div>
            </div>
        </div>
    </div>
  )
}
