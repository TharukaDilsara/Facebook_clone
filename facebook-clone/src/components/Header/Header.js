import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <h1 className='headerTitle'>Facebook Clone</h1>
      <nav className='headerNav'>
        <ul className='headerNavList'>
          <li className='headerNavItem'>Home</li>
          <li className='headerNavItem'>Profile</li>
          <li className='headerNavItem'>Messages</li>
          <li className='headerNavItem'>Notifications</li>
        </ul>
      </nav>
    </div>
  );
}