// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import NavBar from '../NavBar/Navbar.js';
import EmployeeHome from './EmployeeHome.js';
import OwnerHome from './OwnerHome.js';
import AllCrops from '../Customer/AllCrops.js';

class Home extends Component {
  render() {
    let redirectVar = null;
    let home = null;
    let navbar = null;

    if (localStorage.getItem('customer_id')) {
      home = <AllCrops />;
    } else if (localStorage.getItem('employee_id')) {
      if (localStorage.getItem('isOwner')) {
        home = <OwnerHome />;
        navbar = <NavBar />;
      } else {
        home = <EmployeeHome />;
        navbar = <NavBar />;
      }
    } else {
      redirectVar = <Redirect to='/login' />;
    }
    return (
      <div>
        {redirectVar}
        {navbar}
        {home}
      </div>
    );
  }
}
//export Home Component
export default Home;
