// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import Table9 from './Table9'

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.getCustomers = this.getCustomers.bind(this);
  }

  getCustomers() {
    axios
      .get(`http://localhost:3001/farm/admin/customerDetails/`)
      .then((response) => {
        if (response.data) {
          this.setState({
            customer: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getCustomers();
  }

  render() {
    let data = [];
    let redirectVar = null;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    }
    if (this.state && this.state.customer) {
      data = this.state.customer.map((c) => {
        return (
          <tr>
            <td>{JSON.stringify(c, undefined, 4)}</td>
          </tr>
        );
      });
    }

    let tabledata = [];
    if (this.state && this.state.customer)
    {
      tabledata = this.state.customer;
    }

    return (
      <div class='container'>
        {redirectVar}
        <NavBar />
        <div class='login-form'>
          <br />
          <br />
          <h3>Customers</h3>
          <br />
          <br />
          <table class='table'>
            <thead>
              <tr>
                <th>All Customers</th>
              </tr>
            </thead>
            <tbody>
              {/*Display the Tbale row based on data recieved*/}
              <Table9 data={tabledata}/>
            </tbody>
          </table>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default CustomerDetails;
