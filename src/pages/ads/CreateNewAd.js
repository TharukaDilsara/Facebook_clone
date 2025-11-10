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
  const [selectedTargeting, setSelectedTargeting] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('continuous');
  const [country, setCountry] = useState('LK, USD');
  const [budget, setBudget] = useState(5.00);
  const [advantagePlacements, setAdvantagePlacements] = useState(true);

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

  const handleCreateNew = () => {
    console.log('Create new clicked');
  };

  const handleEditAudience = () => {
    console.log('Edit audience clicked');
  };

  const handleChangeCurrency = () => {
    console.log('Change currency clicked');
  };

  const handleEditBudget = () => {
    console.log('Edit budget clicked');
  };

  const handleBudgetChange = (event) => {
    setBudget(parseFloat(event.target.value));
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
            
            {/* Audience Details */}
            <div className="audience-details-section">
              <div className="audience-details-header">
                <div>
                  <h4>Audience details</h4>
                  <InfoIcon className="info-icon-small" />
                </div>
                <button className="edit-button" onClick={handleEditAudience}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474L8.5 11.06l-3.33.886.886-3.33L11.013 1.427z" fill="currentColor"/>
                    <path d="M1.75 13.25a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H1.75z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
              
              <div className="audience-details-content">
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">Sri Lanka</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Minimum age:</span>
                  <span className="detail-value">18</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Advantage+ audience:</span>
                  <span className="detail-value">On</span>
                </div>
              </div>
            </div>

            {/* Targeting Options */}
            <div className="targeting-options">
              <div 
                className={`targeting-option ${selectedTargeting === 'targeting' ? 'selected' : ''}`}
                onClick={() => setSelectedTargeting('targeting')}
              >
                <div className="radio-button">
                  <div className="radio-inner"></div>
                </div>
                <span className="targeting-label">People you choose through targeting</span>
              </div>

              <div 
                className={`targeting-option ${selectedTargeting === 'followers' ? 'selected' : ''}`}
                onClick={() => setSelectedTargeting('followers')}
              >
                <div className="radio-button">
                  <div className="radio-inner"></div>
                </div>
                <span className="targeting-label">People who follow your profile</span>
              </div>

              <div 
                className={`targeting-option ${selectedTargeting === 'similar' ? 'selected' : ''}`}
                onClick={() => setSelectedTargeting('similar')}
              >
                <div className="radio-button">
                  <div className="radio-inner"></div>
                </div>
                <span className="targeting-label">People who follow your profile and people similar to them</span>
              </div>
            </div>

            {/* Create New Button */}
            <button className="create-new-button" onClick={handleCreateNew}>
              Create new
            </button>
            
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

          {/* Ad Transparency Section */}
          <div className="ad-transparency-section">
            <h3>Ad transparency</h3>
            <p>
              Let your audience know who benefits from and pays for this ad. This information may be displayed publicly on ads and in{' '}
              <a href="#" className="meta-ad-library-link">Meta's Ad Library</a> when the ads are running or longer in some cases.
            </p>
          </div>

          {/* Duration Section */}
          <div className="duration-section">
            <div className="section-title">
              <h3>Duration</h3>
              <InfoIcon className="info-icon" />
            </div>
            
            <div className="duration-info">
              <div className="info-header">
                <div className="info-icon-blue">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="#1877F2"/>
                    <path d="M8 4v4l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="info-text">This ad will run continuously on a daily budget</span>
                <button className="close-info">×</button>
              </div>
              <p className="info-description">
                Running an ad continuously can help improve performance by giving it more time to reach people likely to respond. If you prefer, you can set an end date instead.
              </p>
            </div>

            <div className="duration-options">
              <div 
                className={`duration-option ${selectedDuration === 'continuous' ? 'selected' : ''}`}
                onClick={() => setSelectedDuration('continuous')}
              >
                <div className="radio-button">
                  <div className="radio-inner"></div>
                </div>
                <div className="duration-content">
                  <h4>Run this ad continuously</h4>
                  <p>Your ad will continue to run on a daily budget unless you pause it, which you can do at any time.</p>
                </div>
              </div>

              <div 
                className={`duration-option ${selectedDuration === 'end-date' ? 'selected' : ''}`}
                onClick={() => setSelectedDuration('end-date')}
              >
                <div className="radio-button">
                  <div className="radio-inner"></div>
                </div>
                <div className="duration-content">
                  <h4>Choose when this ad will end</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Budget Section */}
          <div className="daily-budget-section">
            <div className="section-title">
              <h3>Daily budget</h3>
              <InfoIcon className="info-icon" />
            </div>

            <div className="currency-selector">
              <div className="currency-info">
                <span className="currency-label">Country, currency</span>
                <span className="currency-value">{country}</span>
              </div>
              <button className="change-button" onClick={handleChangeCurrency}>
                Change
              </button>
            </div>

            {/* Budget Input and Slider */}
            <div className="budget-input-section">
              <div className="budget-display">
                <span className="currency-symbol">$</span>
                <span className="budget-amount">{budget.toFixed(2)}</span>
                <button className="edit-budget-btn" onClick={handleEditBudget}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474L8.5 11.06l-3.33.886.886-3.33L11.013 1.427z" fill="currentColor"/>
                    <path d="M1.75 13.25a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H1.75z" fill="currentColor"/>
                  </svg>
                </button>
              </div>

              <div className="budget-slider-container">
                <span className="slider-min">$2.00</span>
                <div className="slider-wrapper">
                  <input
                    type="range"
                    min="2"
                    max="500"
                    step="0.01"
                    value={budget}
                    onChange={handleBudgetChange}
                    className="budget-slider"
                  />
                </div>
                <span className="slider-max">$500.00</span>
              </div>
            </div>
          </div>

          {/* Placements Section */}
          <div className="placements-section">
            <div className="section-title">
              <h3>Placements</h3>
              <InfoIcon className="info-icon" />
            </div>

            <div className="placements-content">
              <div className="placement-header">
                <div className="placement-info">
                  <span className="recommended-tag">Recommended</span>
                  <div className="placement-title">
                    <span>Advantage+ placements</span>
                    <InfoIcon className="info-icon-small" />
                  </div>
                </div>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="advantage-placements"
                    checked={advantagePlacements}
                    onChange={(e) => setAdvantagePlacements(e.target.checked)}
                  />
                  <label htmlFor="advantage-placements" className="toggle-label">
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              
              <p className="placement-description">
                Let us maximise your budget across Facebook, Messenger, Instagram and Meta Audience Network to help show your ad to more people.
              </p>
            </div>
          </div>

          {/* Bottom Summary */}
          <div className="bottom-summary">
            <p>
              Estimated 7.2K-20.8K <a href="#" className="accounts-centre-link">Accounts Centre accounts</a> reached per day
            </p>
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