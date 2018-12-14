import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Phones from './Components/Phones/Phones';
import Profile from './Components/Profile/Profile';
import { Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div style={{marginTop: '70px'}}>
          <Route exact path="/" component={Phones} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/phones" component={Phones} />
        </div>
      </div>
    );
  }
}

export default App;
