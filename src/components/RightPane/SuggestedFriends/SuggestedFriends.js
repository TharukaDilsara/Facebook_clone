import React, { useState } from 'react';
import './suggestedFriends.css';

const SuggestedFriends = () => {
  // Mock data for suggested friends
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      name: 'Emma Davis',
      profilePicture: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      mutualFriends: 5,
      mutualFriendsNames: ['John Doe', 'Jane Smith']
    },
    {
      id: 2,
      name: 'Alex Chen',
      profilePicture: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      mutualFriends: 3,
      mutualFriendsNames: ['Mike Johnson']
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      profilePicture: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      mutualFriends: 8,
      mutualFriendsNames: ['Sarah Wilson', 'Tom Brown']
    }
  ]);

  const handleAddFriend = (friendId) => {
    setSuggestions(suggestions.filter(friend => friend.id !== friendId));
  };

  const handleRemoveSuggestion = (friendId) => {
    setSuggestions(suggestions.filter(friend => friend.id !== friendId));
  };

  return (
    <div className="suggested-friends">
      <div className="suggested-friends-header">
        <h3>People You May Know</h3>
      </div>
      <div className="suggestions-list">
        {suggestions.map(friend => (
          <div key={friend.id} className="suggestion-item">
            <div className="suggestion-avatar">
              <img src={friend.profilePicture} alt={friend.name} />
            </div>
            <div className="suggestion-info">
              <h4 className="suggestion-name">{friend.name}</h4>
              <p className="mutual-friends">
                {friend.mutualFriends} mutual friend{friend.mutualFriends !== 1 ? 's' : ''}
              </p>
              <div className="suggestion-actions">
                <button 
                  className="add-friend-btn"
                  onClick={() => handleAddFriend(friend.id)}
                >
                  Add Friend
                </button>
                <button 
                  className="remove-btn"
                  onClick={() => handleRemoveSuggestion(friend.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedFriends;