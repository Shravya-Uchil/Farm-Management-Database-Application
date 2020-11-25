import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";

class Home extends Component {
  render() {
    // let redirectVar = null;
    // if (!cookie.load("cookie")) {
    //   redirectVar = <Redirect to="/Login" />;
    // }
    return (
      <div className="container">
        {/* {redirectVar} */}
        <h2> This is the Home Page.</h2>
        <p> Employees can click login to sign on to the management system or click signup to create an account.</p>
      </div>
    );
  }
}
//export Home Component
export default Home;
