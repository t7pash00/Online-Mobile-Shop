import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Drawer';
import Sidebar from './Components/Drawer1';
import LoginCustomer from './Components/Login/Login';
import Registermodal from './Components/Login/Register';

class App extends Component {
  render() {
    return (
          <div> 
                <Navbar/>
                <Sidebar/>
                <Registermodal/>
                <LoginCustomer/>
          </div>
          
    );
  }
}

export default App;
