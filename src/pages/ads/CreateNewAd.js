import React, { useState } from 'react';
import './createNewAd.css';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const CreateNewAd = ({ setCurrentPage }) => {
  const [certificationExpanded, setCertificationExpanded] = useState(true);

  const handleCertifyCompliance = () => {
    console.log('Certify Compliance clicked');
  };

  const handleChangeGoal = () => {
    console.log('Change goal clicked');
  };

  const handleUsePost = () => {
    console.log('Use a post clicked');
  };

  const handlePublish = () => {
    console.log('Publish clicked');
  };

  const handleNeedHelp = () => {
    console.log('Need help clicked');
  };

  return (
    <div className="create-new-ad-page">
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>Create new ad</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-container">
        {/* Left Content */}
        <div className="left-content">
          {/* Certification Section */}
          <div className="certification-section">
            <div className="certification-header" onClick={() => setCertificationExpanded(!certificationExpanded)}>
              <div className="certification-icon">
                <ErrorIcon className="error-icon" />
              </div>
              <div className="certification-content">
                <h3>Certification required</h3>
                <p>Meta requires advertisers to confirm compliance with our Non-discrimination Advertising Policy before running ads.</p>
              </div>
              <div className="expand-icon">
                {certificationExpanded ? '−' : '+'}
              </div>
            </div>
            
            {certificationExpanded && (
              <div className="certification-body">
                <button className="certify-button" onClick={handleCertifyCompliance}>
                  Certify Compliance
                </button>
              </div>
            )}
          </div>

          {/* Goal Section */}
          <div className="goal-section">
            <h3>Goal</h3>
            <p className="goal-description">What results would you like from this ad?</p>
            
            <div className="goal-selection">
              <div className="goal-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="20" fill="#FFB800" />
                  <path d="M15 20L18 23L25 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 8L24 12H28V16L32 20L28 24V28H24L20 32L16 28H12V24L8 20L12 16V12H16L20 8Z" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div className="goal-content">
                <h4>Automatic</h4>
                <p>Let Facebook select the most relevant goal based on the button label and other settings that you choose.</p>
              </div>
              <button className="change-button" onClick={handleChangeGoal}>
                Change
              </button>
            </div>
          </div>

          {/* Ad Creative Section */}
          <div className="ad-creative-section">
            <div className="creative-header">
              <h3>Ad creative</h3>
              <InfoIcon className="info-icon" />
            </div>
            <p className="creative-description">How do you want your ad to look?</p>
            
            <div className="creative-option">
              <button className="use-post-button" onClick={handleUsePost}>
                Use a post
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="footer-section">
            <div className="terms-text">
              By clicking Publish, you acknowledge that your use of Meta's ad tools is subject to our{' '}
              <a href="#" className="terms-link">Terms & Conditions</a>
            </div>
            
            <div className="footer-actions">
              <button className="help-button" onClick={handleNeedHelp}>
                <HelpOutlineIcon className="help-icon" />
                Need help?
              </button>
              <button className="publish-button" onClick={handlePublish}>
                Publish
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Ad Preview */}
        <div className="right-content">
          <div className="ad-preview-section">
            <h3>Ad preview</h3>
            <div className="preview-placeholder">
              <div className="preview-content">
                <p>Your ad preview will appear here once you add creative content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewAd;