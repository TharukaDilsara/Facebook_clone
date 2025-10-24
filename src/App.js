import React, { useState } from 'react';
import Home from "./pages/home/Home";
import NavBar from "./components/Navigation/NavBar";
import VideoPage from "./components/Navigation/VideoPage/VideoPage";
import Marketplace from "./components/Navigation/Marketplace/Marketplace";
import Groups from "./pages/groups/Groups";
import Memories from "./pages/memories/Memories";
import Events from "./pages/events/Events";
import Friends from "./pages/friends/Friends";
import Feeds from "./pages/feeds/Feeds";
import Games from "./pages/games/Games";
import GamingNotifications from "./pages/games/GamingNotifications";
import GamingActivity from "./pages/games/GamingActivity";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'video':
        return <VideoPage isOpen={true} onClose={() => setCurrentPage('home')} />;
      case 'marketplace':
        return <Marketplace isOpen={true} onClose={() => setCurrentPage('home')} />;
      case 'groups':
        return <Groups isOpen={true} onClose={() => setCurrentPage('home')} />;
      case 'memories':
        return <Memories setCurrentPage={setCurrentPage} />;
      case 'events':
        return <Events setCurrentPage={setCurrentPage} />;
      case 'friends':
        return <Friends setCurrentPage={setCurrentPage} />;
      case 'feeds':
        return <Feeds setCurrentPage={setCurrentPage} />;
      case 'games':
        return <Games setCurrentPage={setCurrentPage} />;
      case 'gaming-notifications':
        return <GamingNotifications setCurrentPage={setCurrentPage} />;
      case 'gaming-activity':
        return <GamingActivity setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
    </div>
  );
}

export default App;
