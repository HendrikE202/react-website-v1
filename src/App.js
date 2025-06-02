import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Community from './components/pages/Community';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import FunctionsFeatures from './components/pages/FunctionsFeatures';
import AboutUs from './components/pages/AboutUs';
import DataSafetyGTC from './components/pages/DataSafetyGTC';
import ContactAndSupport from './components/pages/ContactAndSupport';
 
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/community' component={Community} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/functionsfeatures' component={FunctionsFeatures} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/datasafetygtc' component={DataSafetyGTC} />
          <Route path='/contactandsupport' component={ContactAndSupport} />
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
