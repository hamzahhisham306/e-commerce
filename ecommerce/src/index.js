import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Shop from './Components/Shop/Shop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route
          path='/shop'
          element={<Shop/>}
        />
        <Route
          path='/'
          element={<App />}
        />

        {/* <Route
          path='/formComment/:id'
          element={<Addcommentform />}
        />
        <Route
          path='/SingUp'
          element={<SingUp />}
        />
        <Route
          path='/Post'
          element={<Post />}
        /> */}
      </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
