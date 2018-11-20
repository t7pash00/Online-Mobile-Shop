import React, { Component } from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Sidebar extends Component {
    constructor() {
        super();
        this.showPhones = this.showPhones.bind(this);
        this.state = {
          tableData: []
        };
        this.showPhones();
      }
    
      showPhones() {
        axios.get(`http://localhost:3000/phones`).then(response => {
          this.setState({ tableData: response.data });
        });
      }
  render() {
    const { tableData } = this.state;
    return (
        <div style={{marginTop:'50px', width:'260px', height: '700px'}}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Samsung" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Apple" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Huawei" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Nokia" />
        </ListItem>
      </List>
      </div>

    );
  }
}

export default Sidebar;
