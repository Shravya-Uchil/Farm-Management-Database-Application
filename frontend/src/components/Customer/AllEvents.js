// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import Table7 from './Table7';

class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.Register = this.Register.bind(this);
    this.getAllEvents = this.getAllEvents.bind(this);
  }

  getAllEvents() {
    axios
      .get(`http://localhost:3001/farm/event/all/`)
      .then((response) => {
        if (response.data) {
          this.setState({
            events: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getMyEvents() {
    axios
      .get(
        `http://localhost:3001/farm/event/${localStorage.getItem(
          'customer_id'
        )}`
      )
      .then((response) => {
        if (response.data) {
          this.setState({
            myEvents: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getAllEvents();
    this.getMyEvents();
  }

  Register = (e, id) => {
    e.preventDefault();
    let data = {
      event_id: id,
      customer_id: localStorage.getItem('customer_id'),
    };
    axios
      .post(`http://localhost:3001/farm/event/register`, data)
      .then((response) => {
        if (response.status === 200) {
          alert('Registered');
          this.getAllEvents();
          this.getMyEvents();
        } else {
          alert('Failed to register');
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to register');
      });
  };

  render() {
    let data = [];
    let redirectVar = null;
    let isEmployee = false;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    }
    if (localStorage.getItem('employee_id')) {
      isEmployee = true;
    }
    if (this.state && this.state.events && this.state.myEvents) {
      data = this.state.events.map((event) => {
        let buttonText = 'Register';
        let blur = false;
        if (!isEmployee) {
          for (let i = 0; i < this.state.myEvents.length; i++) {
            if (this.state.myEvents[i].event_id === event.event_id) {
              buttonText = 'Registered';
              blur = true;
              break;
            }
          }
        } else {
          blur = true;
        }
        return (
          <tr>
            <td>{JSON.stringify(event, undefined, 4)}</td>
            <td>
              <button
                onClick={(e) => this.Register(e, event.event_id)}
                class='btn btn-primary'
                disabled={blur}
              >
                {buttonText}
              </button>
            </td>
          </tr>
        );
      });
    }

    let tabledata = [];
    if (this.state && this.state.events) {
      tabledata = this.state.events;
    }
    return (
      <div class='container'>
        {redirectVar}
        <NavBar />
        <div class='login-form'>
          <br />
          <br />
          <h3>Register to Events</h3>
          <br />
          <br />
          <table class='table'>
            <thead>
              <tr>
                <th>Events</th>
              </tr>
            </thead>
            <tbody>
              {/*Display the Tbale row based on data recieved*/}
              {/*<Table7 data={tabledata}/>*/}
              {data}
            </tbody>
          </table>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default AllEvents;
