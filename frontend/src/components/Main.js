import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import EmployeeSignup from './Signup/EmployeeSignup';
import NavBar from './NavBar/Navbar';
import EmployeeHome from './Home/EmployeeHome';
import Crops from './Employee/Crops';

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={NavBar} />
        <Route path='/Signup' component={Signup} />
        <Route path='/EmployeeSignup' component={EmployeeSignup} />
        <Route path='/Home' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/EmployeeHome' component={EmployeeHome} />
        <Route path='/Crops' component={Crops} />
      </Switch>
      {/*<NavLink to='/Home'>Home </NavLink>
      <NavLink to='/Login'>Login </NavLink>
  <NavLink to='/Signup'>Signup </NavLink>*/}
    </div>
  );
};
export default Main;
