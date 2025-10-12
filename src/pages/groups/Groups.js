import React, { useState } from 'react'
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
  const [showAllGroups, setShowAllGroups] = useState(false);
  
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
    },
    {
      id: 3,
      name: "Tech Innovators Hub",
      lastActive: "2 hours ago",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=50&h=50&fit=crop&crop=faces",
      members: 15420
    },
    {
      id: 4,
      name: "Photography Enthusiasts",
      lastActive: "5 hours ago",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=50&h=50&fit=crop&crop=faces",
      members: 8976
    },
    {
      id: 5,
      name: "Startup Community Sri Lanka",
      lastActive: "8 hours ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=faces",
      members: 12340
    },
    {
      id: 6,
      name: "Web Developers Network",
      lastActive: "12 hours ago",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=faces",
      members: 25789
    },
    {
      id: 7,
      name: "Digital Marketing Experts",
      lastActive: "18 hours ago",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1c1?w=50&h=50&fit=crop&crop=faces",
      members: 9876
    },
    {
      id: 8,
      name: "Fitness & Health Community",
      lastActive: "1 day ago",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=50&h=50&fit=crop&crop=faces",
      members: 18456
    },
    {
      id: 9,
      name: "Food Lovers Colombo",
      lastActive: "2 days ago",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=50&h=50&fit=crop&crop=faces",
      members: 7234
    },
    {
      id: 10,
      name: "Travel Buddies LK",
      lastActive: "3 days ago",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=50&h=50&fit=crop&crop=faces",
      members: 11567
    },
    {
      id: 11,
      name: "Music Production Hub",
      lastActive: "4 days ago",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=50&h=50&fit=crop&crop=faces",
      members: 6789
    },
    {
      id: 12,
      name: "Home & Garden Design",
      lastActive: "5 days ago",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=50&h=50&fit=crop&crop=faces",
      members: 14523
    }
  ];

  const toggleShowAllGroups = () => {
    setShowAllGroups(!showAllGroups);
  };

  const groupPosts = [
    {
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
    },
    {
      id: 2,
      groupName: "Tech Innovators Hub",
      author: "Nimesh Perera",
      role: "Moderator",
      badge: "Top contributor",
      timeAgo: "2h",
      content: "We're hosting a virtual hackathon next week! Who's joining? 💻🚀",
      images: [
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
      ],
      likes: 34,
      comments: 12,
      shares: 4
    },
    {
      id: 3,
      groupName: "Photography Enthusiasts",
      author: "Dilani Fernando",
      role: "Member",
      badge: "",
      timeAgo: "5h",
      content: "Captured this beautiful sunset yesterday! 🌅📷",
      images: [
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
      ],
      likes: 56,
      comments: 18,
      shares: 7
    },
    {
      id: 4,
      groupName: "Startup Community Sri Lanka",
      author: "Kasun Jayasuriya",
      role: "Admin",
      badge: "",
      timeAgo: "8h",
      content: "Our next meetup is scheduled for next Friday at Trace City! RSVP below.",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1494790108755-2616b332c1c1?w=400&h=300&fit=crop"
      ],
      likes: 21,
      comments: 7,
      shares: 1
    },
    {
      id: 5,
      groupName: "Fitness & Health Community",
      author: "Sajini Weerasinghe",
      role: "Member",
      badge: "Active poster",
      timeAgo: "1d",
      content: "Just finished a 10k run! Feeling great. 🏃‍♂️💪",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
      ],
      likes: 44,
      comments: 9,
      shares: 3
    }
  ];

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
              <span className="seeAllLink" onClick={toggleShowAllGroups}>
                {showAllGroups ? 'See less' : 'See all'}
              </span>
            </div>
            
            <div className="groupsList">
              {(showAllGroups ? joinedGroups : joinedGroups.slice(0, 2)).map((group) => (
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
            {groupPosts.map((post) => (
              <div className="groupPost" key={post.id}>
                <div className="postHeader">
                  <div className="postGroupInfo">
                    <div className="groupAvatar">
                      <img src={
                        post.id === 1 ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=40&h=40&fit=crop&crop=faces"
                        : post.id === 2 ? "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=40&h=40&fit=crop&crop=faces"
                        : post.id === 3 ? "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=40&h=40&fit=crop&crop=faces"
                        : post.id === 4 ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces"
                        : post.id === 5 ? "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop&crop=faces"
                        : post.images[0]
                      } alt="Group" />
                    </div>
                    <div className="postDetails">
                      <div className="postGroupName">{post.groupName}</div>
                      <div className="postAuthorInfo">
                        <span className="authorName">{post.author}</span>
                        {post.role && <span className="authorRole">• {post.role}</span>}
                        {post.badge && <span className="authorBadge">⭐ {post.badge}</span>}
                        <span className="postTime">• {post.timeAgo}</span>
                        <span className="privacyIcon">🌐</span>
                      </div>
                    </div>
                  </div>
                  <MoreHorizIcon className="postOptionsIcon" />
                </div>

                <div className="postContent">
                  <p>{post.content}</p>
                </div>

                <div className="postImages">
                  <div className="imageGrid">
                    <div className="mainImage">
                      <img src={post.images[0]} alt="Post content" />
                    </div>
                    <div className="sideImages">
                      <img src={post.images[1]} alt="Post content" />
                      <img src={post.images[2]} alt="Post content" />
                    </div>
                  </div>
                </div>

                <div className="postStats">
                  <div className="likesCount">
                    <FavoriteIcon className="likeIcon" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="commentsShares">
                    <span>{post.comments} comments</span>
                    <span>{post.shares} shares</span>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}