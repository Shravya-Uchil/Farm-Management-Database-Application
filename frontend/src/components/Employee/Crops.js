import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import Table1 from './Table1'


class Crops extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.getMyCrops = this.getMyCrops.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  enableForm = () => {
    console.log('Enable form');
    this.setState({
      enableForm: 1,
    });
  };

  getMyCrops() {
    console.log('employee id');
    console.log(localStorage.getItem('employee_id'));
    this.setState({
      enableForm: 0,
    });
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

  componentWillMount() {
    this.getMyCrops();
  }

  onUpdate = (e) => {
    e.preventDefault();
    let data = {
      crop_id: this.state.crop_id,
      employee_id: localStorage.getItem('employee_id'),
      crop_qty: this.state.crop_qty,
      harvest_status: this.state.harvest_status,
      crop_status: this.state.crop_status,
    };
    axios
      .post(`http://localhost:3001/farm/employee/crops/update`, data)
      .then((response) => {
        if (response.status === 200) {
          alert('Updated crop');
          this.getMyCrops();
        } else {
          alert('Failed to update crop');
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to update crop');
      });
  };

  render() {
    let data = [];
    let formTag = null;
    let redirectVar = null;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    }
    if (this.state && this.state.crops) {
      //data = JSON.stringify(this.state.crops, undefined, 4);
      data = this.state.crops.map((crop) => {
        return (
          <tr>
            <td>{JSON.stringify(crop, undefined, 4)}</td>
          </tr>
        );
      });
    }

    let tabledata = [];
    if (this.state && this.state.crops)
    {
      tabledata = this.state.crops;
    }

    if (this.state && this.state.enableForm) {
      formTag = (
        <form onSubmit={this.onUpdate}>
          <div style={{ width: '30%' }} class='form-group'>
            <input
              type='text'
              class='form-control'
              name='crop_id'
              onChange={this.onChange}
              id='crop_id'
              placeholder='Crop Id'
              required
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <input
              type='text'
              class='form-control'
              name='crop_qty'
              onChange={this.onChange}
              id='crop_qty'
              placeholder='Crop Quantity'
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <input
              type='text'
              class='form-control'
              name='harvest_status'
              onChange={this.onChange}
              id='harvest_status'
              placeholder='Crop Harvest Status'
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <input
              type='text'
              class='form-control'
              name='crop_status'
              onChange={this.onChange}
              id='crop_status'
              placeholder='Crop Status'
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
          <h3>My Crops</h3>
          <br />
          <br />
          <table class='table'>
            <thead>
              <tr>
                <th>Crops</th>
              </tr>
            </thead>
            <tbody>
              {/*Display the Table row based on data recieved*/}
              <Table1 data={tabledata}/>
              {/* {data} */}
            </tbody>
          </table>
          <br />
          <br />
          <button onClick={this.enableForm} class='btn btn-primary'>
            Update Crops
          </button>
          <br />
          <br />
          {formTag}
        </div>
      </div>
    );
  }
}

export default Crops;
