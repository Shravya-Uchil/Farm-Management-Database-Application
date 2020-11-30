import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import Table8 from './Table8'

class RawMaterialAdmin extends Component {
  constructor(props) {
    super(props);
    this.getAdminRawMaterials = this.getAdminRawMaterials.bind(this);
  }

  getAdminRawMaterials() {
    axios
      .get(`http://localhost:3001/farm/admin/rawmaterials`)
      .then((response) => {
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
  componentWillMount() {
    this.getAdminRawMaterials();
  }

  render() {
    let allRM = [];
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
    }

    let tabledata = [];
    if (this.state && this.state.allRawMaterial)
    {
      tabledata = this.state.allRawMaterial;
    }

    return (
      <div class='container'>
        {redirectVar}
        <NavBar />
        <div class='login-form'>
          <br />
          <br />
          <h3>All Raw Materials</h3>
          <br />
          <br />
          <div class='d-flex flex-row'>
            <table class='table'>
              <thead>
                <tr>
                  <th>Raw Material Details</th>
                </tr>
              </thead>
              <tbody>
                {/*Display the Tbale row based on data recieved*/}
                <Table8 data={tabledata}/>
              </tbody>
            </table>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default RawMaterialAdmin;
