import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink><br/>
      <NavLink to="/about">About</NavLink><br/>
      <NavLink to="/contact">Contact</NavLink><br/>
      <NavLink to="/training">Training</NavLink><br/>
      <NavLink to="/new">Share the Store </NavLink>
    </div>
  );
};

export default Navigation;