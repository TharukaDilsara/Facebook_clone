import React, { useState } from 'react'
import "./LeftPane.css"
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import EventIcon from '@mui/icons-material/Event';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ChatIcon from '@mui/icons-material/Chat';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import PaymentIcon from '@mui/icons-material/Payment';
import PagesIcon from '@mui/icons-material/Pages';
import ExtensionIcon from '@mui/icons-material/Extension';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function LeftPane({ setCurrentPage }) {
  const [showMore, setShowMore] = useState(false);
  
  const handleMenuClick = (menuItem) => {
    console.log(`Clicked on ${menuItem}`);
    if (setCurrentPage && (menuItem === 'memories' || menuItem === 'groups' || menuItem === 'events' || menuItem === 'friends' || menuItem === 'feeds' || menuItem === 'games' || menuItem === 'orders')) {
      if (menuItem === 'playGames') {
        setCurrentPage('games');
      } else {
        setCurrentPage(menuItem);
      }
    }
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='leftPaneBox'>
      <div className='leftPaneContainer'>
        <div className="leftPaneMenu">
          
          {/* User Profile */}
          <div className="leftPaneMenuItem" onClick={() => handleMenuClick('profile')}>
            <img 
              src="/Images/1.png" 
              alt="Tharuka Dilsara" 
              className="userProfilePic" 
            />
            <span className="leftPaneMenuText">Tharuka Dilsara</span>
          </div>

          {/* Meta AI */}
          <div className="leftPaneMenuItem" onClick={() => handleMenuClick('metaAI')}>
            <div className="metaAiIcon">
              <SmartToyIcon className='leftPaneMenuIcon metaIcon'></SmartToyIcon>
            </div>
            <span className="leftPaneMenuText">Meta AI</span>
          </div>

          {/* Friends */}
          <div className="leftPaneMenuItem" onClick={() => handleMenuClick('friends')}>
            <PeopleIcon className='leftPaneMenuIcon friendsIcon'></PeopleIcon>
            <span className="leftPaneMenuText">Friends</span>
          </div>

          {/* Professional dashboard */}
          <div className="leftPaneMenuItem" onClick={() => handleMenuClick('professional')}>
            <BarChartIcon className='leftPaneMenuIcon professionalIcon'></BarChartIcon>
            <span className="leftPaneMenuText">Professional dashboard</span>
          </div>

          {/* Feeds */}
          <div className="leftPaneMenuItem" onClick={() => handleMenuClick('feeds')}>
            <RssFeedIcon className='leftPaneMenuIcon feedsIcon'></RssFeedIcon>
            <span className="leftPaneMenuText">Feeds</span>
          </div>

          {/* Groups */}
          <div className="leftPaneMenuItem" onClick={() => handleMenuClick('groups')}>
            <GroupIcon className='leftPaneMenuIcon groupsIcon'></GroupIcon>
            <span className="leftPaneMenuText">Groups</span>
          </div>

          {/* Marketplace */}
          <div className="leftPaneMenuItem" onClick={() => handleMenuClick('marketplace')}>
            <StorefrontIcon className='leftPaneMenuIcon marketplaceIcon'></StorefrontIcon>
            <span className="leftPaneMenuText">Marketplace</span>
          </div>

          {/* Video */}
          <div className="leftPaneMenuItem" onClick={() => handleMenuClick('video')}>
            <OndemandVideoIcon className='leftPaneMenuIcon videoIcon'></OndemandVideoIcon>
            <span className="leftPaneMenuText">Video</span>
          </div>

          {/* Memories */}
          <div className="leftPaneMenuItem" onClick={() => handleMenuClick('memories')}>
            <PhotoAlbumIcon className='leftPaneMenuIcon memoriesIcon'></PhotoAlbumIcon>
            <span className="leftPaneMenuText">Memories</span>
          </div>

          {/* Expandable Menu Items */}
          {showMore && (
            <div className="expandedMenuItems">
              {/* Ad Centre */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('adCentre')}>
                <CampaignIcon className='leftPaneMenuIcon adCentreIcon'></CampaignIcon>
                <span className="leftPaneMenuText">Ad Centre</span>
              </div>

              {/* Ads Manager */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('adsManager')}>
                <TrendingUpIcon className='leftPaneMenuIcon adsManagerIcon'></TrendingUpIcon>
                <span className="leftPaneMenuText">Ads Manager</span>
              </div>

              {/* Birthdays */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('birthdays')}>
                <CardGiftcardIcon className='leftPaneMenuIcon birthdaysIcon'></CardGiftcardIcon>
                <span className="leftPaneMenuText">Birthdays</span>
              </div>

              {/* Chat with AIs */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('chatAIs')}>
                <SupportAgentIcon className='leftPaneMenuIcon chatAIsIcon'></SupportAgentIcon>
                <span className="leftPaneMenuText">Chat with AIs</span>
              </div>

              {/* Crisis Response */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('crisisResponse')}>
                <ReportProblemIcon className='leftPaneMenuIcon crisisIcon'></ReportProblemIcon>
                <span className="leftPaneMenuText">Crisis Response</span>
              </div>

              {/* Events */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('events')}>
                <EventIcon className='leftPaneMenuIcon eventsIcon'></EventIcon>
                <span className="leftPaneMenuText">Events</span>
              </div>

              {/* Gaming video */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('gamingVideo')}>
                <SportsEsportsIcon className='leftPaneMenuIcon gamingIcon'></SportsEsportsIcon>
                <span className="leftPaneMenuText">Gaming video</span>
              </div>

              {/* Messenger */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('messenger')}>
                <ChatIcon className='leftPaneMenuIcon messengerIcon'></ChatIcon>
                <span className="leftPaneMenuText">Messenger</span>
              </div>

              {/* Messenger Kids */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('messengerKids')}>
                <ChildFriendlyIcon className='leftPaneMenuIcon messengerKidsIcon'></ChildFriendlyIcon>
                <span className="leftPaneMenuText">Messenger Kids</span>
              </div>

              {/* Orders and payments */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('orders')}>
                <PaymentIcon className='leftPaneMenuIcon ordersIcon'></PaymentIcon>
                <span className="leftPaneMenuText">Orders and payments</span>
              </div>

              {/* Pages */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('pages')}>
                <PagesIcon className='leftPaneMenuIcon pagesIcon'></PagesIcon>
                <span className="leftPaneMenuText">Pages</span>
              </div>

              {/* Play games */}
              <div className="leftPaneMenuItem" onClick={() => setCurrentPage && setCurrentPage('games')}>
                <ExtensionIcon className='leftPaneMenuIcon playGamesIcon'></ExtensionIcon>
                <span className="leftPaneMenuText">Play games</span>
              </div>

              {/* Recent ad activity */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('recentAds')}>
                <AssessmentIcon className='leftPaneMenuIcon recentAdsIcon'></AssessmentIcon>
                <span className="leftPaneMenuText">Recent ad activity</span>
              </div>

              {/* Saved */}
              <div className="leftPaneMenuItem" onClick={() => handleMenuClick('saved')}>
                <BookmarkIcon className='leftPaneMenuIcon savedIcon'></BookmarkIcon>
                <span className="leftPaneMenuText">Saved</span>
              </div>
            </div>
          )}

          {/* See More / See Less Toggle */}
          <div className="leftPaneMenuItem seeMore" onClick={toggleShowMore}>
            <div className="seeMoreIcon">
              {showMore ? 
                <ExpandLessIcon className='leftPaneMenuIcon'></ExpandLessIcon> :
                <ExpandMoreIcon className='leftPaneMenuIcon'></ExpandMoreIcon>
              }
            </div>
            <span className="leftPaneMenuText">{showMore ? 'See less' : 'See more'}</span>
          </div>

        </div>
      </div>
    </div>
  )
}
