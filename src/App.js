import React, { useState } from 'react';
import Home from "./pages/home/Home";
import NavBar from "./components/Navigation/NavBar";
import VideoPage from "./components/Navigation/VideoPage/VideoPage";
import Marketplace from "./components/Navigation/Marketplace/Marketplace";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'video':
        return <VideoPage isOpen={true} onClose={() => setCurrentPage('home')} />;
      case 'marketplace':
        return <Marketplace isOpen={true} onClose={() => setCurrentPage('home')} />;
      case 'home':
      default:
        return <Home />;
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
