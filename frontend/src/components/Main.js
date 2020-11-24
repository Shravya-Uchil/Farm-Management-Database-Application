import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Main = () => {
    return (
       <div>
          <NavLink to="/Home">Home </NavLink>
          <NavLink to="/Login">Login </NavLink>
          <NavLink to="/Signup">Signup </NavLink>
       </div>
    );
}
export default Main;
