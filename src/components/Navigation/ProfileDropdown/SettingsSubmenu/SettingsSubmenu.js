import React from 'react'
import './settingsSubmenu.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import SecurityIcon from '@mui/icons-material/Security';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import HistoryIcon from '@mui/icons-material/History';
import TuneIcon from '@mui/icons-material/Tune';

export default function SettingsSubmenu({ isOpen, onBack }) {
  if (!isOpen) return null;

  const settingsItems = [
    {
      id: 1,
      icon: <SettingsIcon />,
      title: 'Settings',
      hasArrow: false
    },
    {
      id: 2,
      icon: <LanguageIcon />,
      title: 'Language',
      hasArrow: true
    },
    {
      id: 3,
      icon: <SecurityIcon />,
      title: 'Privacy Checkup',
      hasArrow: false
    },
    {
      id: 4,
      icon: <PrivacyTipIcon />,
      title: 'Privacy Centre',
      hasArrow: false
    },
    {
      id: 5,
      icon: <HistoryIcon />,
      title: 'Activity log',
      hasArrow: false
    },
    {
      id: 6,
      icon: <TuneIcon />,
      title: 'Content preferences',
      hasArrow: false
    }
  ];

  return (
    <div className="settingsSubmenuContainer">
      {/* Header with back button */}
      <div className="submenuHeader">
        <div className="backButton" onClick={onBack}>
          <ArrowBackIcon className="backIcon" />
        </div>
        <h3 className="submenuTitle">Settings & privacy</h3>
      </div>

      {/* Settings Menu Items */}
      <div className="submenuItems">
        {settingsItems.map((item) => (
          <div key={item.id} className="submenuItem">
            <div className="submenuItemLeft">
              <div className="submenuItemIcon">
                {item.icon}
              </div>
              <span className="submenuItemTitle">{item.title}</span>
            </div>
            {item.hasArrow && (
              <div className="submenuItemArrow">›</div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="submenuFooter">
        <span>Privacy · Terms · Advertising · Ad choices · Cookies · More</span>
      </div>
    </div>
  )
}