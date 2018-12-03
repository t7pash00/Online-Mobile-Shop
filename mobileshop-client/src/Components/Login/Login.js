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
      
                            <form onSubmit={this.handleSubmit}>
                            
                           
                          
                                <div id="loginpage" class="modal fade" role="dialog">
                                  <div class="modal-dialog">
                                
                                  
                                    <div class="modal-content">
                                      <div class="modal-header">
                                          <h4 class="modal-title">Login</h4>
                                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                                      </div>
                                      <div class="modal-body">
                                  
                                      <div class="form-group row">
                                                  <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Email :</label>
                                                <div class="col-sm-7">
                                                    <input type="text" class="form-control form-control-sm"  placeholder="email" onChange={this.onChange}/>
                                                </div>
                                              </div>
                                          
                                              <div class="form-group row">
                                                  <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Password :</label>
                                                <div class="col-sm-7">
                                                    <input type="password" class="form-control form-control-sm"  placeholder="password" onChange={this.onChange}/>
                                                </div>
                                              </div>
                                             
                                              </div>

                                            <div class="modal-footer">
                                              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
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
                                             