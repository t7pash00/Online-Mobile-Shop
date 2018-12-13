import React, { Component } from 'react';
import axios from 'axios';



class Loginmodal extends Component {
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
    const { customer_id, firstname, lastname, email, password, phone, streetAddress, city, postalCode } = this.state;
    console.log(email);
  
    var apiBaseUrl = "http://localhost:3000/customers/";
    var self = this;
    var payload = {
      "email": this.state.email,
      "pass": this.state.password
    }


    axios.post(apiBaseUrl + 'loginby', payload)
    .then(function (response) {
      console.log(response);
    
      if(response.data[0])
      {


        alert("You are welcome.");
      }else{
        alert("invalid password");
      }
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
    return (


      <form onSubmit={this.handleSubmit}>



        <div id="loginpage" className="modal fade" role="dialog">
          <div className="modal-dialog">


            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Login</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">

                <div className="form-group row">
                  <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">Email :</label>
                  <div className="col-sm-7">
                    <input type="text" className="form-control form-control-sm" placeholder="email" name="email" onChange={this.onChange} />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">Password :</label>
                  <div className="col-sm-7">
                    <input type="password" className="form-control form-control-sm" placeholder="password" name="password" onChange={this.onChange} />
                  </div>
                </div>

              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button className="btn btn-success" type="submit">Login</button>

              </div>
            </div>

          </div>
        </div>
      </form>

    );
  }
}

export default Loginmodal;
