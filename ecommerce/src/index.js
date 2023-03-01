import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Shop from './Components/Shop/Shop';
import store from './store/index';
import { Provider } from 'react-redux'
import Login from './Components/Login/Login';
import SingUp from './Components/register/Register';
import Item from './Components/items/Item';
import Favority from './Components/Favority/Favority';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route
          path='/shop'
          element={<Shop />}
        />
        <Route
          path='/'
          element={<App />}
        />

        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<SingUp />}
        />
        <Route
          path='/item'
          element={<Item />}
        />
        <Route
          path='/favority'
          element={<Favority/>}
        />

      </Routes  >
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
