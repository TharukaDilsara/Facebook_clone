import React from 'react'
import './appsMenu.css'
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignIcon from '@mui/icons-material/Campaign';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PaymentIcon from '@mui/icons-material/Payment';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ChatIcon from '@mui/icons-material/Chat';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import ListingIcon from '@mui/icons-material/Storefront';
import PostAddIcon from '@mui/icons-material/PostAdd';
import BookIcon from '@mui/icons-material/Book';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import StarIcon from '@mui/icons-material/Star';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupIcon from '@mui/icons-material/Group';

export default function AppsMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const professionalItems = [
    {
      id: 1,
      icon: <BarChartIcon />,
      title: 'Ads Manager',
      description: 'Create, manage and track the performance of your ads.',
      color: '#1877f2'
    },
    {
      id: 2,
      icon: <DashboardIcon />,
      title: 'Professional dashboard',
      description: 'Get insights, create ads and explore management tools to help reach your audience.',
      color: '#00a8ff'
    },
    {
      id: 3,
      icon: <CampaignIcon />,
      title: 'Ad Centre',
      description: 'Manage all of the ads that you create in Pages, with streamlined features.',
      color: '#0abde3'
    }
  ];

  const socialItems = [
    {
      id: 1,
      icon: <EventIcon />,
      title: 'Events',
      description: 'Organise or find events and other things to do online and nearby.',
      color: '#ff3838'
    },
    {
      id: 2,
      icon: <PeopleIcon />,
      title: 'Friends',
      description: 'Search for friends or people you may know.',
      color: '#42a5f5'
    },
    {
      id: 3,
      icon: <GroupsIcon />,
      title: 'Groups',
      description: 'Connect with people who share your interests.',
      color: '#0abde3'
    },
    {
      id: 4,
      icon: <DynamicFeedIcon />,
      title: 'News Feed',
      description: 'See relevant posts from people and Pages that you follow.',
      color: '#1877f2'
    },
    {
      id: 5,
      icon: <RssFeedIcon />,
      title: 'Feeds',
      description: 'See the most recent posts from your friends, groups, Pages and more.',
      color: '#0abde3'
    },
    {
      id: 6,
      icon: <FlagIcon />,
      title: 'Pages',
      description: 'Discover and connect with businesses on Facebook.',
      color: '#ff6b35'
    }
  ];

  const entertainmentItems = [
    {
      id: 1,
      icon: <SportsEsportsIcon />,
      title: 'Gaming video',
      description: 'Watch and connect with your favourite games and streamers.',
      color: '#42a5f5'
    },
    {
      id: 2,
      icon: <VideogameAssetIcon />,
      title: 'Play games',
      description: 'Play your favourite games.',
      color: '#5c6bc0'
    },
    {
      id: 3,
      icon: <PlayArrowIcon />,
      title: 'Video',
      description: 'A Reels destination personalised to your interests and connections.',
      color: '#26c6da'
    }
  ];

  const shoppingItems = [
    {
      id: 1,
      icon: <PaymentIcon />,
      title: 'Orders and payments',
      description: 'A seamless, secure way to pay in the apps you already use.',
      color: '#3f51b5'
    },
    {
      id: 2,
      icon: <StorefrontIcon />,
      title: 'Marketplace',
      description: 'Buy and sell in your community.',
      color: '#26c6da'
    }
  ];

  const personalItems = [
    {
      id: 1,
      icon: <AdsClickIcon />,
      title: 'Recent ad activity',
      description: 'See all of the ads you\'ve interacted with on Facebook.',
      color: '#42a5f5'
    },
    {
      id: 2,
      icon: <HistoryIcon />,
      title: 'Memories',
      description: 'Browse your old photos, videos and posts on Facebook.',
      color: '#0abde3'
    },
    {
      id: 3,
      icon: <BookmarkIcon />,
      title: 'Saved',
      description: 'Find posts, photos and videos that you\'ve saved for later.',
      color: '#c44569'
    }
  ];

  const communityResourcesItems = [
    {
      id: 1,
      icon: <CrisisAlertIcon />,
      title: 'Crisis Response',
      description: 'Find the latest updates for recent crises happening around the world.',
      color: '#0abde3'
    }
  ];

  const moreFromMetaItems = [
    {
      id: 1,
      icon: <SmartToyIcon />,
      title: 'Meta AI',
      description: 'Ask questions, brainstorm ideas, create any image you can imagine and more.',
      color: '#0084ff'
    },
    {
      id: 2,
      icon: <ChatIcon />,
      title: 'Chat with AIs',
      description: 'Create and discover AIs for fun conversations or help with specific topics.',
      color: '#0084ff'
    },
    {
      id: 3,
      icon: <ChildCareIcon />,
      title: 'Messenger Kids',
      description: 'Let children message close friends and family.',
      color: '#00d4aa'
    },
    {
      id: 4,
      icon: <WhatsAppIcon />,
      title: 'WhatsApp',
      description: 'Message and call people privately on your computer.',
      color: '#25d366'
    },
    {
      id: 5,
      icon: <InstagramIcon />,
      title: 'Instagram',
      description: 'See everyday moments from people that you love.',
      color: '#e4405f'
    }
  ];

  const createItems = [
    {
      id: 1,
      icon: <PostAddIcon />,
      title: 'Post',
      color: '#42a5f5'
    },
    {
      id: 2,
      icon: <BookIcon />,
      title: 'Story',
      color: '#66bb6a'
    },
    {
      id: 3,
      icon: <LiveTvIcon />,
      title: 'Reel',
      color: '#ef5350'
    },
    {
      id: 4,
      icon: <StarIcon />,
      title: 'Life Event',
      color: '#ffa726'
    },
    {
      id: 5,
      icon: <FlagIcon />,
      title: 'Page',
      color: '#26c6da'
    },
    {
      id: 6,
      icon: <CampaignOutlinedIcon />,
      title: 'Ad',
      color: '#ab47bc'
    },
    {
      id: 7,
      icon: <GroupIcon />,
      title: 'Group',
      color: '#5c6bc0'
    },
    {
      id: 8,
      icon: <EventIcon />,
      title: 'Event',
      color: '#ff3838'
    },
    {
      id: 9,
      icon: <ListingIcon />,
      title: 'Marketplace Listing',
      color: '#26c6da'
    }
  ];

  return (
    <div className="appsMenuOverlay" onClick={onClose}>
      <div className="appsMenuContainer" onClick={(e) => e.stopPropagation()}>
        <div className="appsMenuContent">
          {/* Header */}
          <div className="appsMenuHeader">
            <h2 className="appsMenuTitle">Menu</h2>
          </div>

          {/* Search Bar */}
          <div className="appsMenuSearch">
            <SearchIcon className="searchIcon" />
            <input 
              type="text" 
              placeholder="Search menu" 
              className="searchInput"
            />
          </div>

          <div className="appsMenuSections">
            {/* Left Side */}
            <div className="appsMenuLeft">
              {/* Professional Section */}
              <div className="menuSection">
                <h3 className="sectionTitle">Professional</h3>
                <div className="sectionItems">
                  {professionalItems.map((item) => (
                    <div key={item.id} className="menuItem large">
                      <div className="menuItemIcon" style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <div className="menuItemContent">
                        <h4 className="menuItemTitle">{item.title}</h4>
                        <p className="menuItemDescription">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Section */}
              <div className="menuSection">
                <h3 className="sectionTitle">Social</h3>
                <div className="sectionItems">
                  {socialItems.map((item) => (
                    <div key={item.id} className="menuItem large">
                      <div className="menuItemIcon" style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <div className="menuItemContent">
                        <h4 className="menuItemTitle">{item.title}</h4>
                        <p className="menuItemDescription">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Entertainment Section */}
              <div className="menuSection">
                <h3 className="sectionTitle">Entertainment</h3>
                <div className="sectionItems">
                  {entertainmentItems.map((item) => (
                    <div key={item.id} className="menuItem large">
                      <div className="menuItemIcon" style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <div className="menuItemContent">
                        <h4 className="menuItemTitle">{item.title}</h4>
                        <p className="menuItemDescription">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shopping Section */}
              <div className="menuSection">
                <h3 className="sectionTitle">Shopping</h3>
                <div className="sectionItems">
                  {shoppingItems.map((item) => (
                    <div key={item.id} className="menuItem large">
                      <div className="menuItemIcon" style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <div className="menuItemContent">
                        <h4 className="menuItemTitle">{item.title}</h4>
                        <p className="menuItemDescription">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Section */}
              <div className="menuSection">
                <h3 className="sectionTitle">Personal</h3>
                <div className="sectionItems">
                  {personalItems.map((item) => (
                    <div key={item.id} className="menuItem large">
                      <div className="menuItemIcon" style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <div className="menuItemContent">
                        <h4 className="menuItemTitle">{item.title}</h4>
                        <p className="menuItemDescription">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Resources Section */}
              <div className="menuSection">
                <h3 className="sectionTitle">Community resources</h3>
                <div className="sectionItems">
                  {communityResourcesItems.map((item) => (
                    <div key={item.id} className="menuItem large">
                      <div className="menuItemIcon" style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <div className="menuItemContent">
                        <h4 className="menuItemTitle">{item.title}</h4>
                        <p className="menuItemDescription">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* More from Meta Section */}
              <div className="menuSection">
                <h3 className="sectionTitle">More from Meta</h3>
                <div className="sectionItems">
                  {moreFromMetaItems.map((item) => (
                    <div key={item.id} className="menuItem large">
                      <div className="menuItemIcon" style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <div className="menuItemContent">
                        <h4 className="menuItemTitle">{item.title}</h4>
                        <p className="menuItemDescription">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Create Section */}
            <div className="appsMenuRight">
              <div className="menuSection">
                <h3 className="sectionTitle">Create</h3>
                <div className="createGrid">
                  {createItems.map((item) => (
                    <div key={item.id} className="menuItem small">
                      <div className="menuItemIcon" style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <span className="menuItemTitle">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}