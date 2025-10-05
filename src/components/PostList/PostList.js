import React from 'react';
import Post from '../Post/Post';
import './postList.css';

const PostList = () => {
  // Sample posts data
  const posts = [
    {
      id: 1,
      userName: 'Alex Johnson',
      userProfilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Just finished an amazing coding session! Working on a new React project and loving every minute of it. The satisfaction when your code finally works is unmatched! 💻✨',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop',
      likes: 24,
      comments: 8,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      id: 2,
      userName: 'Sarah Miller',
      userProfilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Beautiful sunset from my weekend hiking trip! Nature never fails to amaze me. Sometimes you need to disconnect from technology and just enjoy the moment. 🌅🥾',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      likes: 42,
      comments: 15,
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
    },
    {
      id: 3,
      userName: 'Mike Chen',
      userProfilePic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      content: 'Coffee and code - the perfect combination for a productive morning! ☕ What\'s everyone else working on today?',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      likes: 18,
      comments: 6,
      createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000) // 8 hours ago
    },
    {
      id: 4,
      userName: 'Emma Davis',
      userProfilePic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      content: 'Excited to share that I just got accepted into the Tech Leadership program! Hard work really does pay off. Thank you to everyone who supported me along the way! 🎉🚀',
      likes: 67,
      comments: 23,
      createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000) // 12 hours ago
    },
    {
      id: 5,
      userName: 'David Kim',
      userProfilePic: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
      content: 'Amazing food experience at the new Italian restaurant downtown! The pasta was absolutely incredible. Highly recommend checking it out if you\'re in the area! 🍝👌',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      likes: 31,
      comments: 12,
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
    },
    {
      id: 6,
      userName: 'Lisa Rodriguez',
      userProfilePic: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      content: 'Finished reading "The Clean Code" by Robert C. Martin. Such an insightful book for any developer! Clean, readable code is truly an art form. What technical books would you recommend? 📚💡',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop',
      likes: 29,
      comments: 9,
      createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000) // 1.5 days ago
    }
  ];

  return (
    <div className="postList">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;