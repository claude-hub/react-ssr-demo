import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';

export default (
  <Routes>
    <Route path='/' exact element={<Home />}></Route>
    <Route path='/login' exact element={<Login />}></Route>
  </Routes>
);
