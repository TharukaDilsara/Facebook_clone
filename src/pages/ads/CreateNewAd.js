import React, { useState } from 'react';
import './createNewAd.css';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const CreateNewAd = ({ setCurrentPage }) => {
  const [certificationExpanded, setCertificationExpanded] = useState(true);
  const [advantageCreative, setAdvantageCreative] = useState(true);
  const [specialAdCategory, setSpecialAdCategory] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState('advantage');

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

          {/* Advantage+ Creative Section */}
          <div className="advantage-creative-section">
            <div className="section-header">
              <div className="section-title">
                <h3>Advantage+ creative</h3>
                <InfoIcon className="info-icon" />
              </div>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="advantage-creative"
                  checked={advantageCreative}
                  onChange={(e) => setAdvantageCreative(e.target.checked)}
                />
                <label htmlFor="advantage-creative" className="toggle-label">
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            <p className="section-description">
              Leverage Facebook's data to automatically deliver different ad creative variations to{' '}
              <span className="highlight-text">people</span> when likely to improve performance.
            </p>
          </div>

          {/* Special Ad Category Section */}
          <div className="special-ad-category-section">
            <div className="section-header">
              <div className="section-title">
                <h3>Special ad category</h3>
                <InfoIcon className="info-icon" />
              </div>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="special-ad-category"
                  checked={specialAdCategory}
                  onChange={(e) => setSpecialAdCategory(e.target.checked)}
                />
                <label htmlFor="special-ad-category" className="toggle-label">
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            <p className="section-description">
              Ads about financial products and services, employment, housing, or social issues, elections or politics
            </p>
          </div>

          {/* Audience Section */}
          <div className="audience-section">
            <div className="section-title">
              <h3>Audience</h3>
              <InfoIcon className="info-icon" />
            </div>
            <p className="section-subtitle">Who should see your ad?</p>
            
            <div className="audience-options">
              <div 
                className={`audience-option ${selectedAudience === 'advantage' ? 'selected' : ''}`}
                onClick={() => setSelectedAudience('advantage')}
              >
                <div className="radio-button">
                  <div className="radio-inner"></div>
                </div>
                <div className="option-content">
                  <h4>Advantage+ audience</h4>
                  <p>
                    Let our ad technology automatically find your audience and adjust over time to reach more people who are likely to respond to your ad.{' '}
                    <a href="#" className="learn-more-link">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
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

        {/* Right Content - Ad Preview and Results */}
        <div className="right-content">
          {/* Estimated Daily Results */}
          <div className="estimated-results-section">
            <h3>Estimated daily results</h3>
            
            <div className="result-item">
              <div className="result-header">
                <span className="result-label">
                  <a href="#" className="accounts-centre-link">Accounts Centre accounts</a> reached
                </span>
                <InfoIcon className="info-icon-small" />
              </div>
              <div className="result-value">7.2K-20.8K</div>
            </div>

            <div className="result-item">
              <div className="result-header">
                <span className="result-label">Follows or likes</span>
                <InfoIcon className="info-icon-small" />
              </div>
              <div className="result-value">107-311</div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="payment-summary-section">
            <h3>Payment summary</h3>
            <p className="payment-description">
              Your ad runs continuously on an average daily budget.
            </p>

            <div className="budget-item">
              <span className="budget-label">Budget</span>
              <span className="budget-value">$5.00 USD</span>
            </div>

            <div className="budget-item">
              <span className="budget-label">Daily total budget</span>
              <span className="budget-value">$5.00 USD</span>
            </div>

            <div className="billing-info">
              <p>
                We use data about you and your ad account to provide you with ads billing and spending options.{' '}
                <a href="#" className="learn-more-link">Learn more</a>
              </p>
            </div>
          </div>

          {/* Ad Preview */}
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