import React, { useState } from 'react';
import './createAudienceModal.css';

export default function CreateAudienceModal({ isOpen, onClose, onSave }) {
  const [audienceName, setAudienceName] = useState('');
  const [advantageOn, setAdvantageOn] = useState(true);
  const [gender, setGender] = useState('all');
  const [ageRange, setAgeRange] = useState([18, 65]);
  const [locations, setLocations] = useState('');
  const [detailedTargeting, setDetailedTargeting] = useState('');

  const handleSave = () => {
    const payload = {
      name: audienceName || 'New audience',
      advantageOn,
      gender,
      ageRange,
      locations,
      detailedTargeting,
    };
    if (onSave) onSave(payload);
  };

  if (!isOpen) return null;

  return (
    <div className="create-audience-overlay" role="dialog" aria-modal="true">
      <div className="create-audience-modal">
        <div className="cam-header">
          <h2>Create audience</h2>
          <button className="cam-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="cam-body">
          <label className="cam-label">Audience name</label>
          <input
            className="cam-input"
            value={audienceName}
            onChange={(e) => setAudienceName(e.target.value)}
            placeholder="e.g. People who like my page"
          />

          <div className="cam-row">
            <div>
              <label className="cam-label">Advantage+</label>
              <div className="cam-sub">Allow Meta to automatically broaden your targeting to improve performance.</div>
            </div>
            <div>
              <input
                id="cam-advantage"
                type="checkbox"
                checked={advantageOn}
                onChange={(e) => setAdvantageOn(e.target.checked)}
              />
            </div>
          </div>

          <div className="cam-section">
            <div className="cam-label-with-info">
              <label className="cam-label">Gender</label>
              <span className="cam-info-icon">ⓘ</span>
            </div>
            <div className="cam-gender-cards">
              <button 
                type="button"
                className={`cam-gender-card ${gender === 'all' ? 'selected' : ''}`} 
                onClick={() => setGender('all')}
              >
                All
              </button>
              <button 
                type="button"
                className={`cam-gender-card ${gender === 'men' ? 'selected' : ''}`} 
                onClick={() => setGender('men')}
              >
                Men
              </button>
              <button 
                type="button"
                className={`cam-gender-card ${gender === 'women' ? 'selected' : ''}`} 
                onClick={() => setGender('women')}
              >
                Women
              </button>
            </div>
          </div>

          <div className="cam-section">
            <div className="cam-label-with-info">
              <label className="cam-label">Age</label>
              <span className="cam-info-icon">ⓘ</span>
            </div>
            <div className="cam-age-slider">
              <div className="cam-age-controls">
                <span className="cam-age-value">{ageRange[0]}</span>
                <div className="cam-slider-container">
                  <input
                    type="range"
                    min="18"
                    max="65"
                    value={ageRange[0]}
                    onChange={(e) => setAgeRange([Number(e.target.value), Math.max(Number(e.target.value), ageRange[1])])}
                    className="cam-slider cam-slider-min"
                  />
                  <input
                    type="range"
                    min="18"
                    max="65"
                    value={ageRange[1]}
                    onChange={(e) => setAgeRange([ageRange[0], Math.max(ageRange[0], Number(e.target.value))])}
                    className="cam-slider cam-slider-max"
                  />
                </div>
                <span className="cam-age-value">{ageRange[1] === 65 ? '65+' : ageRange[1]}</span>
              </div>
              <p className="cam-age-note">
                When using audience targeting such as gender or interests, you can only target people over the age of 18. <a href="#" className="cam-link">Learn more</a>
              </p>
            </div>
          </div>

          <div className="cam-section">
            <div className="cam-label-with-info">
              <label className="cam-label">Locations</label>
              <span className="cam-info-icon">ⓘ</span>
            </div>
            <div className="cam-locations-input">
              <input
                className="cam-input"
                value={locations}
                onChange={(e) => setLocations(e.target.value)}
                placeholder="Enter locations..."
              />
            </div>
          </div>

          <div className="cam-section">
            <div className="cam-label-with-info">
              <label className="cam-label">Detailed targeting</label>
              <span className="cam-info-icon">ⓘ</span>
            </div>
            <div className="cam-detailed-targeting">
              <input
                className="cam-input"
                value={detailedTargeting}
                onChange={(e) => setDetailedTargeting(e.target.value)}
                placeholder="Add demographics, interests or behaviors..."
              />
            </div>
          </div>
        </div>

        <div className="cam-footer">
          <button className="cam-cancel" onClick={onClose}>Cancel</button>
          <button className="cam-save" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
