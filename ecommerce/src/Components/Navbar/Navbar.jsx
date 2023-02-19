import React from 'react';
// import { AiOutlineSearch } from 'antd';
import './navbar.css';
import { FaSearchengin } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faHeart } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo-01.png.webp';
function Navbar() {
  return (
    <div className='navbar section__padding'>
      <div className='navbar-main'>
        <div className='navbar_left'>
          <img alt='logo' src={logo} />
          <div className='list'>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Features</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className='navbar_right'>
          <div className='icons_stores'>
            <li><FaSearchengin  /></li>
            <li><FontAwesomeIcon icon={faShoppingCart} /></li>
            <li><FontAwesomeIcon icon={faHeart} /></li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar