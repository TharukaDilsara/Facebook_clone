import React from 'react'
import './stories.css'
import AddIcon from '@mui/icons-material/Add';

export default function Stories() {
  const stories = [
    {
      id: 1,
      name: 'Alex Johnson',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      storyImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      storyImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      storyImage: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=600&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Emma Davis',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      storyImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face'
    }
  ];

  return (
    <div className='storiesContainer'>
      <div className='storiesWrapper'>
        {/* Create Story */}
        <div className='createStory'>
          <div className='createStoryImageBackground'>
            <img src="/Images/1.png" alt="Your profile" className='createStoryBackgroundImage' />
            <div className='createStoryOverlay'></div>
          </div>
          <div className='createStoryIcon'>
            <AddIcon className='addStoryIcon' />
          </div>
          <div className='createStoryText'>
            Create story
          </div>
        </div>

        {/* User Stories */}
        {stories.map((story) => (
          <div key={story.id} className='storyItem'>
            <div className='storyImageContainer'>
              <img src={story.storyImage} alt={`${story.name}'s story`} className='storyBackgroundImage' />
              <div className='storyUserIconContainer'>
                <img src={story.image} alt={story.name} className='storyUserIcon' />
              </div>
            </div>
            <div className='storyUserName'>
              {story.name}
            </div>
          </div>
        ))}

        {/* Navigation Arrow */}
        <div className='storiesNavigation'>
          <div className='navigationArrow'>
            <span>›</span>
          </div>
        </div>
      </div>
    </div>
  )
}