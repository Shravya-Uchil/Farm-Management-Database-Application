import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import Table10 from './Table10'

class CustomerOrder extends Component {
  constructor(props) {
    super(props);
    this.getMyOrders = this.getMyOrders.bind(this);
  }

  getMyOrders() {
    axios
      .get(
        `http://localhost:3001/farm/order/customer/${localStorage.getItem(
          'customer_id'
        )}`
      )
      .then((response) => {
        if (response.data) {
          this.setState({
            myOrders: response.data,
          });
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getMyOrders();
  }

  render() {
    let data = [];
    let formTag = null;
    let redirectVar = null;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    }
    if (this.state && this.state.myOrders) {
      data = this.state.myOrders.map((order) => {
        return (
          <tr>
            <td>{JSON.stringify(order, undefined, 4)}</td>
          </tr>
        );
      });
    }

    let tabledata = [];
    if (this.state && this.state.myOrders)
    {
      tabledata = this.state.myOrders;
    }

    return (
      <div class='container'>
        {redirectVar}
        <NavBar />
        <div class='login-form'>
          <br />
          <br />
          <h3>My Orders</h3>
          <br />
          <br />
          <table class='table'>
            <thead>
              <tr>
                <th>Order History</th>
              </tr>
            </thead>
            <tbody>
              {/*Display the Tbale row based on data recieved*/}
              <Table10 data={tabledata}/>
            </tbody>
          </table>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default CustomerOrder;
