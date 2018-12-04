import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Phones/Drawer';
import Loginmodal from './Components/Login/Login';
import Registermodal from './Components/Login/Register';
import Phonesbyname from './Components/Phones/Phonesbyname';

class App extends Component {
  render() {
    return (
          <div> 
            <Navbar/>
           
                <Registermodal/>
                <Loginmodal/>
                <Phonesbyname/>
          </div>
          
    );
  }
}

export default App;
