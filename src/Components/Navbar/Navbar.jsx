import React, { useState } from 'react';
import './navbar.css';
import { FaSearchengin } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-01.png.webp';
import { useSelector,useDispatch } from 'react-redux';
import {statecart} from '../../store/cart';
import { setShow, setLogout } from '../../store/auth';
import cookies from 'react-cookies';
function Navbar() {
  const [show, setHidden] = useState(false);
  const handlerShow = _ => show ? setHidden(false) : setHidden(true);
  const State=useSelector(statecart);
  const dispatch=useDispatch();
  const hanlderLogout=()=>{
    dispatch(setLogout());
    cookies.remove('token');
    cookies.remove('username');
    cookies.remove('userId');
    window.location.reload();
    window.location.replace('/');
  };

  return (
    <div className={show?'navbar active section__padding':'navbar section__padding'}>
      <div className='navbar-main'>
        <div className='navbar_left'>
          <img alt='logo' src={logo} />
          <div className={show?'list active':'list'}>
            <ul>
            <Link to='/'><li>Home</li></Link> 
              <Link to='/shop'> <li>Shop</li></Link>
             <Link to='/item'><li>items</li></Link>
              <li>Hi, {cookies.load('username')}</li>
        {!cookies.load('token')&&<Link to='/login'><li>Login</li></Link>}  
       {cookies.load('token')&&<li onClick={()=>hanlderLogout()}>Logout</li>}
            </ul>
          </div>
        </div>
        <div className='navbar_right'>
          <div className='icons_stores'>
            <li><FaSearchengin /></li>
            <li className='shopping' data-notify={State?.start}><FontAwesomeIcon icon={faShoppingCart}  onClick={()=>dispatch(setShow())}/></li>
          <Link to='/favority'><li ><FontAwesomeIcon icon={faHeart} /></li></Link>
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