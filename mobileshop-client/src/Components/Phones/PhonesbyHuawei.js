import React, { Component } from 'react';
import axios from 'axios';

import './Displayphones.css';



class PhonesbyHuawei extends Component {
  constructor() {
    super();
    this.showHuawei = this.showHuawei.bind(this);
    this.state = {

      huawei: []
    };
    this.showHuawei();
  }
  showHuawei() {
    axios.get("http://localhost:3000/phones/phones_by_brand/Huawei").then(res => {
      const huawei = res.data;
      this.setState({ huawei });
    });
  }
  
  
  render() {
    return (
      <div className="main-wrap "  >
        <div className="container-fluid">
          <div>

            <div className="row">
              {this.state.huawei.map(huawei => (
                <div className="col-md-4 mt-3" key={huawei.phone_id}>

                  <div className="card profile-card-5">
                    <div className="card-img-block">
                      <img className="card-img-top" style={{ width: "400px", height: "400px" }} src={`http://localhost:3001/Assets/Images/${huawei.imagename}`} />
                    </div>
                    <div className="card-body pt-0">
                      <h5 className="card-title">{huawei.brand_name}</h5>
                      <p className="card-text">{huawei.model_name}</p>
                      <p className="card-text">€{huawei.price}</p>
                      <a className="btn btn-success" data-toggle="modal" data-target={`#huaweidetail${huawei.phone_id}`}>More Details</a>



                    </div>
                  </div>
                  <div id={`huaweidetail${huawei.phone_id}`} className="modal fade" role="dialog">
                    <div className="modal-dialog">


                      <div className="modal-content">
                        <div className="modal-header" >
                          <h4 className="modal-title">Details</h4>
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <p className="col-sm-5 text"><b>Brand Name:</b></p>
                            <p className="col-sm-7 textline">{huawei.brand_name}</p>
                          </div>

                          <div className="row">
                            <p className="col-sm-5 text"><b>Model Name:</b></p>
                            <p className="col-sm-7 textline">{huawei.model_name}</p>
                          </div>

                          <div className="row">
                            <p className="col-sm-5 text"><b>Storage Capacity:</b></p>
                            <p className="col-sm-7 textline">{huawei.storage_capacity}</p>
                          </div>

                          <div className="row">
                            <p className="col-sm-5 text"><b>Color:</b></p>
                            <p className="col-sm-7 textline">{huawei.color}</p>
                          </div>

                          <div className="row">
                            <p className="col-sm-5 text"><b>Price:</b></p>
                            <p className="col-sm-7 textline">€{huawei.price}</p>
                          </div>
                        </div>

                        <div className="modal-footer">
                          <a className="btn btn-default" data-dismiss="modal">Close</a>
                          <a className="btn btn-success" data-toggle="modal" data-target={`#buyhuawei${huawei.phone_id}`} data-dismiss="modal">Buy</a>
                        </div>

                      </div>
                    </div>

                  </div>
                  <div id={`buyhuawei${huawei.phone_id}`} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">Payment Confirmation</h4>
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">

                          <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">
                              Card Name:
                          </label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control form-control-sm" name=" Credit Card Name" placeholder="Fill Card Name" onChange={this.onChange} />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">
                              Card Number:
                          </label>

                            <div className="col-sm-8" >
                              <input type="text" className="form-control form-control-sm" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={this.onChange} />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">
                              CVV:
                          </label>
                            <div className="col-sm-8" >
                              <input type="number" className="form-control form-control-sm" name="Card Verification Value" placeholder="cvv" maxlength="3" size="2" onChange={this.onChange} />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">
                              Expire Date:
                          </label>
                            <div className="col-sm-8" >
                              <span className="expiration" >
                                <input type="text" name="month" placeholder="MM" maxlength="2" size="2" />
                                <span>/</span>
                                <input type="text" name="year" placeholder="YY" maxlength="2" size="2" />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="modal-footer">
                          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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




export default PhonesbyHuawei;


























