import React from 'react';
import './sponsoredAds.css';

const SponsoredAds = () => {
  // Mock data for sponsored ads
  const sponsoredAds = [
    {
      id: 1,
      title: 'Summer Sale - 50% Off',
      description: 'Get amazing deals on summer clothes. Limited time offer!',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop',
      sponsor: 'Fashion Store',
      url: '#'
    },
    {
      id: 2,
      title: 'Learn Web Development',
      description: 'Master React, Node.js and more with our online courses.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=200&h=200&fit=crop',
      sponsor: 'TechAcademy',
      url: '#'
    }
  ];

  return (
    <div className="sponsored-ads">
      <div className="sponsored-ads-header">
        <h3>Sponsored</h3>
      </div>
      <div className="ads-list">
        {sponsoredAds.map(ad => (
          <div key={ad.id} className="ad-item">
            <div className="ad-image">
              <img src={ad.image} alt={ad.title} />
            </div>
            <div className="ad-content">
              <h4 className="ad-title">{ad.title}</h4>
              <p className="ad-description">{ad.description}</p>
              <span className="ad-sponsor">{ad.sponsor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsoredAds;