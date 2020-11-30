import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import Table3 from './Table3'

class Orders extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.getMyOrders = this.getMyOrders.bind(this);
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

  getMyOrders() {
    this.setState({
      enableForm: 0,
    });
    axios
      .get(`http://localhost:3001/farm/order/all/`)
      .then((response) => {
        if (response.data) {
          this.setState({
            orders: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getMyOrders();
  }

  onUpdate = (e) => {
    e.preventDefault();
    let data = {
      order_id: this.state.order_id,
      order_status: this.state.order_status,
    };
    axios
      .post(`http://localhost:3001/farm/order/update`, data)
      .then((response) => {
        if (response.status === 200) {
          alert('Order updated');
          this.getMyOrders();
        } else {
          alert('Failed to update order');
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to update order');
      });
  };

  render() {
    let data = [];
    let formTag = null;
    let redirectVar = null;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    }
    if (this.state && this.state.orders) {
      data = this.state.orders.map((order) => {
        return (
          <tr>
            <td>{JSON.stringify(order, undefined, 4)}</td>
          </tr>
        );
      });
    }

    let tabledata = [];
    if (this.state && this.state.orders)
    {
      tabledata = this.state.orders;
    }

    if (this.state && this.state.enableForm) {
      formTag = (
        <form onSubmit={this.onUpdate}>
          <div style={{ width: '30%' }} class='form-group'>
            <label for='order_id'>Order ID</label>
            <input
              type='text'
              class='form-control'
              name='order_id'
              onChange={this.onChange}
              id='order_id'
              placeholder='Order ID'
              required
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <label for='order_status'>Order Status</label>
            <input
              type='text'
              class='form-control'
              name='order_status'
              onChange={this.onChange}
              id='order_status'
              placeholder='Order Status'
            />
          </div>
          <br />
          <div style={{ width: '30%' }}>
            <button class='btn btn-success' type='submit'>
              Update Order
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
          <h3>Orders</h3>
          <br />
          <br />
          <table class='table'>
            <thead>
              <tr>
                <th>All Orders</th>
              </tr>
            </thead>
            <tbody>
              {/*Display the Tbale row based on data recieved*/}
              <Table3 data={tabledata}/>
            </tbody>
          </table>
          <br />
          <br />
          <button onClick={this.enableForm} class='btn btn-primary'>
            Update Order
          </button>
          {formTag}
        </div>
      </div>
    );
  }
}

export default Orders;
