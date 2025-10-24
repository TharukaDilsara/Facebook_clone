import React, { useState } from 'react';
import './games.css';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BarChartIcon from '@mui/icons-material/BarChart';

const Games = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const gameCategories = [
    'All', 'Action', 'Adventure', 'Arcade', 'Board', 'Card', 'Casino', 
    'Educational', 'Family', 'Music', 'Puzzle', 'Racing', 'Role Playing', 
    'Simulation', 'Sports', 'Strategy', 'Trivia', 'Word'
  ];

  const recentlyPlayed = [
    {
      id: 1,
      name: 'Magic Swap Puzzle',
      image: '/Images/magic-swap.jpg',
      category: 'Puzzle'
    }
  ];

  const moreGames = [
    {
      id: 2,
      name: 'Magic Puzzle',
      image: '/Images/magic-puzzle.jpg',
      category: 'Puzzle'
    },
    {
      id: 3,
      name: 'JigsawMe',
      image: '/Images/jigsaw-me.jpg',
      category: 'Puzzle'
    },
    {
      id: 4,
      name: 'HAHA Swap',
      image: '/Images/haha-swap.jpg',
      category: 'Puzzle'
    },
    {
      id: 5,
      name: 'AI Avatar Swap',
      image: '/Images/ai-avatar.jpg',
      category: 'Puzzle'
    },
    {
      id: 6,
      name: 'Bubble Shooter',
      image: '/Images/bubble-shooter.jpg',
      category: 'Puzzle'
    },
    {
      id: 7,
      name: 'Ludo Club',
      image: '/Images/ludo-club.jpg',
      category: 'Board'
    }
  ];

  const topPicks = [
    {
      id: 8,
      name: 'Candy Crush Saga',
      image: '/Images/candy-crush.jpg',
      category: 'Puzzle',
      rating: 4.5
    },
    {
      id: 9,
      name: 'Words With Friends',
      image: '/Images/words-friends.jpg',
      category: 'Word',
      rating: 4.3
    },
    {
      id: 10,
      name: 'Solitaire',
      image: '/Images/solitaire.jpg',
      category: 'Card',
      rating: 4.7
    }
  ];

  const handleGameClick = (game) => {
    console.log(`Playing ${game.name}`);
  };

  return (
    <div className="games-container">
      {/* Left Sidebar */}
      <div className="games-sidebar">
        <div className="games-sidebar-header">
          <h1>Games</h1>
          <SettingsIcon className="settings-icon" />
        </div>

        <div className="games-search">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search games"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="games-menu">
          <div className="games-menu-item active">
            <SportsEsportsIcon className="menu-icon" />
            <span>Play games</span>
          </div>
          <div className="games-menu-item">
            <BarChartIcon className="menu-icon" />
            <span>Gaming Activity</span>
          </div>
          <div className="games-menu-item">
            <NotificationsIcon className="menu-icon" />
            <span>Notifications</span>
          </div>
        </div>

        <div className="your-games-section">
          <h3>Your games</h3>
          <p className="games-subtitle">Save a game to Your games to create a shortcut for it here.</p>
          <div className="games-menu-item">
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
      <div className="games-main-content">
        {/* Recently Played Section */}
        <section className="games-section">
          <h2>Recently played</h2>
          <div className="games-grid recently-played">
            {recentlyPlayed.map((game) => (
              <div key={game.id} className="game-card recently-played-card" onClick={() => handleGameClick(game)}>
                <div className="game-image-container">
                  <div className="game-image-placeholder purple-gradient">
                    <span className="game-title">{game.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* More Games Like Section */}
        <section className="games-section">
          <h2>More games like Magic Swap Puzzle</h2>
          <div className="games-grid">
            {moreGames.map((game) => (
              <div key={game.id} className="game-card" onClick={() => handleGameClick(game)}>
                <div className="game-image-container">
                  <div className="game-image-placeholder">
                    {game.id === 2 && <div className="magic-puzzle-bg"></div>}
                    {game.id === 3 && <div className="jigsaw-bg"></div>}
                    {game.id === 4 && <div className="haha-swap-bg"></div>}
                    {game.id === 5 && <div className="ai-avatar-bg"></div>}
                    {game.id === 6 && <div className="bubble-shooter-bg"></div>}
                    {game.id === 7 && <div className="ludo-club-bg"></div>}
                  </div>
                </div>
                <div className="game-info">
                  <h4>{game.name}</h4>
                  <span className="game-category">{game.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Picks Section */}
        <section className="games-section">
          <h2>Top picks for you</h2>
          <div className="games-grid">
            {topPicks.map((game) => (
              <div key={game.id} className="game-card" onClick={() => handleGameClick(game)}>
                <div className="game-image-container">
                  <div className="game-image-placeholder">
                    {game.id === 8 && <div className="candy-crush-bg"></div>}
                    {game.id === 9 && <div className="words-friends-bg"></div>}
                    {game.id === 10 && <div className="solitaire-bg"></div>}
                  </div>
                </div>
                <div className="game-info">
                  <h4>{game.name}</h4>
                  <span className="game-category">{game.category}</span>
                  <div className="game-rating">
                    <span>★ {game.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Games;