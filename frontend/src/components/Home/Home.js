import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import NavBar from '../NavBar/Navbar.js';
import EmployeeHome from './EmployeeHome.js';

class Home extends Component {
  render() {
    let redirectVar = null;
    let home = null;

    if (localStorage.getItem('customer_id')) {
      home = <EmployeeHome />;
    } else if (localStorage.getItem('employee_id')) {
      home = <EmployeeHome />;
    } else {
      redirectVar = <Redirect to='/login' />;
    }
    return (
      <div>
        {redirectVar}
        <NavBar />
        {home}
      </div>
    );
  }
}
//export Home Component
export default Home;
