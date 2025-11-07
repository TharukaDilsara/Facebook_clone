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

            {/* Messaging and Video Calling Section */}
            <div className="messaging-section">
              <div className="messaging-content">
                <h3>Messaging and video calling made just for kids</h3>
                <p>
                  Kid-friendly filters, reactions and sound effects make video chats with friends and family even better.
                </p>
              </div>
              <div className="messaging-visual">
                <div className="video-chat-demo">
                  <div className="chat-effects">
                    <span className="effect-emoji">😂</span>
                    <span className="effect-emoji">🎮</span>
                    <span className="effect-emoji">😱</span>
                    <span className="effect-emoji">💜</span>
                  </div>
                  <div className="colorful-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                    <div className="shape shape-5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kids Device Section */}
            <div className="device-section">
              <div className="device-visual">
                <div className="kids-photos">
                  <img src="/Images/1.png" alt="Happy child 1" className="kid-photo photo-1" />
                  <img src="/Images/2.png" alt="Happy child 2" className="kid-photo photo-2" />
                  <img src="/Images/1.png" alt="Happy child 3" className="kid-photo photo-3" />
                </div>
              </div>
              <div className="device-content">
                <h3>Kids use the app on their own device</h3>
                <p>
                  You can chat with your child directly from your Messenger app.
                </p>
                {/* App Icons */}
                <div className="app-icons">
                  <div className="app-icon messenger-icon">
                    <ChatIcon className="icon" />
                  </div>
                  <div className="app-icon messenger-kids-icon">
                    <div className="kids-icon-bg">
                      <span className="kids-icon-text">👶</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Create Account Section */}
          <div className="create-account-section">
            <h2>Create a Messenger Kids account for your child</h2>
            <button className="create-account-main-btn" onClick={handleCreateAccount}>
              Create Account
            </button>
            <p className="disclaimer-text">
              This won't create a Facebook profile for your child.
            </p>
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