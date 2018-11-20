import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Drawer';
import Sidebar from './Components/Drawer1';
import AddCustomer from './Components/Login/Register';

class App extends Component {
  render() {
    return (
          <div> 
                <Navbar/>
                <Sidebar/>
                <AddCustomer/>
          </div>
          
    );
  }
}

export default App;
