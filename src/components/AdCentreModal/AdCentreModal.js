import React from 'react';
import './adCentreModal.css';
import CloseIcon from '@mui/icons-material/Close';

const AdCentreModal = ({ isOpen, onClose, onCreateAds, onManageAds }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="ad-centre-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <h2>Welcome to Ad Centre</h2>
          <button className="close-btn" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className="modal-content">
          {/* Illustration */}
          <div className="modal-illustration">
            <svg width="400" height="200" viewBox="0 0 400 200" fill="none">
              {/* Background with gradient */}
              <rect width="400" height="200" fill="url(#gradient)" rx="12" />
              
              {/* Define gradient */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E3F2FD" />
                  <stop offset="50%" stopColor="#F0F8FF" />
                  <stop offset="100%" stopColor="#E8F5E8" />
                </linearGradient>
              </defs>
              
              {/* Left person (woman in orange/red) */}
              <g transform="translate(80, 60)">
                {/* Body */}
                <ellipse cx="0" cy="30" rx="20" ry="35" fill="#FF6B35" />
                {/* Head */}
                <circle cx="0" cy="-5" r="12" fill="#8B4513" />
                {/* Face */}
                <circle cx="0" cy="-5" r="10" fill="#FFDBAC" />
                {/* Hair */}
                <path d="M-10 -15 Q0 -20 10 -15 Q8 -10 0 -12 Q-8 -10 -10 -15" fill="#2C1810" />
                {/* Eyes */}
                <circle cx="-3" cy="-7" r="1" fill="#000" />
                <circle cx="3" cy="-7" r="1" fill="#000" />
                {/* Smile */}
                <path d="M-3 -2 Q0 1 3 -2" stroke="#FF6B6B" strokeWidth="1" fill="none" />
                {/* Arms */}
                <ellipse cx="-18" cy="15" rx="6" ry="15" fill="#FF6B35" transform="rotate(-20)" />
                <ellipse cx="18" cy="15" rx="6" ry="15" fill="#FF6B35" transform="rotate(20)" />
                {/* Hands pointing to screens */}
                <circle cx="-25" cy="5" r="4" fill="#FFDBAC" />
                <circle cx="25" cy="5" r="4" fill="#FFDBAC" />
              </g>

              {/* Right person (man in blue) */}
              <g transform="translate(280, 80)">
                {/* Body */}
                <ellipse cx="0" cy="25" rx="18" ry="30" fill="#1E88E5" />
                {/* Head */}
                <circle cx="0" cy="-5" r="11" fill="#FFDBAC" />
                {/* Hair */}
                <path d="M-9 -13 Q0 -18 9 -13 Q7 -8 0 -10 Q-7 -8 -9 -13" fill="#4A4A4A" />
                {/* Eyes */}
                <circle cx="-3" cy="-7" r="1" fill="#000" />
                <circle cx="3" cy="-7" r="1" fill="#000" />
                {/* Smile */}
                <path d="M-3 -2 Q0 1 3 -2" stroke="#FF6B6B" strokeWidth="1" fill="none" />
                {/* Arms */}
                <ellipse cx="-15" cy="10" rx="5" ry="12" fill="#1E88E5" transform="rotate(-15)" />
                <ellipse cx="15" cy="10" rx="5" ry="12" fill="#1E88E5" transform="rotate(15)" />
                {/* Hand pointing up */}
                <circle cx="20" cy="-5" r="4" fill="#FFDBAC" />
              </g>

              {/* Screen/Device 1 (left) */}
              <g transform="translate(140, 40)">
                <rect x="0" y="0" width="60" height="40" rx="4" fill="#FFF" stroke="#E0E0E0" strokeWidth="2" />
                <rect x="5" y="5" width="20" height="15" rx="2" fill="#FF9800" />
                <rect x="30" y="5" width="25" height="3" rx="1" fill="#E0E0E0" />
                <rect x="30" y="10" width="20" height="3" rx="1" fill="#E0E0E0" />
                <rect x="30" y="15" width="15" height="3" rx="1" fill="#E0E0E0" />
                <rect x="5" y="25" width="50" height="10" rx="2" fill="#4CAF50" />
                <circle cx="50" cy="30" r="3" fill="#FFF" />
              </g>

              {/* Screen/Device 2 (center-right) */}
              <g transform="translate(200, 60)">
                <rect x="0" y="0" width="50" height="35" rx="4" fill="#FFF" stroke="#E0E0E0" strokeWidth="2" />
                <circle cx="25" cy="15" r="8" fill="#2196F3" />
                <rect x="5" y="25" width="40" height="5" rx="2" fill="#E0E0E0" />
              </g>

              {/* Video play button (top right) */}
              <g transform="translate(320, 30)">
                <rect x="0" y="0" width="50" height="35" rx="4" fill="#E3F2FD" stroke="#2196F3" strokeWidth="2" />
                <circle cx="25" cy="17.5" r="8" fill="#2196F3" />
                <polygon points="21,13 21,22 29,17.5" fill="#FFF" />
              </g>

              {/* Decorative elements */}
              <circle cx="50" cy="150" r="4" fill="#FF9800" opacity="0.6" />
              <circle cx="350" cy="160" r="6" fill="#4CAF50" opacity="0.6" />
              <path d="M30 170 Q50 160 70 170" stroke="#9C27B0" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M320 140 Q340 130 360 140" stroke="#FF5722" strokeWidth="2" fill="none" opacity="0.6" />
            </svg>
          </div>

          {/* Text Content */}
          <div className="modal-text">
            <h3>Welcome! Let's create your first ad on web</h3>
            <p>
              Ad Centre on web is your new home for advertising. On desktop it's even 
              easier to access all of your favourite in-app tools to easily create and manage 
              your ads.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="modal-actions">
            <button className="manage-ads-btn" onClick={onManageAds}>
              Manage ads
            </button>
            <button className="create-ads-btn" onClick={onCreateAds}>
              Create ads
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCentreModal;