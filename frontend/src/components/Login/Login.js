// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';

//Define a Login Component
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitLogin = (e) => {
    e.preventDefault();
    let typeVal = 0;
    if (document.getElementById('login_type').value === 'Employee') {
      typeVal = 1;
    }
    console.log('typeVal');
    console.log(typeVal);
    const data = {
      email_id: this.state.UEmail,
      password: this.state.password,
      type: typeVal,
    };
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios
      .post('http://localhost:3001/farm/login/customer', data)
      .then((response) => {
        console.log('Status Code : ', response.status);
        console.log(response.data);
        if (response.status === 200) {
          this.setState({
            loginDoneOnce: 1,
          });
          localStorage.setItem('email_id', response.data.email_id);
          if (response.data.customer_id) {
            localStorage.setItem('customer_id', response.data.customer_id);
            localStorage.setItem('login_type', 0);
            localStorage.setItem('customer_type', response.data.customer_type);
          } else {
            localStorage.setItem('employee_id', response.data.employee_id);
            localStorage.setItem('login_type', 1);
            if (response.data.owner === 1) {
              localStorage.setItem('isOwner', 1);
            }
          }
          this.props.history.replace('/home');
        } else {
          this.setState({
            message: 'Cannot recognize username or password!!!',
          });
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({
          message: 'Cannot recognize username or password!!!',
        });
      });
  };

  render() {
    let message = '';
    let redirectVar = null;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    }
    if (this.state && this.state.message) {
      message = this.state.message;
    }
    return (
      <div class='container'>
        <div class='login-form'>
          {redirectVar}
          <NavBar />
          <div class='main-div'>
            <div style={{ color: '#ff0000' }}>{message}</div>
            <br />
            <div class='form-group'>
              Choose login type:
              <select id='login_type' name='type'>
                <option value='Customer'>Customer</option>
                <option value='Employee'>Employee</option>
              </select>
              <br />
            </div>
            <div class='panel'>
              <h2>User Login</h2>
              <p>Please enter your username and password</p>
            </div>

            <div class='form-group'>
              <input
                type='text'
                class='form-control'
                name='UEmail'
                onChange={this.onChange}
                placeholder='Email Id'
              />
            </div>
            <div class='form-group'>
              <input
                type='password'
                class='form-control'
                name='password'
                onChange={this.onChange}
                placeholder='Password'
              />
            </div>
            <button onClick={this.submitLogin} class='btn btn-primary'>
              Login
            </button>

            <div class='login-link'>
              <Link to='/signup'> Customer Sign up </Link>
            </div>
            <div class='login-link'>
              <Link to='/EmployeeSignup'> Employee Sign up </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//export Login Component
export default Login;
