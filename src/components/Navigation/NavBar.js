import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./NavBar.css"


export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className="logo">FaceBook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className='searchIcon'></SearchIcon>
                <input placeholder='Search for your friend' className="searchInput" />
                

            </div>
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLink">HomePage</span>
                <span className="navBarLink">Profile</span>

            </div>
            <div className="navBarIcons">
                <div className="navBarIcon">
                    <PersonIcon className='personIcon'></PersonIcon>
                    <span className="iconTags">3</span>
                </div>
                <div className="navBarIcon">
                    <MessageIcon className='messageIcon'></MessageIcon>
                    <span className="iconTags">5</span>
                </div>
                <div className="navBarIcon">
                    <SettingsIcon className='settingIcon'></SettingsIcon>
                    <span className="iconTags">2</span>
                </div>
                <div className="pic">
                    <img src="/images/1.png" alt="" className="profilePicImg" />
                </div>
            </div>
        </div>
    </div>
  )
}
