// SJSU CMPE 226 Fall2020TEAM3

import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import Table6 from './Table6';

class AllCrops extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onPurchase = this.onPurchase.bind(this);
    this.getAllCrops = this.getAllCrops.bind(this);
    this.state = {
      cart: [],
      order_placed: 0,
    };
  }

  onChange = (e) => {
    let cartList = [];
    if (this.state) {
      cartList = this.state.cart;
    }
    let obj = {
      crop_id: e.target.id,
      qty: e.target.value,
    };
    let index = cartList.findIndex((cart) => cart.crop_id === e.target.id);
    if (index === -1) {
      cartList.push(obj);
    } else {
      cartList[index] = obj;
    }
    this.setState({
      cart: cartList,
    });
  };

  getAllCrops() {
    let axiosLink = 'http://localhost:3001/farm/crop/all';
    if (localStorage.getItem('customer_id')) {
      axiosLink = 'http://localhost:3001/farm/crop/allavailable';
    }
    axios
      .get(axiosLink)
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

  componentWillMount() {
    this.getAllCrops();
  }

  /*addToCart = (e) => {
    let item_id = this.props.menu_item.item_id;
    let cartList = [];
    /*if (
      parseInt(localStorage.getItem("selected_restaurant_id")) !==
      this.props.menu_item.restaurant_id
    ) {
      localStorage.setItem("cart_list", cartList);
    }*/

  /*if (localStorage.getItem("cart_list")) {
      cartList.push(...JSON.parse(localStorage.getItem("cart_list")));
    } else {
      localStorage.setItem("cart_list", cartList);
    }
    let index = cartList.findIndex((cart) => cart.item_id === item_id);
    if (index === -1) {
      cartList.push({
        item_id: item_id,
        item_quantity: this.state.itemQty || 1,
        item_price: this.props.menu_item.item_price,
        item_name: this.props.menu_item.item_name,
      });
      //localStorage.setItem("cart_res_id", this.props.menu_item.res_id);
      localStorage.setItem("cart_list", JSON.stringify(cartList));
      this.setState({
        showModal: false,
        itemQty: this.state.itemQty || 1,
      });
    } else {
      cartList[index].item_quantity =
        cartList[index].item_quantity + this.state.itemQty;
      localStorage.setItem("cart_list", JSON.stringify(cartList));
      this.setState({
        showModal: false,
        itemQty: cartList[index].item_quantity,
      });
    }
  };*/

  UpdateTotalCost(_id) {
    let body = {
      order_id: _id,
    };
    console.log('body');
    console.log(body);
    axios
      .post(`http://localhost:3001/farm/crop/updateprice`, body)
      .then((response) => {
        console.log('update cost');
        console.log(response);
        if (response.status === 200) {
          this.setState({ order_placed: 1 });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onPurchase = (e) => {
    e.preventDefault();
    let data = {
      customer_id: localStorage.getItem('customer_id'),
      cart: this.state.cart,
      customer_type: localStorage.getItem('customer_type'),
    };
    console.log('data');
    console.log(data);
    axios
      .post(`http://localhost:3001/farm/crop/purchase`, data)
      .then((response) => {
        console.log('order id resopmse');
        console.log(response);
        if (response.status === 200) {
          this.UpdateTotalCost(response.data.order_id);
          alert('Order Placed');
          this.setState({
            car: [],
          });
        } else {
          alert('Failed to place order');
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to place order');
      });
  };

  render() {
    let data = [];
    let buttonTag = null;
    let redirectVar = null;
    let type = 'hidden';
    let stepCount = 1;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    } else if (this.state.order_placed) {
      redirectVar = <Redirect to='/CustomerOrder' />;
    }
    if (localStorage.getItem('customer_id')) {
      type = 'number';
      buttonTag = (
        <button onClick={this.onPurchase} class='btn btn-primary'>
          Buy Crops
        </button>
      );
      if (localStorage.getItem('customer_type') === 'Store') {
        stepCount = 10;
      }
    }
    if (this.state && this.state.crops) {
      //data = JSON.stringify(this.state.crops, undefined, 4);
      data = this.state.crops.map((crop) => {
        return (
          <tr>
            <td>{JSON.stringify(crop, undefined, 4)}</td>
            <td>
              <input
                type={type}
                class='form-control'
                name='purchase_qty'
                onChange={this.onChange}
                id={crop.crop_id}
                placeholder='Purchase Qty'
                step={stepCount}
              />
            </td>
          </tr>
        );
      });
    }

    let tabledata = [];
    if (this.state && this.state.crops) {
      tabledata = this.state.crops;
    }

    return (
      <div class='container'>
        {redirectVar}
        <NavBar />
        <div class='login-form'>
          <br />
          <br />
          <h3>Shop at discounted prices</h3>
          <br />
          <br />
          <table class='table'>
            <thead>
              <tr>
                <th>All Offered Crops</th>
              </tr>
            </thead>
            <tbody>
              {/*Display the Tbale row based on data recieved*/}
              <Table6 data={tabledata} />
              {data}
            </tbody>
          </table>
          <br />
          <br />
          {buttonTag}
        </div>
      </div>
    );
  }
}

export default AllCrops;
