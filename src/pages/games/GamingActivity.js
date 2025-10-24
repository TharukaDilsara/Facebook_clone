import React, { useState } from 'react';
import './gamingActivity.css';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BarChartIcon from '@mui/icons-material/BarChart';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShareIcon from '@mui/icons-material/Share';

const GamingActivity = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const gameCategories = [
    'All', 'Action', 'Adventure', 'Arcade', 'Board', 'Card', 'Casino', 
    'Educational', 'Family', 'Music', 'Puzzle', 'Racing', 'Role Playing', 
    'Simulation', 'Sports', 'Strategy', 'Trivia', 'Word'
  ];

  const suggestedGames = [
    {
      id: 1,
      name: '2 Player Battle',
      developer: 'puzzle joy',
      players: '156K players',
      image: '/Images/2-player-battle.svg',
      category: 'Hyper-Casual'
    },
    {
      id: 2,
      name: '2020 Connect',
      developer: 'SOFTGAMES',
      players: '34K players',
      image: '/Images/2020-connect.svg',
      category: 'Puzzle'
    },
    {
      id: 3,
      name: '2048 Charm',
      developer: 'PuzzleJoy',
      players: '',
      image: '/Images/2048-charm.svg',
      category: 'Puzzle'
    },
    {
      id: 4,
      name: '4 Pics 1 Word',
      developer: 'LOTUM GmbH',
      players: '165K players',
      image: '/Images/4-pics-1-word.svg',
      category: 'Trivia & Word'
    },
    {
      id: 5,
      name: '8 Ball Master',
      developer: 'Game Hollywood Games',
      players: '41K players',
      image: '/Images/8-ball-master.svg',
      category: 'Sports'
    }
  ];

  const handleGameClick = (game) => {
    console.log(`Playing ${game.name}`);
  };

  return (
    <div className="gaming-activity-container">
      {/* Left Sidebar */}
      <div className="gaming-activity-sidebar">
        <div className="gaming-activity-sidebar-header">
          <h1>Games</h1>
          <SettingsIcon className="settings-icon" />
        </div>

        <div className="gaming-activity-search">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search games"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="gaming-activity-menu">
          <div className="gaming-activity-menu-item" onClick={() => setCurrentPage && setCurrentPage('games')}>
            <SportsEsportsIcon className="menu-icon" />
            <span>Play games</span>
          </div>
          <div className="gaming-activity-menu-item active">
            <BarChartIcon className="menu-icon" />
            <span>Gaming Activity</span>
          </div>
          <div className="gaming-activity-menu-item" onClick={() => setCurrentPage && setCurrentPage('gaming-notifications')}>
            <NotificationsIcon className="menu-icon" />
            <span>Notifications</span>
          </div>
        </div>

        <div className="your-games-section">
          <div className="section-header">
            <h3>Your games</h3>
            <span className="see-all">See all</span>
          </div>
          <p className="games-subtitle">Save a game to Your games to create a shortcut for it here.</p>
          <div className="gaming-activity-menu-item">
            <BookmarkIcon className="menu-icon" />
            <span>Save games</span>
          </div>
        </div>

        <div className="categories-section">
          <h3>Categories</h3>
          <div className="categories-grid">
            {gameCategories.map((category) => (
              <div key={category} className="category-item">
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="gaming-activity-main-content">
        {/* Player Profile Section */}
        <div className="player-profile-section">
          <div className="player-info">
            <div className="player-avatar">
              <div className="avatar-circle">T</div>
            </div>
            <div className="player-details">
              <span className="player-label">PLAYER NAME</span>
              <h2 className="player-name">Tharuka</h2>
            </div>
          </div>
          <button className="edit-button">
            <EditIcon className="edit-icon" />
            Edit
          </button>
        </div>

        {/* Suggested Games Section */}
        <section className="suggested-games-section">
          <div className="section-header">
            <h2>Suggested games</h2>
            <span className="see-all-link">See all</span>
          </div>
          
          <div className="games-carousel-container">
            <button className="carousel-nav-button prev">
              <ArrowBackIosIcon />
            </button>
            
            <div className="games-carousel">
              {suggestedGames.map((game) => (
                <div key={game.id} className="suggested-game-card" onClick={() => handleGameClick(game)}>
                  <div className="game-image-container">
                    <img src={game.image} alt={game.name} className="suggested-game-image" />
                    <div className="game-overlay">
                      <button className="play-button">
                        <PlayArrowIcon />
                        Play
                      </button>
                      <button className="share-button">
                        <ShareIcon />
                      </button>
                    </div>
                  </div>
                  <div className="suggested-game-info">
                    <h4>{game.name}</h4>
                    <p className="game-developer">{game.developer}</p>
                    {game.players && <p className="game-players">{game.players}</p>}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="carousel-nav-button next">
              <ArrowForwardIosIcon />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GamingActivity;