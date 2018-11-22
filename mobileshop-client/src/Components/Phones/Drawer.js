import React, { Component } from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Navbar extends Component {
  render() {
    return (
        <AppBar>
        <Toolbar>
          
          <Typography variant="h6" color="inherit">
            MobilePhone
          </Typography>
          <div style={{position:'absolute',right:'20px'}}> 
          <Button color="inherit"><a data-toggle="modal" data-target="#loginpage">Login</a></Button>
          <Button color="inherit"><a data-toggle="modal" data-target="#registerpage">Register</a></Button>   
          </div>
          
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
