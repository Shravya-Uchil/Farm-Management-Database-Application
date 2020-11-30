// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';

class Crud extends Component {
  constructor(props) {
    super(props);
    this.setState({
      showEventTag: false,
      showCropTag: false,
      showemployeeTag: false,
      showrawmaterialTag: false,
      showrawmaterialProvTag: false,
      table: '',
      crudOp: '',
    });
    this.onTableChange = this.onTableChange.bind(this);
    this.onOpChange = this.onOpChange.bind(this);
    this.getCropTag = this.getCropTag.bind(this);
    this.getEventTag = this.getEventTag.bind(this);
    this.getRawmaterialTag = this.getRawmaterialTag.bind(this);
    this.getEmployeeTag = this.getEmployeeTag.bind(this);
    this.getRawmaterialProvTag = this.getRawmaterialProvTag.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onTableChange = (e) => {
    console.log(e.target.value);
    this.setState({
      showEventTag: false,
      showCropTag: false,
      showemployeeTag: false,
      showrawmaterialTag: false,
      showrawmaterialProvTag: false,
      table: '',
      crudOp: 'Create',
    });
    switch (e.target.value) {
      case 'Crop':
        this.setState({
          showCropTag: true,
          table: e.target.value,
        });
        break;
      case 'Event':
        this.setState({
          showEventTag: true,
          table: e.target.value,
        });
        break;
      case 'Employee':
        this.setState({
          showemployeeTag: true,
          table: e.target.value,
        });
        break;
      case 'Raw_Material':
        this.setState({
          showrawmaterialTag: true,
          table: e.target.value,
        });
        break;
      case 'Raw_Material_Provider':
        this.setState({
          showrawmaterialProvTag: true,
          table: e.target.value,
        });
        break;
    }
  };

  onOpChange = (e) => {
    console.log('on op change');
    console.log(e.target.value);
    this.setState({
      crudOp: e.target.value,
    });
  };

  getCropTag() {
    let cropTag = null;
    let hidden = false;
    if (this.state.crudOp === 'Create') {
      hidden = true;
      cropTag = (
        <form>
          <div style={{ width: '30%' }} class='form-group'>
            <input
              type='text'
              class='form-control'
              name='crop_id'
              id='crop_id'
              placeholder='Crop ID'
              required
              disabled={hidden}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <input
              type='text'
              class='form-control'
              name='crop_name'
              id='crop_name'
              placeholder='Crop Name'
              required
              onChange={this.onChange}
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <input
              type='text'
              class='form-control'
              name='quantity'
              onChange={this.onChange}
              id='quantity'
              placeholder='Crop Quantity'
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <input
              type='text'
              class='form-control'
              name='cost_price'
              onChange={this.onChange}
              id='cost_price'
              placeholder='Crop Cost Price'
            />
          </div>
          <br />
          <div style={{ width: '30%' }} class='form-group'>
            <input
              type='text'
              class='form-control'
              name='selling_price'
              onChange={this.onChange}
              id='selling_price'
              placeholder='Crop Selling Price'
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
          <div style={{ width: '30%' }} class='form-group'>
            <input
              type='text'
              class='form-control'
              name='discount'
              onChange={this.onChange}
              id='discount'
              placeholder='Discount'
            />
          </div>
        </form>
      );
    }

    return cropTag;
  }

  getEventTag() {
    let eventTag = null;
    let hidden = false;
    if (this.state && this.state.crudOp === 'Create') {
      hidden = true;
    }
    eventTag = (
      <form>
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='event_id'
            id='event_id'
            placeholder='Event ID'
            required
            disabled={hidden}
            onChange={this.onChange}
          />
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='event_name'
            id='event_name'
            placeholder='Event Name'
            required
            onChange={this.onChange}
          />
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <textarea
            id='description'
            name='description'
            rows='4'
            cols='50'
            class='form-control'
            onChange={this.onChange}
            placeholder='Event Eescription'
          ></textarea>
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='price'
            onChange={this.onChange}
            id='price'
            placeholder='Event Price'
          />
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='date'
            class='form-control'
            name='date'
            onChange={this.onChange}
            id='date'
            placeholder='Event Date'
          />
        </div>
      </form>
    );

    return eventTag;
  }
  getRawmaterialTag() {
    let rmTag = null;
    let hidden = false;
    if (this.state && this.state.crudOp === 'Create') {
      hidden = true;
    }
    rmTag = (
      <form>
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='raw_material_id'
            id='raw_material_id'
            placeholder='Raw Material ID'
            required
            disabled={hidden}
            onChange={this.onChange}
          />
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='raw_material_name'
            id='raw_material_name'
            placeholder='Raw Material Name'
            required
            onChange={this.onChange}
          />
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='raw_material_quantity'
            onChange={this.onChange}
            id='raw_material_quantity'
            placeholder='Raw Material Quantity'
          />
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='qty_threshold'
            onChange={this.onChange}
            id='qty_threshold'
            placeholder='Quantity Threshold'
          />
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='price'
            onChange={this.onChange}
            id='price'
            placeholder='Raw Material Price'
          />
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='raw_material_provider_id'
            onChange={this.onChange}
            id='raw_material_provider_id'
            placeholder='Raw Material Provider id'
          />
        </div>
      </form>
    );
    return rmTag;
  }
  getEmployeeTag() {
    let empTag = null;
    let hidden = false;
    if (this.state && this.state.crudOp === 'Create') {
      hidden = true;
    }
    empTag = (
      <form>
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='employee_id'
            id='employee_id'
            placeholder='Employee ID'
            required
            disabled={hidden}
            onChange={this.onChange}
          />
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='emp_name'
            id='emp_name'
            placeholder='Employee Name'
            required
            onChange={this.onChange}
          />
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='emp_designation'
            id='emp_designation'
            placeholder='Employee Designation'
            required
            onChange={this.onChange}
          />
        </div>
      </form>
    );
    return empTag;
  }

  getRawmaterialProvTag() {
    let rmTag = null;
    let hidden = false;
    if (this.state && this.state.crudOp === 'Create') {
      hidden = true;
    }
    rmTag = (
      <form>
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='raw_material_provider_id'
            id='raw_material_provider_id'
            placeholder='Raw Material Provider ID'
            required
            disabled={hidden}
            onChange={this.onChange}
          />
        </div>
        <br />
        <div style={{ width: '30%' }} class='form-group'>
          <input
            type='text'
            class='form-control'
            name='rmp_name'
            id='rmp_name'
            placeholder='Raw Material Provider Name'
            required
            onChange={this.onChange}
          />
        </div>
      </form>
    );
    return rmTag;
  }

  onSubmit = (e) => {
    e.preventDefault();
    let axiosLink =
      'http://localhost:3001/farm/admin/' +
      this.state.crudOp +
      this.state.table;
    let data = {};

    console.log('STATEEEEEEEE');
    console.log(this.state);

    switch (this.state.table) {
      case 'Crop':
        if (this.state.crudOp != 'Create') {
          data['crop_id'] = this.state.crop_id;
        }
        if (this.state.crudOp != 'Delete') {
          data['crop_name'] = this.state.crop_name;
          data['quantity'] = this.state.quantity;
          data['cost_price'] = this.state.cost_price;
          data['crop_status'] = this.state.crop_status;
          data['selling_price'] = this.state.selling_price;
          data['harvest_status'] = this.state.harvest_status;
          data['discount'] = this.state.discount;
        }
        break;
      case 'Event':
        if (this.state.crudOp != 'Create') {
          data['event_id'] = this.state.event_id;
        }
        if (this.state.crudOp != 'Delete') {
          data['event_name'] = this.state.event_name;
          data['description'] = this.state.description;
          data['price'] = this.state.price;
          data['date'] = this.state.date;
        }
        break;
      case 'Employee':
        if (this.state.crudOp != 'Create') {
          data['emp_id'] = this.state.emp_id;
        }
        if (this.state.crudOp != 'Delete') {
          data['emp_name'] = this.state.emp_name;
          data['emp_designation'] = this.state.emp_designation;
        }
        break;
      case 'Raw_Material':
        if (this.state.crudOp != 'Create') {
          data['raw_material_id'] = this.state.raw_material_id;
        }
        if (this.state.crudOp != 'Delete') {
          data['raw_material_name'] = this.state.raw_material_name;
          data['raw_material_quantity'] = this.state.raw_material_quantity;
          data['qty_threshold'] = this.state.qty_threshold;
          data['price'] = this.state.price;
          data[
            'raw_material_provider_id'
          ] = this.state.raw_material_provider_id;
        }
        break;
      case 'Raw_Material_Provider':
        if (this.state.crudOp != 'Create') {
          data[
            'raw_material_provider_id'
          ] = this.state.raw_material_provider_id;
        }
        if (this.state.crudOp != 'Delete') {
          data['rmp_name'] = this.state.rmp_name;
        }
        break;
    }

    console.log('POST DATATATATATATAT');
    console.log(data);

    axios
      .post(axiosLink, data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            showEventTag: false,
            showCropTag: false,
            showemployeeTag: false,
            showrawmaterialTag: false,
            showrawmaterialProvTag: false,
            table: '',
            crudOp: '',
          });
          alert('Operation Successful');
        } else {
          alert('Failed to perform operation');
        }
      })
      .catch((error) => {
        alert('Failed to perform operation');
      });
  };

  render() {
    let data = [];
    let redirectVar = null;
    let eventTag = null;
    let cropTag = null;
    let employeeTag = null;
    let rawmaterialTag = null;
    let rawmaterialProvTag = null;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    }

    if (this.state && this.state.showCropTag) {
      cropTag = this.getCropTag();
    }
    if (this.state && this.state.showEventTag) {
      eventTag = this.getEventTag();
    }
    if (this.state && this.state.showrawmaterialTag) {
      rawmaterialTag = this.getRawmaterialTag();
    }
    if (this.state && this.state.showrawmaterialProvTag) {
      rawmaterialProvTag = this.getRawmaterialProvTag();
    }
    if (this.state && this.state.showemployeeTag) {
      employeeTag = this.getEmployeeTag();
    }

    return (
      <div class='container'>
        {redirectVar}
        <NavBar />
        <div className='container'>
          <br />
          <form onSubmit={this.onSubmit}>
            <div class='form-group'>
              Choose Table:
              <select
                id='table_type'
                name='table_type'
                onChange={this.onTableChange}
              >
                <option value='Crop'>Crop</option>
                <option value='Employee'>Employee</option>
                <option value='Event'>Event</option>
                <option value='Raw_Material'>Raw Material</option>
                <option value='Raw_Material_Provider'>
                  Raw Material Provider
                </option>
              </select>
            </div>
            <br />
            <div class='form-group'>
              Choose Operation:
              <select id='op_type' name='op_type' onChange={this.onOpChange}>
                <option value='Create'>Create</option>
                <option value='Update'>Update</option>
                <option value='Delete'>Delete</option>
              </select>
            </div>

            <br />
            <br />
            {cropTag}
            {employeeTag}
            {eventTag}
            {rawmaterialTag}
            {rawmaterialProvTag}
            <div style={{ width: '30%' }}>
              <button class='btn btn-success' type='submit'>
                Submit
              </button>
            </div>
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default Crud;
