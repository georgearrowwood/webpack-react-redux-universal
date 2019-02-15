import React, { Component } from 'react';

import Menu from './menu';

export default ({ children }) => (
  <div>
    <Menu/>
    {children}
  </div>
);