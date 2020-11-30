import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import Table2 from './Table2'

class Events extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.getMyEvents = this.getMyEvents.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  enableForm = () => {
    this.setState({
      enableForm: 1,
    });
  };

  getMyEvents() {
    console.log('employee id');
    console.log(localStorage.getItem('employee_id'));
    this.setState({
      enableForm: 0,
    });
    axios
      .get(
        `http://localhost:3001/farm/employee/events/get/${localStorage.getItem(
          'employee_id'
        )}`
      )
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

  componentWillMount() {
    this.getMyEvents();
  }

  onAdd = (e) => {
    e.preventDefault();
    let data = {
      event_name: this.state.event_name,
      employee_id: localStorage.getItem('employee_id'),
      date: this.state.date,
      event_description: this.state.event_description,
      price: this.state.price,
    };
    axios
      .post(`http://localhost:3001/farm/employee/events/add`, data)
      .then((response) => {
        if (response.status === 200) {
          alert('Event added');
          this.getMyEvents();
        } else {
          alert('Failed to add event');
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to add event');
      });
  };

  render() {
    let data = [];
    let formTag = null;
    let redirectVar = null;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    }
    if (this.state && this.state.events) {
      data = this.state.events.map((event) => {
        return (
          <tr>
            <td>{JSON.stringify(event, undefined, 4)}</td>
          </tr>
        );
      });
    }

    let tabledata = [];
    if (this.state && this.state.events)
    {
      tabledata = this.state.events;
    }

    if (this.state && this.state.enableForm) {
      formTag = (
        <form onSubmit={this.onAdd}>
          <div style={{ width: '30%' }} class='form-group'>
            <label for='event_name'>Event Name</label>
            <input
              type='text'
              class='form-control'
              name='event_name'
              onChange={this.onChange}
              id='event_name'
              placeholder='Event Name'
              required
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <label for='event_description'>Event Description</label>
            <input
              type='text'
              class='form-control'
              name='event_description'
              onChange={this.onChange}
              id='event_description'
              placeholder='Event Description'
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <label for='date'>Event Date</label>
            <input
              type='date'
              class='form-control'
              name='date'
              onChange={this.onChange}
              id='date'
              placeholder='Event Date'
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <label for='price'>Event Cost</label>
            <input
              type='text'
              class='form-control'
              name='price'
              onChange={this.onChange}
              id='price'
              placeholder='Event Cost'
            />
          </div>
          <br />
          <div style={{ width: '30%' }}>
            <button class='btn btn-success' type='submit'>
              Add Event
            </button>
          </div>
        </form>
      );
    }
    return (
      <div class='container'>
        {redirectVar}
        <NavBar />
        <div class='login-form'>
          <br />
          <br />
          <h3>My Events</h3>
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
              <Table2 data={tabledata}/>
            </tbody>
          </table>
          <br />
          <br />
          <button onClick={this.enableForm} class='btn btn-primary'>
            Add Event
          </button>
          {formTag}
        </div>
      </div>
    );
  }
}

export default Events;
