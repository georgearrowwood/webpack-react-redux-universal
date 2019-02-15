import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ id, title })  => {
  console.log('item', id, title)
  return (
    <NavLink to={`/products/${id}`} className="item">
      <div className="item-title">
        <h4>{title}</h4>
      </div>
    </NavLink>
  );
};