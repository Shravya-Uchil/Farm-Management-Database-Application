// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

//create the Navbar Component
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  //handle logout to destroy the cookie
  handleLogout = () => {
    console.log('Logout');
    cookie.remove('cookie', { path: '/' });
    localStorage.clear();
  };
  render() {
    //if Cookie is set render Logout Button
    let navLogin = null;
    if (cookie.load('cookie')) {
      console.log('Able to read cookie');
      let adminTab = null;
      let custTab = null;
      let rmTab = null;
      if (localStorage.getItem('isOwner')) {
        custTab = (
          <Link to='/CustomerDetails' id='login-link'>
            Customer Details
          </Link>
        );
        adminTab = (
          <Link to='/Crud' id='login-link'>
            CRUD Ops
          </Link>
        );
        rmTab = (
          <Link to='/RawMaterialAdmin' id='login-link'>
            Raw Materials
          </Link>
        );
      }
      let orderTag = '/CustomerOrder';

      if (localStorage.getItem('employee_id')) {
        orderTag = '/Orders';
      }
      navLogin = (
        <ul
          className='nav navbar-nav navbar-right d-flex flex-row'
          id='login-icon'
        >
          <li>
            <Link to='/AllCrops' id='login-link'>
              View items
            </Link>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <Link to={orderTag} id='login-link'>
              Orders
            </Link>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <Link to='/AllEvents' id='login-link'>
              Events
            </Link>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li>{custTab}</li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li>{rmTab}</li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li>{adminTab}</li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <Link to='/' id='login-link' onClick={this.handleLogout}>
              <span className='glyphicon glyphicon-user'></span>Logout
            </Link>
          </li>
        </ul>
      );
    } else {
      //Else display login button
      localStorage.clear();
      console.log('Not Able to read cookie');
      navLogin = (
        <ul className='nav navbar-nav navbar-right' id='login-icon'>
          <li>
            <Link to='/login' id='login-link'>
              <span className='glyphicon glyphicon-log-in'></span> Login
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <div>
        <nav className='navbar navbar-inverse' id='nav-fluid'>
          <div className='container-fluid' id='nav-fluid'>
            <div className='navbar-header' id='nav-div'>
              <a className='navbar-brand navbar-left'>
                <Link to='/home' id='login-link'>
                  Smithfield Farms
                </Link>
              </a>
            </div>
            {navLogin}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
