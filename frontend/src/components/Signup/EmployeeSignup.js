// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import axios from 'axios';

class EmployeeSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    console.log('Submitting EMPLOYEE info');
    //prevent page from refresh
    e.preventDefault();
    console.log('P1:' + this.state.EPassword);
    console.log('P2:' + this.state.EPasswordRe);
    if (this.state.EPassword !== this.state.EPasswordRe) {
      alert('Password miss match!!!');
      return;
    }
    const data = {
      emp_name: this.state.EFName + ' ' + this.state.ELName,
      emp_designation: this.state.EDesignation,
      email_id: this.state.EEmail,
      password: this.state.EPassword,
    };
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios
      .post('http://localhost:3001/farm/signup/employee', data)
      .then((response) => {
        console.log('Status Code : ', response.status);
        if (response.status === 200) {
          this.props.history.replace('/login');
        } else {
          alert('status not 200!!!');
        }
      })
      .catch((e) => {
        console.log(e);
        alert('Failed to signup!!!');
      });
  };

  render() {
    return (
      <div>
        <br />
        <div className='container'>
          <h2 id='signup'>Sign up</h2>
          <br />
          <form onSubmit={this.onSubmit}>
            <div style={{ width: '30%' }} class='form-group'>
              <input
                type='text'
                class='form-control'
                name='EFName'
                onChange={this.onChange}
                id='EFName'
                placeholder='First Name'
                required
              />
            </div>
            <br />
            <div style={{ width: '30%' }} class='form-group'>
              <input
                type='text'
                class='form-control'
                name='ELName'
                onChange={this.onChange}
                id='ELName'
                placeholder='Last Name'
                required
              />
            </div>
            <br />
            <div style={{ width: '30%' }} class='form-group'>
              <input
                type='text'
                class='form-control'
                name='EDesignation'
                onChange={this.onChange}
                id='EDesignation'
                placeholder='Designation'
                required
              />
            </div>
            <br />
            <div style={{ width: '30%' }} class='form-group'>
              <input
                type='text'
                class='form-control'
                name='EEmail'
                onChange={this.onChange}
                id='EEmail'
                placeholder='Email Id'
                required
              />
            </div>
            <br />
            <div style={{ width: '30%' }} class='form-group'>
              <input
                type='password'
                class='form-control'
                name='EPassword'
                onChange={this.onChange}
                id='EPassword'
                placeholder='Password'
                required
              />
            </div>
            <br />
            <div style={{ width: '30%' }} class='form-group'>
              <input
                type='password'
                class='form-control'
                name='EPasswordRe'
                onChange={this.onChange}
                id='EPasswordRe'
                placeholder='Re enter Password'
                required
              />
            </div>
            <br />
            <div style={{ width: '30%' }}>
              <button class='btn btn-success' type='submit'>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EmployeeSignup;
