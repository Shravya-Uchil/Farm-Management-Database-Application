import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import EmployeeSignup from './Signup/EmployeeSignup';
import NavBar from './NavBar/Navbar';
import EmployeeHome from './Home/EmployeeHome';
import OwnerHome from './Home/OwnerHome';
import Crops from './Employee/Crops';
import Events from './Employee/Events';
import RawMaterials from './Employee/RawMaterials';
import AllCrops from './Customer/AllCrops';
import AllEvents from './Customer/AllEvents';
import CustomerOrder from './Order/CustomerOrder';
import Orders from './Employee/Orders';
import CustomerDetails from './Admin/CustomerDetails';
import AdminOps from './Admin/Crud';
import RawMaterialAdmin from './Admin/RawMaterialAdmin';

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
        <Route path='/OwnerHome' component={OwnerHome} />
        <Route path='/Crops' component={Crops} />
        <Route path='/Events' component={Events} />
        <Route path='/RawMaterials' component={RawMaterials} />
        <Route path='/AllCrops' component={AllCrops} />
        <Route path='/AllEvents' component={AllEvents} />
        <Route path='/CustomerOrder' component={CustomerOrder} />
        <Route path='/Orders' component={Orders} />
        <Route path='/CustomerDetails' component={CustomerDetails} />
        <Route path='/Crud' component={AdminOps} />
        <Route path='/RawMaterialAdmin' component={RawMaterialAdmin} />
      </Switch>
      {/*<NavLink to='/Home'>Home </NavLink>
      <NavLink to='/Login'>Login </NavLink>
  <NavLink to='/Signup'>Signup </NavLink>*/}
    </div>
  );
};
export default Main;
