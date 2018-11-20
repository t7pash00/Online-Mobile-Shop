import React, { Component } from 'react';
import axios from 'axios';

class LoginCustomer extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        email: '',
        password: ''
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    axios
      .post('http://localhost:3000/customers', { email, password })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
    <div className="container">
    <h2>LoginCustomer</h2>
  

    <form onSubmit={this.handleSubmit}>
      <label>
    email:<br/>
        <input type="text" name="email" onChange={this.onChange} />
        <br/>
        </label>
        <label>
   password:<br/>
        <input type="text" name="password" onChange={this.onChange} />
        <br/>
        </label>
      <button className="button" type="submit">
      Submit
    </button>
    </form>
  </div>
);
}
}

export default LoginCustomer;
