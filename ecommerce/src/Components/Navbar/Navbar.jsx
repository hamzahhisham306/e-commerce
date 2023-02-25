import React, { useState } from 'react';
import './navbar.css';
import { FaSearchengin } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-01.png.webp';
function Navbar() {
  const [show, setShow] = useState(false);
  const handlerShow = _ => show ? setShow(false) : setShow(true);
  
  return (
    <div className={show?'navbar active section__padding':'navbar section__padding'}>
      <div className='navbar-main'>
        <div className='navbar_left'>
          <img alt='logo' src={logo} />
          <div className={show?'list active':'list'}>
            <ul>
            <Link to='/'><li>Home</li></Link> 
              <Link to='/shop'> <li>Shop</li></Link>
              <li>Features</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          
        </div>
        <div className='navbar_right'>
          <div className='icons_stores'>
            <li><FaSearchengin /></li>
            <li><FontAwesomeIcon icon={faShoppingCart} /></li>
            <li><FontAwesomeIcon icon={faHeart} /></li>
            <div className={show ? 'menu-icon active' : 'menu-icon'} onClick={() => handlerShow()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar