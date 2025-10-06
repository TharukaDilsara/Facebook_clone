import React from 'react'
import './helpSubmenu.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InboxIcon from '@mui/icons-material/Inbox';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export default function HelpSubmenu({ isOpen, onBack }) {
  if (!isOpen) return null;

  const helpItems = [
    {
      id: 1,
      icon: <HelpOutlineIcon />,
      title: 'Help Centre',
      hasArrow: false
    },
    {
      id: 2,
      icon: <AccountBoxIcon />,
      title: 'Account status',
      hasArrow: false
    },
    {
      id: 3,
      icon: <InboxIcon />,
      title: 'Support Inbox',
      hasArrow: false
    },
    {
      id: 4,
      icon: <ReportProblemIcon />,
      title: 'Report a problem',
      hasArrow: false
    }
  ];

  return (
    <div className="helpSubmenuContainer">
      {/* Header with back button */}
      <div className="helpSubmenuHeader">
        <div className="helpBackButton" onClick={onBack}>
          <ArrowBackIcon className="helpBackIcon" />
        </div>
        <h3 className="helpSubmenuTitle">Help & support</h3>
      </div>

      {/* Help Menu Items */}
      <div className="helpSubmenuItems">
        {helpItems.map((item) => (
          <div key={item.id} className="helpSubmenuItem">
            <div className="helpSubmenuItemLeft">
              <div className="helpSubmenuItemIcon">
                {item.icon}
              </div>
              <span className="helpSubmenuItemTitle">{item.title}</span>
            </div>
            {item.hasArrow && (
              <div className="helpSubmenuItemArrow">›</div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="helpSubmenuFooter">
        <span>Privacy · Terms · Advertising · Ad choices · Cookies · More</span>
      </div>
    </div>
  )
}