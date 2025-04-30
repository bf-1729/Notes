import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css"

const Navbar = () => {
  return (
    <div className='nav_main'>
      <div className='navbar'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>Create Note</NavLink>
        <NavLink to="/view" className={({ isActive }) => isActive ? 'link active' : 'link'}>View Note</NavLink>
    </div>
    </div>
  );
};

export default Navbar;
