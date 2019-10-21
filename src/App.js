import React from "react";

import Home from "./pages/Home";
import Driverlogin from "./pages/Driverlogin";
import DriverRegistration from "./pages/DriverRegistration";

import "./styles/Navbar.css";
import "./styles/logo.png";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (

    <Router>

      <nav className="Navigation">

        
        <div>

        <img className="logo" src={ require('./styles/logo.png') } />
        </div>
       <div>
       
       <Link to="/driverlogin"><button id="button" className="btn btn-md btn-light">Driver Login</button></Link>
        
        <Link to="/driverregistration"><button id="button" className="btn btn-md btn-light">Driver Registration</button></Link>
        <Link to="/"><button id="button" className="btn btn-md btn-light">Home</button></Link>

        

       
        </div>
        
      </nav>

           
    

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/driverlogin">
        <Driverlogin />
      </Route>
      <Route exact path="/driverregistration">
        <DriverRegistration />
      </Route>
    </Switch> 
      </Router >

  )
};

export default App;





