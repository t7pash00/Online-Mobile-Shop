import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Phones/Drawer';
import Sidebar from './Components/Phones/Drawer1';
import Loginmodal from './Components/Login/Login';
import Registermodal from './Components/Login/Register';

class App extends Component {
  render() {
    return (
          <div> 
            <Navbar/>
            <Sidebar/>
                <Registermodal/>
                <Loginmodal/>

          </div>
          
    );
  }
}

export default App;
