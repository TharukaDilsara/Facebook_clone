import React from 'react'
import "./LeftPane.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className='leftPaneContainer'>
        <div className="leftPaneMenu">
          
          <li className="leftPaneMenuItem">
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'></MarkUnreadChatAltIcon>
            <span className="leftPaneMenuText">Messages</span>
          </li>
          <li className="leftPaneMenuItem">
            <GroupIcon className='leftPaneMenuIcon'></GroupIcon>
            <span className="leftPaneMenuText">Groups</span>
          </li>
          <li className="leftPaneMenuItem">
            <RssFeedIcon className='leftPaneMenuIcon'></RssFeedIcon>
            <span className="leftPaneMenuText">Feed</span>
          </li>
          <li className="leftPaneMenuItem">
            <FlagIcon className='leftPaneMenuIcon'></FlagIcon>
            <span className="leftPaneMenuText">Pages</span>
          </li>
          <li className="leftPaneMenuItem">
            <CalendarMonthIcon className='leftPaneMenuIcon'></CalendarMonthIcon>
            <span className="leftPaneMenuText">Events</span>
          </li>
          <li className="leftPaneMenuItem">
            <BuildIcon className='leftPaneMenuIcon'></BuildIcon>
            <span className="leftPaneMenuText">Settings</span>
          </li>
          <li className="leftPaneMenuItem">
            <SportsEsportsIcon className='leftPaneMenuIcon'></SportsEsportsIcon>
            <span className="leftPaneMenuText">Games</span>
          </li>
          <li className="leftPaneMenuItem">
            <NewspaperIcon className='leftPaneMenuIcon'></NewspaperIcon>
            <span className="leftPaneMenuText">News</span>
          </li>
          <li className="leftPaneMenuItem">
            <WorkOutlineIcon className='leftPaneMenuIcon'></WorkOutlineIcon>
            <span className="leftPaneMenuText">Jobs</span>
          </li>
          <li className="leftPaneMenuItem">
            <AddShoppingCartIcon className='leftPaneMenuIcon'></AddShoppingCartIcon>
            <span className="leftPaneMenuText">Market</span>
          </li>
          <hr></hr>
          <div className="pagesYouLiked">
            <h3>Pages You Liked</h3>
          </div>
          <div className="PageList">
          <li className="pageListItem">
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=100&h=100&fit=crop" alt="Tech Innovators" className="pagePic" />
            <span className="PageName">Tech Innovators</span>
          </li>
          <li className="pageListItem">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop" alt="Foodie Paradise" className="pagePic" />
            <span className="PageName">Foodie Paradise</span>
          </li>
          <li className="pageListItem">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop" alt="Adventure Seekers" className="pagePic" />
            <span className="PageName">Adventure Seekers</span>
          </li>
          <li className="pageListItem">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop" alt="Fitness Journey" className="pagePic" />
            <span className="PageName">Fitness Journey</span>
          </li>
          <li className="pageListItem">
            <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=100&h=100&fit=crop" alt="Photography Hub" className="pagePic" />
            <span className="PageName">Photography Hub</span>
          </li>
          <li className="pageListItem">
            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" alt="Book Lovers Club" className="pagePic" />
            <span className="PageName">Book Lovers Club</span>
          </li>
          <li className="pageListItem">
            <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=100&h=100&fit=crop" alt="Music Vibes" className="pagePic" />
            <span className="PageName">Music Vibes</span>
          </li>
          <li className="pageListItem">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop" alt="Home & Design" className="pagePic" />
            <span className="PageName">Home & Design</span>
          </li>
          <li className="pageListItem">
            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=100&fit=crop" alt="Health & Wellness" className="pagePic" />
            <span className="PageName">Health & Wellness</span>
          </li>
          <li className="pageListItem">
            <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=100&h=100&fit=crop" alt="Nature Lovers" className="pagePic" />
            <span className="PageName">Nature Lovers</span>
          </li>
          </div>


        </div>
      </div>
      
      
    </div>
  )
}
