import React, { useState } from 'react';
import './createAudienceModal.css';

export default function CreateAudienceModal({ isOpen, onClose, onSave }) {
  const [audienceName, setAudienceName] = useState('');
  const [advantageOn, setAdvantageOn] = useState(true);
  const [gender, setGender] = useState('all');
  const [ageRange, setAgeRange] = useState([18, 65]);

  const handleSave = () => {
    const payload = {
      name: audienceName || 'New audience',
      advantageOn,
      gender,
      ageRange,
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
            <label className="cam-label">Gender</label>
            <div className="cam-options">
              <label><input type="radio" name="cam-gender" checked={gender === 'all'} onChange={() => setGender('all')} /> All</label>
              <label><input type="radio" name="cam-gender" checked={gender === 'men'} onChange={() => setGender('men')} /> Men</label>
              <label><input type="radio" name="cam-gender" checked={gender === 'women'} onChange={() => setGender('women')} /> Women</label>
            </div>
          </div>

          <div className="cam-section">
            <label className="cam-label">Age range</label>
            <div className="cam-age">
              <input
                type="number"
                min="13"
                max="120"
                value={ageRange[0]}
                onChange={(e) => setAgeRange([Math.max(13, Number(e.target.value)), ageRange[1]])}
                className="cam-age-input"
              />
              <span className="cam-age-sep">—</span>
              <input
                type="number"
                min="13"
                max="120"
                value={ageRange[1]}
                onChange={(e) => setAgeRange([ageRange[0], Math.min(120, Number(e.target.value))])}
                className="cam-age-input"
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
