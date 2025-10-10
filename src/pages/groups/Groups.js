import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import ExploreIcon from '@mui/icons-material/Explore';
import AddIcon from '@mui/icons-material/Add';
import FeedIcon from '@mui/icons-material/Feed';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import "./groups.css"

export default function Groups({ isOpen, onClose }) {
  if (!isOpen) return null;

  const joinedGroups = [
    {
      id: 1,
      name: "The kota Asylum [ 3 ]",
      lastActive: "15 hours ago",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=50&h=50&fit=crop&crop=faces",
      members: 1234
    },
    {
      id: 2,
      name: "The kota Asylum [3]",
      lastActive: "1 day ago", 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=50&h=50&fit=crop&crop=faces",
      members: 5678
    }
  ];

  const samplePost = {
    id: 1,
    groupName: "kurunegala i phone Club",
    author: "Shaminda Chanaka",
    role: "Admin",
    badge: "Rising contributor",
    timeAgo: "15h",
    content: "Check out these amazing iPhone deals! 📱✨",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1605236453806-b25e316dbdc0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=300&fit=crop"
    ],
    likes: 12,
    comments: 5,
    shares: 2
  };

  return (
    <div className="groupsPageFullScreen">
      <div className="groupsPageContainer">
        {/* Left Sidebar */}
        <div className="groupsSidebar">
          <div className="groupsHeader">
            <h1 className="groupsTitle">Groups</h1>
            <SettingsIcon className="groupsSettingsIcon" />
          </div>

          {/* Search Bar */}
          <div className="groupsSearch">
            <SearchIcon className="searchIcon" />
            <input 
              type="text" 
              placeholder="Search groups" 
              className="searchInput"
            />
          </div>

          {/* Menu Items */}
          <div className="groupsMenu">
            <div className="menuItem active">
              <div className="menuItemLeft">
                <FeedIcon className="menuIcon feedIcon" />
                <span className="menuText">Your feed</span>
              </div>
            </div>

            <div className="menuItem">
              <div className="menuItemLeft">
                <ExploreIcon className="menuIcon" />
                <span className="menuText">Discover</span>
              </div>
            </div>

            <div className="menuItem">
              <div className="menuItemLeft">
                <GroupIcon className="menuIcon" />
                <span className="menuText">Your groups</span>
              </div>
            </div>
          </div>

          {/* Create New Group Button */}
          <button className="createGroupBtn">
            <AddIcon className="addIcon" />
            Create New Group
          </button>

          {/* Groups You've Joined */}
          <div className="joinedGroupsSection">
            <div className="sectionHeader">
              <h3 className="sectionTitle">Groups you've joined</h3>
              <span className="seeAllLink">See all</span>
            </div>
            
            <div className="groupsList">
              {joinedGroups.map((group) => (
                <div key={group.id} className="groupItem">
                  <div className="groupImage">
                    <img src={group.image} alt={group.name} />
                  </div>
                  <div className="groupInfo">
                    <div className="groupName">{group.name}</div>
                    <div className="groupLastActive">Last active {group.lastActive}</div>
                  </div>
                  <MoreHorizIcon className="groupOptionsIcon" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="groupsMainContent">
          {/* Feed Area */}
          <div className="groupsFeed">
            {/* Sample Post */}
            <div className="groupPost">
              <div className="postHeader">
                <div className="postGroupInfo">
                  <div className="groupAvatar">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=40&h=40&fit=crop&crop=faces" alt="Group" />
                  </div>
                  <div className="postDetails">
                    <div className="postGroupName">{samplePost.groupName}</div>
                    <div className="postAuthorInfo">
                      <span className="authorName">{samplePost.author}</span>
                      <span className="authorRole">• {samplePost.role}</span>
                      <span className="authorBadge">⭐ {samplePost.badge}</span>
                      <span className="postTime">• {samplePost.timeAgo}</span>
                      <span className="privacyIcon">🌐</span>
                    </div>
                  </div>
                </div>
                <MoreHorizIcon className="postOptionsIcon" />
              </div>

              <div className="postContent">
                <p>{samplePost.content}</p>
              </div>

              <div className="postImages">
                <div className="imageGrid">
                  <div className="mainImage">
                    <img src={samplePost.images[0]} alt="Post content" />
                  </div>
                  <div className="sideImages">
                    <img src={samplePost.images[1]} alt="Post content" />
                    <img src={samplePost.images[2]} alt="Post content" />
                  </div>
                </div>
              </div>

              <div className="postStats">
                <div className="likesCount">
                  <FavoriteIcon className="likeIcon" />
                  <span>{samplePost.likes}</span>
                </div>
                <div className="commentsShares">
                  <span>{samplePost.comments} comments</span>
                  <span>{samplePost.shares} shares</span>
                </div>
              </div>

              <div className="postActions">
                <button className="actionBtn">
                  <FavoriteIcon className="actionIcon" />
                  Like
                </button>
                <button className="actionBtn">
                  <ChatBubbleIcon className="actionIcon" />
                  Comment
                </button>
                <button className="actionBtn">
                  <ShareIcon className="actionIcon" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}