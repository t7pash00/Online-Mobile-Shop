import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginCustomer from './Components/Login/Login';
import Registermodal from './Components/Login/Register';
import Navbar from './Components/Phones/Drawer';
import Sidebar from './Components/Phones/Drawer1';
import Displayphones from './Components/Phones/Displayphones';

class App extends Component {
  render() {
    return (
          <div> 
                <Navbar/>
                <Sidebar/>
                <Displayphones/>
                <Registermodal/>
                <LoginCustomer/>
          </div>
          
    );
  }
}

export default App;
