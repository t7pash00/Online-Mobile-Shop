import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardTitle, CardActions, CardText, CardMenu, Button, IconButton } from 'react-mdl';

class HuaweiPhone extends Component {
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
      <div className="main-wrap">
        <div className="row">
          {this.state.huawei.map(huawei => (
            <div className="col-md-4 mt-3" key={huawei.phone_id}>
              <Card shadow={10} style={{width: 'auto', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '250px', width: '200px', margin: '0 auto',  background: `url(http://localhost:3001/Assets/Images/${huawei.imagename}) center / contain no-repeat`}}></CardTitle>
                <CardTitle style={{color: '#000', padding: 0, paddingLeft: '1em'}}>{huawei.brand_name}</CardTitle>
                <CardText>
                  <h4>{huawei.model_name}</h4>
                  <p className="card-text">€ {huawei.price}</p>
                </CardText>
                <CardActions border>
                  <Button colored data-toggle="modal" data-target={`#huaweidetail${huawei.phone_id}`}>More Details</Button>
                </CardActions>
                <CardMenu style={{color: '#000'}}>
                  <IconButton name="more_vert" style={{color: '#000'}} data-toggle="modal" data-target={`#huaweidetail${huawei.phone_id}`} />
                </CardMenu>
              </Card>
              <div id={`huaweidetail${huawei.phone_id}`} className="modal fade" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header" >
                      <h4 className="modal-title">Details</h4>
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                      <div className="row">
                        <p className="col-md-5 text"><b>Brand Name:</b></p>
                        <p className="col-md-7 textline">{huawei.brand_name}</p>
                      </div>
                      <div className="row">
                        <p className="col-md-5 text"><b>Model Name:</b></p>
                        <p className="col-md-7 textline">{huawei.model_name}</p>
                      </div>
                      <div className="row">
                        <p className="col-md-5 text"><b>Storage Capacity:</b></p>
                        <p className="col-md-7 textline">{huawei.storage_capacity}</p>
                      </div>
                      <div className="row">
                        <p className="col-md-5 text"><b>Color:</b></p>
                        <p className="col-md-7 textline">{huawei.color}</p>
                      </div>
                      <div className="row">
                        <p className="col-md-5 text"><b>Price:</b></p>
                        <p className="col-md-7 textline">€{huawei.price}</p>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <Button style={{fontFamily: 'Raleway'}} raised data-dismiss="modal">
                        Close
                      </Button>
                      <Button style={{fontFamily: 'Raleway'}} raised colored data-toggle="modal" data-target={`#buyhuawei${huawei.phone_id}`} data-dismiss="modal">
                        Buy
                      </Button>
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

export default HuaweiPhone;


























