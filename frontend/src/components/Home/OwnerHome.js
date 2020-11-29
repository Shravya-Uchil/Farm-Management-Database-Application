import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import axios from 'axios';

//Define a Login Component
class OwnerHome extends Component {
  constructor(props) {
    super(props);
  }

  getTopSoldCrops() {
    axios
      .get(`http://localhost:3001/farm/admin/topSoldCrops`)
      .then((response) => {
        if (response.data) {
          this.setState({
            topSoldCrops: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getTopProfitCrops() {
    axios
      .get(`http://localhost:3001/farm/admin/topProfitCrops`)
      .then((response) => {
        if (response.data) {
          this.setState({
            topProfitCrops: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getLeastSoldCrops() {
    axios
      .get(`http://localhost:3001/farm/admin/leastSoldCrops`)
      .then((response) => {
        if (response.data) {
          this.setState({
            leastSoldCrops: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getRMBelowThreshold() {
    axios
      .get(`http://localhost:3001/farm/admin/RMBelowThreshold`)
      .then((response) => {
        if (response.data) {
          this.setState({
            RMBelowThreshold: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getTopRegisteredEvents() {
    axios
      .get(`http://localhost:3001/farm/admin/topRegisteredEvents`)
      .then((response) => {
        if (response.data) {
          this.setState({
            topRegisteredEvents: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getTopCostOrders() {
    axios
      .get(`http://localhost:3001/farm/admin/topCostOrders`)
      .then((response) => {
        if (response.data) {
          this.setState({
            topCostOrders: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getTopSoldCrops();
    this.getTopProfitCrops();
    this.getLeastSoldCrops();
    this.getRMBelowThreshold();
    this.getTopRegisteredEvents();
    this.getTopCostOrders();
  }

  render() {
    let topSoldCrops = [];
    let topProfitCrops = [];
    let leastSoldCrops = [];
    let RMBelowThreshold = [];
    let topRegisteredEvents = [];
    let topCostOrders = [];

    let redirectVar = null;
    if (!cookie.load('cookie')) {
      redirectVar = <Redirect to='/login' />;
    }
    if (this.state && this.state.topSoldCrops) {
      topSoldCrops = this.state.topSoldCrops.map((crop) => {
        return (
          <tr>
            <td>{JSON.stringify(crop, undefined, 4)}</td>
          </tr>
        );
      });
    }
    if (this.state && this.state.topProfitCrops) {
      topProfitCrops = this.state.topProfitCrops.map((crop) => {
        return (
          <tr>
            <td>{JSON.stringify(crop, undefined, 4)}</td>
          </tr>
        );
      });
    }
    if (this.state && this.state.leastSoldCrops) {
      leastSoldCrops = this.state.leastSoldCrops.map((crop) => {
        return (
          <tr>
            <td>{JSON.stringify(crop, undefined, 4)}</td>
          </tr>
        );
      });
    }
    if (this.state && this.state.RMBelowThreshold) {
      RMBelowThreshold = this.state.RMBelowThreshold.map((rm) => {
        return (
          <tr>
            <td>{JSON.stringify(rm, undefined, 4)}</td>
          </tr>
        );
      });
    }
    if (this.state && this.state.topRegisteredEvents) {
      topRegisteredEvents = this.state.topRegisteredEvents.map((evt) => {
        return (
          <tr>
            <td>{JSON.stringify(evt, undefined, 4)}</td>
          </tr>
        );
      });
    }
    if (this.state && this.state.topCostOrders) {
      topCostOrders = this.state.topCostOrders.map((ord) => {
        return (
          <tr>
            <td>{JSON.stringify(ord, undefined, 4)}</td>
          </tr>
        );
      });
    }
    return (
      <div class='container'>
        {redirectVar}
        <div class='login-form'>
          <br />
          <br />
          <h3>Welcome to the Farm Management Webpage</h3>
          <br />
          <br />
          <div class='d-flex flex-row'>
            <table class='table'>
              <thead>
                <tr>
                  <th>Most Sold Crops</th>
                </tr>
              </thead>
              <tbody>
                {/*Display the Tbale row based on data recieved*/}
                {topSoldCrops}
              </tbody>
            </table>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <table class='table'>
              <thead>
                <tr>
                  <th>Least Sold Crops</th>
                </tr>
              </thead>
              <tbody>
                {/*Display the Tbale row based on data recieved*/}
                {leastSoldCrops}
              </tbody>
            </table>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <table class='table'>
              <thead>
                <tr>
                  <th>Most Profitable Crops</th>
                </tr>
              </thead>
              <tbody>
                {/*Display the Tbale row based on data recieved*/}
                {topProfitCrops}
              </tbody>
            </table>
          </div>
          <div class='d-flex flex-row'>
            <table class='table'>
              <thead>
                <tr>
                  <th>Depleting Raw Materials!!</th>
                </tr>
              </thead>
              <tbody>
                {/*Display the Tbale row based on data recieved*/}
                {RMBelowThreshold}
              </tbody>
            </table>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <table class='table'>
              <thead>
                <tr>
                  <th>Most Popular Events</th>
                </tr>
              </thead>
              <tbody>
                {/*Display the Tbale row based on data recieved*/}
                {topRegisteredEvents}
              </tbody>
            </table>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <table class='table'>
              <thead>
                <tr>
                  <th>Most Profitable Orders</th>
                </tr>
              </thead>
              <tbody>
                {/*Display the Tbale row based on data recieved*/}
                {topCostOrders}
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
//export Login Component
export default OwnerHome;
