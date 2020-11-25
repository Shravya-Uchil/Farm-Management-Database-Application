import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

//Define a Login Component
class EmployeeHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='container'>
        <div class='login-form'>
          <p>Welcome to the Farm Management Webpage</p>
          <Link to={{ pathname: '/Crops' }}>
            <Button name='view_crops' style={{ background: '#d32323' }}>
              View My Crops
            </Button>
          </Link>
          <br />
          <Link to={{ pathname: '/events' }}>
            <Button name='view_crops' style={{ background: '#d32323' }}>
              View My Events
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
//export Login Component
export default EmployeeHome;
