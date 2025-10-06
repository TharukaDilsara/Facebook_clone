import React, { useState } from 'react'
import './profileDropdown.css'
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
import SettingsSubmenu from './SettingsSubmenu/SettingsSubmenu';

export default function ProfileDropdown({ isOpen, onClose }) {
  const [showSettingsSubmenu, setShowSettingsSubmenu] = useState(false);

  if (!isOpen) return null;

  const handleSettingsClick = () => {
    setShowSettingsSubmenu(true);
  };

  const handleBackToMain = () => {
    setShowSettingsSubmenu(false);
  };

  const profiles = [
    {
      id: 1,
      name: 'Tharuka Dilsara',
      image: '/Images/1.png',
      isActive: true
    },
    {
      id: 2,
      name: 'PetZone LK',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=150&h=150&fit=crop&crop=face',
      isActive: false
    }
  ];

  const menuItems = [
    {
      id: 1,
      icon: <SettingsIcon />,
      title: 'Settings & privacy',
      hasArrow: true,
      onClick: handleSettingsClick
    },
    {
      id: 2,
      icon: <HelpOutlineIcon />,
      title: 'Help & support',
      hasArrow: true
    },
    {
      id: 3,
      icon: <Brightness4Icon />,
      title: 'Display & accessibility',
      hasArrow: true
    },
    {
      id: 4,
      icon: <FeedbackIcon />,
      title: 'Give feedback',
      subtitle: 'CTRL B',
      hasArrow: false
    },
    {
      id: 5,
      icon: <LogoutIcon />,
      title: 'Log out',
      hasArrow: false
    }
  ];

  return (
    <div className="profileDropdownOverlay" onClick={onClose}>
      <div className="profileDropdownContainer" onClick={(e) => e.stopPropagation()}>
        {/* Profiles Section */}
        <div className="profilesSection">
          {profiles.map((profile) => (
            <div key={profile.id} className={`profileItem ${profile.isActive ? 'active' : ''}`}>
              <img src={profile.image} alt={profile.name} className="profileItemImage" />
              <span className="profileItemName">{profile.name}</span>
            </div>
          ))}
          
          <div className="seeAllProfiles">
            <GroupIcon className="seeAllIcon" />
            <span>See all profiles</span>
          </div>
        </div>

        {/* Menu Items Section */}
        <div className="menuSection">
          {menuItems.map((item) => (
            <div key={item.id} className="menuItem" onClick={item.onClick}>
              <div className="menuItemLeft">
                <div className="menuItemIcon">
                  {item.icon}
                </div>
                <div className="menuItemText">
                  <div className="menuItemTitle">{item.title}</div>
                  {item.subtitle && (
                    <div className="menuItemSubtitle">{item.subtitle}</div>
                  )}
                </div>
              </div>
              {item.hasArrow && (
                <div className="menuItemArrow">›</div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="dropdownFooter">
          <span>Privacy · Terms · Advertising · Ad choices · Cookies · More</span>
        </div>

        {/* Settings Submenu */}
        <SettingsSubmenu 
          isOpen={showSettingsSubmenu} 
          onBack={handleBackToMain} 
        />
      </div>
    </div>
  )
}