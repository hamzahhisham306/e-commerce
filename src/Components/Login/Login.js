import React, { useEffect, useState } from 'react'
import './Login.css'
import login from '../../assets/rocket.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import base24 from 'base-64';
import cookies from 'react-cookies';
import { setLogin, stateAuth } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import App from '../../App';
function Login() {
  const dispatch = useDispatch();
  const [errorLogin, setError]=useState('');

  useEffect(() => {
    if (cookies.load('token') !== '') {
      dispatch(setLogin())
    }
  }, []);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        username: e.target.username.value,
        password: e.target.password.value
      };
      const encode = base24.encode(`${user.username}:${user.password}`);

      const res = await axios.post("https://backend-1m3m.onrender.com/login", {}, {
        headers: {
          authorization: `Basic ${encode}`,
        }
      }).then((res) => {
        dispatch(setLogin());
        cookies.save('username', res.data.username);
        cookies.save('token', res.data.token);
        cookies.save('userId', res.data.id);
      }).catch((err) =>{ 
        console.log(err | err.message)
        setError('your password or username not correct');
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(errorLogin)
  const state = useSelector(stateAuth);
  return (
    <>
      {!state.isLogin &&
        <div className='section__padding'>
          <div className='login'>
            <form onSubmit={handlerSubmit}>
              <h1>Login</h1>
              <label>username:</label><br />
              <input type='text' required id='username' /><br />
              <label>Password</label><br />
              <input type='password' required id='password' /><br />
              <p>if you do not have account <Link to='/signup'>Sign Up!</Link></p>
              <p style={{color:'red'}}>{errorLogin}</p>
              <button type='submit'>LOGIN</button>
              <button type='reset' className='reset'>Reset</button>
            </form>
            <img src={login} alt='img' />
          </div>
        </div>
      }
      {state.isLogin && <App />}
    </>

  )
}

export default Login
