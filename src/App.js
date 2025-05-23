import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import FunctionsFeatures from './components/pages/FunctionsFeatures';
import AboutUs from './components/pages/AboutUs';
import DataSafetyGTC from './components/pages/DataSafetyGTC';
 
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/functionsfeatures' component={FunctionsFeatures} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/datasafetygtc' component={DataSafetyGTC} />
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
