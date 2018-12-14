import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
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
        document.location = "/login";
      });
  };

  render() {
        if (localStorage.usertoken){document.location="/profile"}

    return (     
      <div class="container mb-4">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card card-body bg-light mt-5">
              <h2>Create Account</h2>
              <p>Fill in this form to register</p>
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label for="firstname">First Name</label>
                  <input type="text" required className="form-control form-control-lg" placeholder="Firstname" name="firstname" onChange={this.onChange} />
                </div>
                <div class="form-group">
                  <label for="lastname">Last Name</label>
                  <input type="text" required className="form-control form-control-lg" placeholder="Lastname" name="lastname" onChange={this.onChange} />
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" required className="form-control form-control-lg" placeholder="Email" name="email" onChange={this.onChange} />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" required className="form-control form-control-lg" placeholder="Password" name="password" onChange={this.onChange} />
                </div>
                <div class="form-group">
                  <label for="phone">Contact No.</label>
                  <input type="tel" required className="form-control form-control-lg" placeholder="Phone" name="phone" onChange={this.onChange} />
                </div>
                <div class="form-group">
                  <label for="streetAddress">Street Address</label>
                  <input type="text" required className="form-control form-control-lg" placeholder="Street Address" name="streetAddress" onChange={this.onChange} />
                </div>
                <div class="form-group">
                  <label for="city">City</label>
                  <input type="text" required className="form-control form-control-lg" placeholder="City" name="city" onChange={this.onChange} />
                </div>
                <div class="form-group">
                  <label for="postalCode">Postal Code</label>
                  <input type="text" required className="form-control form-control-lg" placeholder="Postal Code" name="postalCode" onChange={this.onChange} />
                </div>

                <div class="form-row">
                  <div class="col">
                    <button type="submit" class="btn btn-success btn-block">Register</button>
                  </div>
                  <div class="col">
                    <a href="/login" class="btn btn-light btn-block">Have an account? Login</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;            
                                             
                                        
                                    
                                       

                               
                                            
                         