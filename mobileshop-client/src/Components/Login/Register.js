import React, { Component } from 'react';
import axios from 'axios';

class AddCustomer extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        customer_id: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
        streetAddress: '',
        city: '',
        postalCode: ''
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = event => {
    event.preventDefault();

    const { customer_id, firstname, lastname, email, password, phone, streetAddress, city, postalCode } = this.state;

    axios
      .post('http://localhost:3000/customers', { customer_id, firstname, lastname, email, password, phone, streetAddress, city, postalCode })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="container">
        <h2>Add Customer</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
<<<<<<< HEAD
        firstname
=======
        <b>firstname</b>
>>>>>>> master
            <input type="text" name="firstname" onChange={this.onChange} />
            <br/>
          </label>
          <label>
<<<<<<< HEAD
          lastname
=======
          <b>lastname</b>
>>>>>>> master
            <input type="text" name="lastname" onChange={this.onChange} />
            <br/>
          </label>
          <label>
          email:
            <input type="text" name="email" onChange={this.onChange} />
            <br/>
            </label>
            <label>
            password:
            <input type="text" name="password" onChange={this.onChange} />
            <br/>
            </label>
            <label>
        phone:
            <input type="number" name="phone" onChange={this.onChange} />
            <br/>
          </label>
          <label>
        streetAddress:
            <input type="text" name="streetAddress" onChange={this.onChange} />
            <br/>
          </label>
          <label>
          city:
            <input type="text" name="city" onChange={this.onChange} />
            <br/>
          </label>
          <label>
          postalCode:
            <input type="text" name="postalCode" onChange={this.onChange} />
            <br/>
          </label>
          <button className="button" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddCustomer;
