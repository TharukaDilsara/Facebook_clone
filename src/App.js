import React, { useState } from 'react';
import Home from "./pages/home/Home";
import NavBar from "./components/Navigation/NavBar";
import VideoPage from "./components/Navigation/VideoPage/VideoPage";
import Marketplace from "./components/Navigation/Marketplace/Marketplace";
import MarketplacePage from "./pages/marketplace/MarketplacePage";
import MarketplaceNotifications from "./pages/marketplace/MarketplaceNotifications";
import MarketplaceInbox from "./pages/marketplace/MarketplaceInbox";
import MarketplaceAccess from "./pages/marketplace/MarketplaceAccess";
import MarketplaceBuying from "./pages/marketplace/MarketplaceBuying";
import CreateNewListing from "./pages/marketplace/CreateNewListing";
import Groups from "./pages/groups/Groups";
import Memories from "./pages/memories/Memories";
import Events from "./pages/events/Events";
import Friends from "./pages/friends/Friends";
import Feeds from "./pages/feeds/Feeds";
import Games from "./pages/games/Games";
import GamingNotifications from "./pages/games/GamingNotifications";
import GamingActivity from "./pages/games/GamingActivity";
import OrdersAndPayments from "./pages/orders/OrdersAndPayments";
import RecurringPayments from "./pages/orders/RecurringPayments";
import OrdersActivity from "./pages/orders/OrdersActivity";
import OrdersSettings from "./pages/orders/OrdersSettings";
import OrdersHelp from "./pages/orders/OrdersHelp";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'video':
        return <VideoPage isOpen={true} onClose={() => setCurrentPage('home')} />;
      case 'marketplace':
        return <MarketplacePage setCurrentPage={setCurrentPage} />;
      case 'marketplace-notifications':
        return <MarketplaceNotifications setCurrentPage={setCurrentPage} />;
      case 'marketplace-inbox':
        return <MarketplaceInbox setCurrentPage={setCurrentPage} />;
      case 'marketplace-access':
        return <MarketplaceAccess setCurrentPage={setCurrentPage} />;
      case 'marketplace-buying':
        return <MarketplaceBuying setCurrentPage={setCurrentPage} />;
      case 'create-new-listing':
        return <CreateNewListing setCurrentPage={setCurrentPage} />;
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
      case 'orders':
        return <OrdersAndPayments setCurrentPage={setCurrentPage} />;
      case 'orders-activity':
        return <OrdersActivity setCurrentPage={setCurrentPage} />;
      case 'recurring-payments':
        return <RecurringPayments setCurrentPage={setCurrentPage} />;
      case 'orders-settings':
        return <OrdersSettings setCurrentPage={setCurrentPage} />;
      case 'orders-help':
        return <OrdersHelp setCurrentPage={setCurrentPage} />;
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
