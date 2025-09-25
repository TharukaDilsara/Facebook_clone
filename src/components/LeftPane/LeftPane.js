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
            <img src="/images/1.png" alt="" className="pagePic" />
            <span className="PageName">Travel With TD</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.png" alt="" className="pagePic" />
            <span className="PageName">Travel With TD</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.png" alt="" className="pagePic" />
            <span className="PageName">Travel With TD</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.png" alt="" className="pagePic" />
            <span className="PageName">Travel With TD</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.png" alt="" className="pagePic" />
            <span className="PageName">Travel With TD</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.png" alt="" className="pagePic" />
            <span className="PageName">Travel With TD</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.png" alt="" className="pagePic" />
            <span className="PageName">Travel With TD</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.png" alt="" className="pagePic" />
            <span className="PageName">Travel With TD</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.png" alt="" className="pagePic" />
            <span className="PageName">Travel With TD</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.png" alt="" className="pagePic" />
            <span className="PageName">Travel With TD</span>
          </li>
          </div>


        </div>
      </div>
      
      
    </div>
  )
}
