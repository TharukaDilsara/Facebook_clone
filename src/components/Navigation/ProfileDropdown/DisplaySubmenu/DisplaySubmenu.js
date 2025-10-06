import React, { useState } from 'react'
import './displaySubmenu.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export default function DisplaySubmenu({ isOpen, onBack }) {
  const [darkMode, setDarkMode] = useState('off');
  const [compactMode, setCompactMode] = useState('off');

  if (!isOpen) return null;

  return (
    <div className="displaySubmenuContainer">
      {/* Header with back button */}
      <div className="displaySubmenuHeader">
        <div className="displayBackButton" onClick={onBack}>
          <ArrowBackIcon className="displayBackIcon" />
        </div>
        <h3 className="displaySubmenuTitle">Display & accessibility</h3>
      </div>

      {/* Scrollable Content */}
      <div className="displaySubmenuContent">
        {/* Dark Mode Section */}
        <div className="displaySection">
          <div className="displaySectionHeader">
            <div className="displaySectionIcon">
              <Brightness4Icon />
            </div>
            <div className="displaySectionInfo">
              <h4 className="displaySectionTitle">Dark mode</h4>
              <p className="displaySectionDescription">
                Adjust the appearance of Facebook to reduce glare and give your eyes a break.
              </p>
            </div>
          </div>

          <div className="displayOptions">
            <div 
              className={`displayOption ${darkMode === 'off' ? 'selected' : ''}`}
              onClick={() => setDarkMode('off')}
            >
              <span className="displayOptionLabel">Off</span>
              <div className={`radioButton ${darkMode === 'off' ? 'checked' : ''}`}>
                {darkMode === 'off' && <div className="radioButtonInner"></div>}
              </div>
            </div>

            <div 
              className={`displayOption ${darkMode === 'on' ? 'selected' : ''}`}
              onClick={() => setDarkMode('on')}
            >
              <span className="displayOptionLabel">On</span>
              <div className={`radioButton ${darkMode === 'on' ? 'checked' : ''}`}>
                {darkMode === 'on' && <div className="radioButtonInner"></div>}
              </div>
            </div>

            <div 
              className={`displayOption ${darkMode === 'automatic' ? 'selected' : ''}`}
              onClick={() => setDarkMode('automatic')}
            >
              <div className="displayOptionText">
                <span className="displayOptionLabel">Automatic</span>
                <p className="displayOptionDescription">
                  We'll automatically adjust the display based on your device's system settings.
                </p>
              </div>
              <div className={`radioButton ${darkMode === 'automatic' ? 'checked' : ''}`}>
                {darkMode === 'automatic' && <div className="radioButtonInner"></div>}
              </div>
            </div>
          </div>
        </div>

        {/* Compact Mode Section */}
        <div className="displaySection">
          <div className="displaySectionHeader">
            <div className="displaySectionIcon">
              <TextFieldsIcon />
            </div>
            <div className="displaySectionInfo">
              <h4 className="displaySectionTitle">Compact mode</h4>
              <p className="displaySectionDescription">
                Make your font size smaller so more content can fit on the screen.
              </p>
            </div>
          </div>

          <div className="displayOptions">
            <div 
              className={`displayOption ${compactMode === 'off' ? 'selected' : ''}`}
              onClick={() => setCompactMode('off')}
            >
              <span className="displayOptionLabel">Off</span>
              <div className={`radioButton ${compactMode === 'off' ? 'checked' : ''}`}>
                {compactMode === 'off' && <div className="radioButtonInner"></div>}
              </div>
            </div>

            <div 
              className={`displayOption ${compactMode === 'on' ? 'selected' : ''}`}
              onClick={() => setCompactMode('on')}
            >
              <span className="displayOptionLabel">On</span>
              <div className={`radioButton ${compactMode === 'on' ? 'checked' : ''}`}>
                {compactMode === 'on' && <div className="radioButtonInner"></div>}
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard Option */}
        <div className="displayMenuItem">
          <div className="displayMenuItemLeft">
            <div className="displayMenuItemIcon">
              <KeyboardIcon />
            </div>
            <span className="displayMenuItemTitle">Keyboard</span>
          </div>
          <div className="displayMenuItemArrow">›</div>
        </div>

        {/* Accessibility Settings Option */}
        <div className="displayMenuItem">
          <div className="displayMenuItemLeft">
            <div className="displayMenuItemIcon">
              <AccessibilityIcon />
            </div>
            <span className="displayMenuItemTitle">Accessibility settings</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="displaySubmenuFooter">
        <span>Privacy · Terms · Advertising · Ad choices · Cookies · More</span>
      </div>
    </div>
  )
}