import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';

class Registermodal extends Component {
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
                            
                            
                          
                                <div id="registerpage" class="modal fade" role="dialog">
                                  <div class="modal-dialog">
                                
                                  
                                    <div class="modal-content">
                                      <div class="modal-header">
                                          <h4 class="modal-title">Registration</h4>
                                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                                      </div>
                                      <div class="modal-body">
                                  
                                
                                            <label>
                                          firstname
                                              <input type="text" name="firstname" onChange={this.onChange} />
                                              <br/>
                                            </label>
                                            <label>
                                            lastname
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
                                              <input type="tel" name="phone" onChange={this.onChange} />
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
                                            <br/>
                                            <label>
                                            postalCode: </label>
                                              <input type="text" name="postalCode" onChange={this.onChange} />
                                              <br/> 
                                              </div>

                                            <div class="modal-footer">
                                              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                              <button className="btn btn-success" type="submit">Register</button>
                                              
                                              </div>
                                            </div>
                                        
                                            </div>
                                         </div>
                                 </form>       
                                             
                                            );
                                        }
                                    }
                                    
                             export default Registermodal;            
                                             
                                        
                                    
                                       

                               
                                            
                         