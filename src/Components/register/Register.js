import React, { useState } from 'react'
import login from '../../assets/rocket.png';
import axios from 'axios';
import './register.css';
import { useDispatch, useSelector } from 'react-redux';
import { stateAuth, setLogin} from '../../store/auth';
import App from '../../App';
import cookies from 'react-cookies';
function Register() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const state=useSelector(stateAuth);
  const dispatch = useDispatch();
  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email) && validPassword(password)) {
      const user = {
        username: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      };
      await axios.post('https://backend-1m3m.onrender.com/user', user).then((res) => {
        dispatch(setLogin());
        cookies.save("token", res.data.token);
        cookies.save("userId", res.data.id);
        cookies.save("username", res.data.username);
      }).catch((e) => console.log(e | e.message));
      e.target.reset();
    }
    else {
      setError('Invalid Email');

    }
  }
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }
  const validPassword = (password) => {
    if (password.length > 8 && (/^[a-zA-Z](?=.*[!@#$%^&*])(?=.*[0-9])/g).test(password)) {
      return true;
    }
    else {
      return false;
    }
  };
  const handlerChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setError('Ivalid Email address');
    }
    else {
      setError('');
    };
  };
  const handlerPasswordChange = (e) => {
    setPassword(e.target.value);
    if (!validPassword(e.target.value)) {
      setPasswordError('Invalid Error password');
    }
    else {
      setPasswordError('')
    }
  
  }
  return (
 <>
   {!state.isLogin&&<div className='register section__padding'>
      <div className='login'>
        <form onSubmit={handlerSubmit}>
          <h1>Sign Up</h1>
          <label>Name:</label><br />
          <input type='text' required id='name' /><br />
          <label>Email:</label><br />
          <input type='email' className={error ? 'email' : ''} required id='email' onChange={handlerChange} /><br />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <label>Password</label><br />
          <input type='password' className={passwordError ? 'email' : ''} required id='password' onChange={handlerPasswordChange} /><br />
          <p className='hint'>start with captial letter or small letter</p>
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}<br></br>
          <button type='submit'>LOGIN</button>
          <button type='reset' className='reset' >Reset</button>
        </form>
        <img src={login} alt='img' />
      </div>
    </div>}
      {state.isLogin&&<App/>}
    </>
  
  )
}

export default Register