import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';

class Crops extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('employee id');
    console.log(localStorage.getItem('employee_id'));
    axios
      .get(
        `http://localhost:3001/farm/employee/crops/get/${localStorage.getItem(
          'employee_id'
        )}`
      )
      .then((response) => {
        if (response.data) {
          this.setState({
            crops: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let data = [];
    if (this.state && this.state.crops) {
      data = JSON.stringify(this.state.crops);
    }
    return (
      <div class='container'>
        <NavBar />
        <div class='login-form'>
          <br />
          <br />
          <h3>My Crops</h3>
          <br />
          <br />
          {data}
          <br />
          <br />
          <button onClick='' class='btn btn-primary'>
            Update Crops
          </button>
        </div>
      </div>
    );
  }
}

export default Crops;
