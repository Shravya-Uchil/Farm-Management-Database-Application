// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import Table4 from './Table4'
import Table5 from './Table5'

class RawMaterials extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.getAllRawMaterials = this.getAllRawMaterials.bind(this);
    this.getMyRawMaterials = this.getMyRawMaterials.bind(this);
    this.enableUpdateForm = this.enableUpdateForm.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  enableAddForm = () => {
    this.setState({
      enableAddForm: 1,
      enableUpdateForm: 0,
    });
  };

  enableUpdateForm = () => {
    this.setState({
      enableUpdateForm: 1,
      enableAddForm: 0,
    });
  };

  getAllRawMaterials() {
    console.log('ALL RM');
    this.setState({
      enableAddForm: 0,
      enableUpdateForm: 0,
    });
    axios
      .get(
        `http://localhost:3001/farm/employee/rawmaterials/getattending/${localStorage.getItem(
          'employee_id'
        )}`
      )
      .then((response) => {
        console.log('response.data');
        console.log(response.data);
        if (response.data) {
          this.setState({
            allRawMaterial: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getMyRawMaterials() {
    console.log('employee id');
    console.log(localStorage.getItem('employee_id'));
    this.setState({
      enableAddForm: 0,
      enableUpdateForm: 0,
    });
    axios
      .get(
        `http://localhost:3001/farm/employee/rawmaterials/getPurchased/${localStorage.getItem(
          'employee_id'
        )}`
      )
      .then((response) => {
        if (response.data) {
          this.setState({
            myRawMaterial: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getAllRawMaterials();
    this.getMyRawMaterials();
  }

  onAdd = (e) => {
    e.preventDefault();
    let data = {
      raw_material_id: this.state.raw_material_id,
      employee_id: localStorage.getItem('employee_id'),
      purchase_qty: this.state.purchase_qty,
    };
    axios
      .post(`http://localhost:3001/farm/employee/rawmaterials/purchase`, data)
      .then((response) => {
        if (response.status === 200) {
          alert('Raw Material Purchased');
          this.getAllRawMaterials();
          this.getMyRawMaterials();
        } else {
          alert('Failed to purchase');
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to purchase');
      });
  };

  onUpdate = (e) => {
    e.preventDefault();
    let data = {
      raw_material_id: this.state.raw_material_id,
      update_qty: this.state.update_qty,
    };
    axios
      .post(`http://localhost:3001/farm/employee/rawmaterials/update`, data)
      .then((response) => {
        if (response.status === 200) {
          alert('Raw Material Updated');
          this.getAllRawMaterials();
          this.getMyRawMaterials();
        } else {
          alert('Failed to update');
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to update');
      });
  };

  render() {
    let myRM = [];
    let allRM = [];
    let addFormTag = null;
    let updateFormTag = null;
    let redirectVar = null;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    }
    if (this.state && this.state.allRawMaterial) {
      //allRM = JSON.stringify(this.state.allRawMaterial);
      allRM = this.state.allRawMaterial.map((rm) => {
        return (
          <tr>
            <td>{JSON.stringify(rm, undefined, 4)}</td>
          </tr>
        );
      });
      console.log('allRM');
      console.log(allRM);
    }
    if (this.state && this.state.myRawMaterial) {
      //myRM = JSON.stringify(this.state.myRawMaterial);
      myRM = this.state.myRawMaterial.map((rm) => {
        return (
          <tr>
            <td>{JSON.stringify(rm, undefined, 4)}</td>
          </tr>
        );
      });
    }

    let tabledata = [];
    if (this.state && this.state.allRawMaterial)
    {
      tabledata = this.state.allRawMaterial;
    }

    let tabledata1 = [];
    if (this.state && this.state.myRawMaterial)
    {
      tabledata1 = this.state.myRawMaterial;
    }

    if (this.state && this.state.enableAddForm) {
      addFormTag = (
        <form onSubmit={this.onAdd}>
          <div style={{ width: '30%' }} class='form-group'>
            <label for='raw_material_id'>Raw Material ID</label>
            <input
              type='text'
              class='form-control'
              name='raw_material_id'
              onChange={this.onChange}
              id='raw_material_id'
              placeholder='Raw Material ID'
              required
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <label for='purchase_qty'>Purchase Quantity</label>
            <input
              type='text'
              class='form-control'
              name='purchase_qty'
              onChange={this.onChange}
              id='purchase_qty'
              placeholder='Purchase Quantity'
              required
            />
          </div>
          <br />
          <div style={{ width: '30%' }}>
            <button class='btn btn-success' type='submit'>
              Purchase
            </button>
          </div>
        </form>
      );
    }

    if (this.state && this.state.enableUpdateForm) {
      updateFormTag = (
        <form onSubmit={this.onUpdate}>
          <div style={{ width: '30%' }} class='form-group'>
            <label for='raw_material_id'>Raw Material ID</label>
            <input
              type='text'
              class='form-control'
              name='raw_material_id'
              onChange={this.onChange}
              id='raw_material_id'
              placeholder='Raw Material ID'
              required
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <label for='update_qty'>Updated Quantity</label>
            <input
              type='text'
              class='form-control'
              name='update_qty'
              onChange={this.onChange}
              id='update_qty'
              placeholder='Updated Quantity'
              required
            />
          </div>
          <br />
          <div style={{ width: '30%' }}>
            <button class='btn btn-success' type='submit'>
              Update
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
          <h3>Raw Materials Home</h3>
          <br />
          <br />
          <div class='d-flex flex-row'>
            <table class='table'>
              <thead>
                <tr>
                  <th>Raw Materials For Tending Crops</th>
                </tr>
              </thead>
              <tbody>
                {/*Display the Tbale row based on data recieved*/}
                <Table4 data={tabledata}/>
              </tbody>
            </table>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <table class='table'>
              <thead>
                <tr>
                  <th>Raw Materials Order History</th>
                </tr>
              </thead>
              <tbody>
                {/*Display the Tbale row based on data recieved*/}
                <Table5 data={tabledata1}/>
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <div class='d-flex flex-row'>
            <button onClick={this.enableAddForm} class='btn btn-primary'>
              Purchase Raw Material
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={this.enableUpdateForm} class='btn btn-primary'>
              Update Raw Material
            </button>
          </div>
          <br />
          <br />
          {addFormTag}
          {updateFormTag}
        </div>
      </div>
    );
  }
}

export default RawMaterials;
