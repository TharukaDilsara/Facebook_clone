import React from 'react';
import './onlineFriends.css';

const OnlineFriends = () => {
  // Mock data for online friends
  const onlineFriends = [
    {
      id: 1,
      name: 'John Doe',
      profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      isOnline: true
    },
    {
      id: 2,
      name: 'Jane Smith',
      profilePicture: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      isOnline: true
    },
    {
      id: 3,
      name: 'Mike Johnson',
      profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      isOnline: true
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      isOnline: true
    },
    {
      id: 5,
      name: 'Tom Brown',
      profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      isOnline: true
    }
  ];

  return (
    <div className="online-friends">
      <div className="online-friends-header">
        <h3>Online Friends</h3>
      </div>
      <div className="online-friends-list">
        {onlineFriends.map(friend => (
          <div key={friend.id} className="friend-item">
            <div className="friend-avatar">
              <img src={friend.profilePicture} alt={friend.name} />
              {friend.isOnline && <div className="online-indicator"></div>}
            </div>
            <span className="friend-name">{friend.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineFriends;