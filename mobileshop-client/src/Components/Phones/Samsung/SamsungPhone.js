import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardTitle, CardActions, CardText, CardMenu, Button, IconButton } from 'react-mdl';

class SamsungPhone extends Component {
  constructor() {
    super();
    this.showSamsung = this.showSamsung.bind(this);
    this.state = {
      samsung: []
    };
    this.showSamsung();
  }
  showSamsung() {
    axios.get("http://localhost:3000/phones/phones_by_brand/Samsung ").then(res => {
      const samsung = res.data;
      this.setState({ samsung });
    });
  }

  render() {
    return (
      <div className="main-wrap">
        <div className="row">
          {this.state.samsung.map(samsung => (
            <div className="col-md-4 mt-3" key={samsung.phone_id}>
              <Card shadow={10} style={{width: 'auto', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '250px', width: '200px', margin: '0 auto',  background: `url(http://localhost:3001/Assets/Images/${samsung.imagename}) center / contain no-repeat`}}></CardTitle>
                <CardTitle style={{color: '#000', padding: 0, paddingLeft: '1em'}}>{samsung.brand_name}</CardTitle>
                <CardText>
                  <h4>{samsung.model_name}</h4>
                  <p className="card-text">€ {samsung.price}</p>
                </CardText>
                <CardActions border>
                  <Button colored data-toggle="modal" data-target={`#samsungdetail${samsung.phone_id}`}>More Details</Button>
                </CardActions>
                <CardMenu style={{color: '#000'}}>
                  <IconButton name="more_vert" style={{color: '#000'}} data-toggle="modal" data-target={`#samsungdetail${samsung.phone_id}`} />
                </CardMenu>
              </Card>
              <div id={`samsungdetail${samsung.phone_id}`} className="modal fade" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header" >
                      <h4 className="modal-title">Details</h4>
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                      <div className="row">
                        <p className="col-md-5 text"><b>Brand Name:</b></p>
                        <p className="col-md-7 textline">{samsung.brand_name}</p>
                      </div>
                      <div className="row">
                        <p className="col-md-5 text"><b>Model Name:</b></p>
                        <p className="col-md-7 textline">{samsung.model_name}</p>
                      </div>
                      <div className="row">
                        <p className="col-md-5 text"><b>Storage Capacity:</b></p>
                        <p className="col-md-7 textline">{samsung.storage_capacity}</p>
                      </div>
                      <div className="row">
                        <p className="col-md-5 text"><b>Color:</b></p>
                        <p className="col-md-7 textline">{samsung.color}</p>
                      </div>
                      <div className="row">
                        <p className="col-md-5 text"><b>Price:</b></p>
                        <p className="col-md-7 textline">€{samsung.price}</p>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <Button style={{fontFamily: 'Raleway'}} raised data-dismiss="modal">
                        Close
                      </Button>
                      <Button style={{fontFamily: 'Raleway'}} raised colored data-toggle="modal" data-target={`#buysamsung${samsung.phone_id}`} data-dismiss="modal">
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div id={`buysamsung${samsung.phone_id}`} className="modal fade" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Payment Confirmation</h4>
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                      <div className="form-group row">
                        <label htmlFor="colFormLabelSm" className="col-md-3 col-form-label col-form-label-md">
                          Card Name:
                      </label>
                        <div className="col-md-8">
                          <input type="text" className="form-control form-control-md" name=" Credit Card Name" placeholder="Fill Card Name" onChange={this.onChange} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="colFormLabelSm" className="col-md-3 col-form-label col-form-label-md">
                          Card Number:
                        </label>
                        <div className="col-md-8" >
                          <input type="text" className="form-control form-control-md" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={this.onChange} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="colFormLabelSm" className="col-md-3 col-form-label col-form-label-md">
                          CVV:
                      </label>
                        <div className="col-md-8" >
                          <input type="number" className="form-control form-control-md" name="Card Verification Value" placeholder="cvv" size="2" onChange={this.onChange} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="colFormLabelSm" className="col-md-3 col-form-label col-form-label-md">
                          Expire Date:
                        </label>
                        <div className="col-md-8" >
                          <span className="expiration" >
                            <input type="text" name="month" placeholder="MM" size="2" />
                            <span>/</span>
                            <input type="text" name="year" placeholder="YY" size="2" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <Button style={{fontFamily: 'Raleway'}} raised data-dismiss="modal">
                        Close
                      </Button>
                      <Button style={{fontFamily: 'Raleway' }} className="btn-success text-light" raised type="submit">
                        Pay
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SamsungPhone;


























