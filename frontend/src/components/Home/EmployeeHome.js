// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import axios from 'axios';

//Define a Login Component
class EmployeeHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let redirectVar = null;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    }
    return (
      <div class='container'>
        <div class='login-form'>
          {redirectVar}
          <p>Welcome to the Farm Management Webpage</p>
          <Link to={{ pathname: '/Crops' }}>
            <Button name='view_crops' style={{ background: '#d32323' }}>
              View My Crops
            </Button>
          </Link>
          <br />
          <br />
          <Link to={{ pathname: '/Events' }}>
            <Button name='view_crops' style={{ background: '#d32323' }}>
              View My Events
            </Button>
          </Link>
          <br />
          <br />
          <Link to={{ pathname: '/RawMaterials' }}>
            <Button name='view_raw_materials' style={{ background: '#d32323' }}>
              View Raw Materials
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
//export Login Component
export default EmployeeHome;
