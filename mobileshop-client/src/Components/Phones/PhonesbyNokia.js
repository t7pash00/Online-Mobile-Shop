import React, { Component } from 'react';
import axios from 'axios';

import './Displayphones.css';



class PhonesbyNokia extends Component {
  constructor() {
    super();
    this.showNokia = this.showNokia.bind(this);
    this.state = {

      nokia: []
    };
    this.showNokia();
  }
  showNokia() {
    axios.get("http://localhost:3000/phones/phones_by_brand/Nokia").then(res => {
      const nokia = res.data;
      this.setState({ nokia });
    });
  }
  
  
  render() {
    return (
      <div className="main-wrap "  >
        <div class="container-fluid">
          <div>

            <div class="row">
              {this.state.nokia.map(nokia => (
                <div class="col-md-4 mt-3" key={nokia.phone_id}>

                  <div class="card profile-card-5">
                    <div class="card-img-block">
                      <img class="card-img-top" style={{ width: "400px", height: "400px" }} src={`http://localhost:3001/Assets/Images/${nokia.imagename}`} />
                    </div>
                    <div class="card-body pt-0">
                      <h5 class="card-title">{nokia.brand_name}</h5>
                      <p class="card-text">{nokia.model_name}</p>
                      <p class="card-text">€{nokia.price}</p>
                      <a class="btn btn-success" data-toggle="modal" data-target={`#nokiadetail${nokia.phone_id}`}>More Details</a>



                    </div>
                  </div>
                  <div id={`nokiadetail${nokia.phone_id}`} class="modal fade" role="dialog">
                    <div class="modal-dialog">


                      <div class="modal-content">
                        <div class="modal-header" >
                          <h4 class="modal-title">Details</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <p class="col-sm-5 text"><b>Brand Name:</b></p>
                            <p class="col-sm-7 textline">{nokia.brand_name}</p>
                          </div>

                          <div class="row">
                            <p class="col-sm-5 text"><b>Model Name:</b></p>
                            <p class="col-sm-7 textline">{nokia.model_name}</p>
                          </div>

                          <div class="row">
                            <p class="col-sm-5 text"><b>Storage Capacity:</b></p>
                            <p class="col-sm-7 textline">{nokia.storage_capacity}</p>
                          </div>

                          <div class="row">
                            <p class="col-sm-5 text"><b>Color:</b></p>
                            <p class="col-sm-7 textline">{nokia.color}</p>
                          </div>

                          <div class="row">
                            <p class="col-sm-5 text"><b>Price:</b></p>
                            <p class="col-sm-7 textline">€{nokia.price}</p>
                          </div>
                        </div>

                        <div class="modal-footer">
                          <a class="btn btn-default" data-dismiss="modal">Close</a>
                          <a class="btn btn-success" data-toggle="modal" data-target={`#buynokia${nokia.phone_id}`} data-dismiss="modal">Buy</a>
                        </div>

                      </div>
                    </div>

                  </div>
                  <div id={`buynokia${nokia.phone_id}`} class="modal fade" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4 class="modal-title">Payment Confirmation</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">

                          <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">
                              Card Name:
                          </label>
                            <div class="col-sm-8">
                              <input type="text" class="form-control form-control-sm" name=" Credit Card Name" placeholder="Fill Card Name" onChange={this.onChange} />
                            </div>
                          </div>

                          <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">
                              Card Number:
                          </label>

                            <div class="col-sm-8" >
                              <input type="text" class="form-control form-control-sm" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={this.onChange} />
                            </div>
                          </div>

                          <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">
                              CVV:
                          </label>
                            <div class="col-sm-8" >
                              <input type="number" class="form-control form-control-sm" name="Card Verification Value" placeholder="cvv" maxlength="3" size="2" onChange={this.onChange} />
                            </div>
                          </div>

                          <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">
                              Expire Date:
                          </label>
                            <div class="col-sm-8" >
                              <span class="expiration" >
                                <input type="text" name="month" placeholder="MM" maxlength="2" size="2" />
                                <span>/</span>
                                <input type="text" name="year" placeholder="YY" maxlength="2" size="2" />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="modal-footer">
                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button className="btn btn-success" type="submit">Pay</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              ))}

            </div>
          </div>
        </div>
      </div>

    );
  }
}




export default PhonesbyNokia;
