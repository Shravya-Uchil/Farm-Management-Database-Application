import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Main = () => {
    return (
       <div>
          <NavLink to="/Home">Home </NavLink>
          <NavLink to="/Login">Login </NavLink>
          <NavLink to="/Signup">Signup </NavLink>
          <h1>Smithfield Farms</h1>
          <p>Welcome to the Farm Management Webpage!</p>
       </div>
    );
}
export default Main;
