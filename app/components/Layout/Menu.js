import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div>
    <nav>
      <NavLink exact to="/" > home </NavLink>
      <NavLink to="/products"> products </NavLink>
    </nav>
  </div>
);