import React from 'react';
import './nonDiscriminationModal.css';
import CloseIcon from '@mui/icons-material/Close';

const NonDiscriminationModal = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="non-discrimination-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          <CloseIcon />
        </button>

        {/* Header Illustration */}
        <div className="modal-illustration">
          <svg width="600" height="300" viewBox="0 0 600 300" fill="none">
            {/* Background with gradient */}
            <rect width="600" height="300" fill="url(#backgroundGradient)" />
            
            {/* Define gradients */}
            <defs>
              <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F0F8FF" />
                <stop offset="50%" stopColor="#E8F5E8" />
                <stop offset="100%" stopColor="#FFF8E1" />
              </linearGradient>
              <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4CAF50" />
                <stop offset="100%" stopColor="#2E7D32" />
              </linearGradient>
            </defs>

            {/* Background shapes */}
            <circle cx="100" cy="50" r="30" fill="#E3F2FD" opacity="0.6" />
            <circle cx="500" cy="80" r="25" fill="#F3E5F5" opacity="0.6" />
            <path d="M50 200 Q100 180 150 200" stroke="#4CAF50" strokeWidth="3" fill="none" opacity="0.4" />
            <path d="M450 220 Q500 200 550 220" stroke="#FF9800" strokeWidth="3" fill="none" opacity="0.4" />

            {/* Left person (green shirt) */}
            <g transform="translate(120, 120)">
              {/* Body */}
              <ellipse cx="0" cy="40" rx="25" ry="45" fill="#4CAF50" />
              {/* Head */}
              <circle cx="0" cy="0" r="18" fill="#8D6E63" />
              {/* Face */}
              <circle cx="0" cy="0" r="15" fill="#FFDBAC" />
              {/* Hair */}
              <path d="M-12 -8 Q0 -15 12 -8 Q10 -5 0 -7 Q-10 -5 -12 -8" fill="#2C1810" />
              {/* Eyes */}
              <circle cx="-4" cy="-3" r="1.5" fill="#000" />
              <circle cx="4" cy="-3" r="1.5" fill="#000" />
              {/* Smile */}
              <path d="M-4 2 Q0 6 4 2" stroke="#FF6B6B" strokeWidth="1.5" fill="none" />
              {/* Arms */}
              <ellipse cx="-20" cy="25" rx="8" ry="20" fill="#4CAF50" transform="rotate(-20)" />
              <ellipse cx="20" cy="25" rx="8" ry="20" fill="#4CAF50" transform="rotate(20)" />
              {/* Hands pointing to screen */}
              <circle cx="30" cy="15" r="5" fill="#FFDBAC" />
            </g>

            {/* Center screen/device */}
            <g transform="translate(250, 100)">
              <rect x="0" y="0" width="100" height="80" rx="8" fill="#FFF" stroke="#E0E0E0" strokeWidth="2" />
              <rect x="5" y="5" width="90" height="50" rx="4" fill="url(#screenGradient)" />
              <rect x="15" y="15" width="30" height="20" rx="2" fill="#FFF" opacity="0.9" />
              <rect x="50" y="15" width="25" height="4" rx="2" fill="#FFF" opacity="0.7" />
              <rect x="50" y="22" width="20" height="3" rx="1" fill="#FFF" opacity="0.7" />
              <rect x="50" y="28" width="25" height="3" rx="1" fill="#FFF" opacity="0.7" />
              <circle cx="75" cy="40" r="8" fill="#FFB800" />
              <path d="M71 36L75 40L79 36" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* Screen base */}
              <rect x="40" y="80" width="20" height="8" rx="2" fill="#E0E0E0" />
              <rect x="35" y="88" width="30" height="4" rx="2" fill="#BDBDBD" />
            </g>

            {/* Right person (blue shirt) */}
            <g transform="translate(420, 130)">
              {/* Body */}
              <ellipse cx="0" cy="35" rx="22" ry="40" fill="#1976D2" />
              {/* Head */}
              <circle cx="0" cy="0" r="16" fill="#FFDBAC" />
              {/* Hair */}
              <path d="M-10 -10 Q0 -18 10 -10 Q8 -6 0 -8 Q-8 -6 -10 -10" fill="#4A4A4A" />
              {/* Eyes */}
              <circle cx="-3" cy="-2" r="1.5" fill="#000" />
              <circle cx="3" cy="-2" r="1.5" fill="#000" />
              {/* Smile */}
              <path d="M-3 3 Q0 6 3 3" stroke="#FF6B6B" strokeWidth="1.5" fill="none" />
              {/* Arms */}
              <ellipse cx="-18" cy="20" rx="7" ry="18" fill="#1976D2" transform="rotate(-15)" />
              <ellipse cx="18" cy="20" rx="7" ry="18" fill="#1976D2" transform="rotate(15)" />
              {/* Hand pointing up */}
              <circle cx="25" cy="5" r="4" fill="#FFDBAC" />
            </g>

            {/* Additional decorative elements */}
            <g transform="translate(380, 40)">
              <rect x="0" y="0" width="60" height="40" rx="6" fill="#FFF" stroke="#E0E0E0" strokeWidth="2" />
              <rect x="5" y="5" width="50" height="25" rx="3" fill="#FF9800" />
              <rect x="10" y="10" width="15" height="10" rx="2" fill="#FFF" opacity="0.9" />
              <rect x="28" y="12" width="20" height="2" rx="1" fill="#FFF" opacity="0.8" />
              <rect x="28" y="16" width="15" height="2" rx="1" fill="#FFF" opacity="0.8" />
            </g>

            {/* Bottom person (pink shirt) */}
            <g transform="translate(200, 200)">
              {/* Body */}
              <ellipse cx="0" cy="25" rx="20" ry="30" fill="#E91E63" />
              {/* Head */}
              <circle cx="0" cy="0" r="14" fill="#8D6E63" />
              {/* Face */}
              <circle cx="0" cy="0" r="12" fill="#FFDBAC" />
              {/* Hair (longer) */}
              <path d="M-10 -8 Q-5 -15 0 -12 Q5 -15 10 -8 Q8 -3 5 -5 Q0 -8 -5 -5 Q-8 -3 -10 -8" fill="#654321" />
              {/* Eyes */}
              <circle cx="-3" cy="-2" r="1.5" fill="#000" />
              <circle cx="3" cy="-2" r="1.5" fill="#000" />
              {/* Smile */}
              <path d="M-3 2 Q0 5 3 2" stroke="#FF6B6B" strokeWidth="1.5" fill="none" />
              {/* Arms */}
              <ellipse cx="-15" cy="15" rx="6" ry="15" fill="#E91E63" transform="rotate(-10)" />
              <ellipse cx="15" cy="15" rx="6" ry="15" fill="#E91E63" transform="rotate(10)" />
              {/* Hand with device */}
              <circle cx="-20" cy="8" r="4" fill="#FFDBAC" />
              <rect x="-25" y="5" width="8" height="12" rx="2" fill="#333" />
              <rect x="-24" y="6" width="6" height="8" rx="1" fill="#4CAF50" />
            </g>

            {/* Floating elements */}
            <circle cx="80" cy="250" r="6" fill="#2196F3" opacity="0.6" />
            <circle cx="520" cy="260" r="8" fill="#9C27B0" opacity="0.6" />
            <path d="M30 150 Q50 140 70 150" stroke="#FF5722" strokeWidth="2" fill="none" opacity="0.5" />
          </svg>
        </div>

        {/* Content */}
        <div className="modal-content">
          <h2>To help maintain the integrity of Meta advertising, please review and accept our Non-discrimination Policy.</h2>
          
          <div className="policy-text">
            <p>
              Meta's Advertising Policies prohibit advertisers from using our ads products to discriminate against 
              individuals or groups of <a href="#" className="policy-link">people</a>. Ads are discriminatory when they deny opportunities to 
              individuals or groups. It's against our policies to discriminate based on certain personal 
              attributes such as race, ethnicity, national origin, religion, age, sex, sexual orientation, gender 
              identity, family status, disability, medical or genetic condition.
            </p>
          </div>

          {/* Accept Button */}
          <button className="accept-button" onClick={onAccept}>
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default NonDiscriminationModal;