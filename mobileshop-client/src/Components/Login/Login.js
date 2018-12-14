import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
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
    this.setState({
      state
    });
  };

  handleSubmit = event => {
    console.log("handleSubmit, event", event);
    event.preventDefault(); // Let's stop this event.
    event.stopPropagation(); // Really this time.
    const { email } = this.state;
    console.log(email);
  
    var apiBaseUrl = "http://localhost:3000/customers/";
    var payload = {
      "email": this.state.email,
      "pass": this.state.password
    }

    axios.post(apiBaseUrl + 'loginby', payload)
    .then(response => {
      if(response.data[0]) {
        document.location = "/profile";
      }
      else {
        alert ('Invalid email or password')
      }
      localStorage.setItem('usertoken', response.data)
      return response.data
      
    })
    .catch(function (error) {
      console.log(error);
    });


/* 
apiBaseUrl+= 'loginby/email/'+this.state.email+'/pass/'+this.state.password;
    var jqxhr = axios.post( apiBaseUrl, function() {
      alert( "success" );
    })
      .done(function() {
        alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        alert( "finished" );
      }); */
   /*  axios.post(apiBaseUrl + 'loginby/email/'+this.state.email+'/pass/'+this.state.password, {})
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
          console.log("Login successfull");

        }
        else if (response.data.code == 204) {
          console.log("Username password do not match");
          alert("username password do not match")
        }
        else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      }); */
  }
  //axios
  //   .post('http://localhost:3000/customers', {customer_id, firstname, lastname, email, password, phone, streetAddress, city, postalCode })
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   });

  render() {
    if (localStorage.usertoken){document.location="/profile"}
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card card-body bg-light mt-5">
              <h2>Login</h2>
              <p>Fill in your credentials</p>
              <form onSubmit={this.handleSubmit}>   
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" class="form-control form-control-lg" required name="email" onChange={this.onChange} />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" name="password" required class="form-control form-control-lg"  onChange={this.onChange} />
                </div>
                <div class="form-row">
                  <div class="col">
                    <button type="submit" class="btn btn-success btn-block">Login</button>
                  </div>
                  <div class="col">
                    <a href="/register" class="btn btn-light btn-block">No account? Register</a>
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

export default Login;
