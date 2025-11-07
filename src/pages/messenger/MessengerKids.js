import React from 'react';
import './messengerKids.css';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';

export default function MessengerKids({ setCurrentPage }) {
  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleCreateAccount = () => {
    console.log('Create Account for Child clicked');
    // You can add navigation to create account page here
  };

  const handleChatFromMessenger = () => {
    console.log('Chat From Messenger clicked');
    // You can add navigation to messenger chat here
  };

  return (
    <div className="messenger-kids-container">
      {/* Header */}
      <div className="messenger-kids-header">
        <button className="back-button" onClick={handleBackToHome}>
          ← Back
        </button>
        <h1 className="page-title">Messenger Kids</h1>
      </div>

      {/* Main Content */}
      <div className="messenger-kids-content">
        {/* Left Sidebar */}
        <div className="messenger-kids-sidebar">
          <div className="sidebar-section">
            <h2>Create an account for my child</h2>
            <p>
              You can create a Messenger Kids account for your child and manage it from your Facebook account in the parent dashboard.
            </p>
            <button className="create-account-btn" onClick={handleCreateAccount}>
              <AddIcon className="btn-icon" />
              Create Account for Child
            </button>
          </div>

          <div className="sidebar-section">
            <h2>Connect with a child through Messenger</h2>
            <p>
              Children can chat with family and friends who use Messenger. Just ask the child's parent to add you as a friend for their child.
            </p>
            <button className="chat-messenger-btn" onClick={handleChatFromMessenger}>
              <ChatIcon className="btn-icon" />
              Chat From Messenger
            </button>
          </div>

          <div className="sidebar-footer">
            <a href="#" className="footer-link">Privacy Policy</a>
            <span> • </span>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="messenger-kids-main">
          {/* Video Section */}
          <div className="video-section">
            <div className="messenger-kids-logo">
              <div className="logo-circle">
                <span className="logo-text">📱</span>
              </div>
              <h2>Messenger Kids</h2>
            </div>
            
            <div className="video-player">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <div className="video-controls">
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                  <div className="video-time">0:34 / 0:34</div>
                  <div className="video-buttons">
                    <button className="video-btn">⚙️</button>
                    <button className="video-btn">📺</button>
                    <button className="video-btn">🔊</button>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="tagline">Made for kids. Controlled by parents.</h3>
          </div>

          {/* Features Section */}
          <div className="features-section">
            <div className="feature-item">
              <div className="feature-icon">
                <div className="friend-avatars">
                  <img src="/Images/1.png" alt="Child" className="avatar child-avatar" />
                  <img src="/Images/2.png" alt="Parent" className="avatar parent-avatar" />
                  <div className="connection-line"></div>
                </div>
              </div>
              <div className="feature-content">
                <h3>You manage your child's friends</h3>
                <p>
                  Decide which family members and close friends your child can talk to.
                </p>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="download-section">
            <h3>Download the Messenger Kids app on your child's tablet or phone.</h3>
            <div className="download-buttons">
              <a href="#" className="download-btn google-play">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" />
              </a>
              <a href="#" className="download-btn app-store">
                <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on the App Store" />
              </a>
              <a href="#" className="download-btn amazon">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/devportal2/res/images/amazon-appstore-badge-english-black.png" alt="Available at Amazon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}