import React from 'react'
import "./rightPane.css"
import OnlineFriends from './OnlineFriends/OnlineFriends'
import SponsoredAds from './SponsoredAds/SponsoredAds'
import SuggestedFriends from './SuggestedFriends/SuggestedFriends'
import BirthdayReminders from './BirthdayReminders/BirthdayReminders'

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className='rightPaneContainer'>
        <OnlineFriends />
        <SponsoredAds />
        <SuggestedFriends />
        <BirthdayReminders />
      </div>
    </div>
  )
}
