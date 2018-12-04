import React, { Component } from 'react';
import axios from 'axios';

import './Displayphones.css';



class Displayphones extends Component {
  constructor() {
    super();
    this.showPhones = this.showPhones.bind(this);
    this.showdetail = this.showdetail.bind(this);
    this.state = {

      phones: []
    };
    this.showPhones();
  }
  showPhones() {
    axios.get("http://localhost:3000/phones").then(res => {
      const phones = res.data;
      this.setState({ phones });
    });
  }
  showdetail() {
    alert("sdkjgksejg");

  }
  render() {
    return (
      <div className="main-wrap "  >
        <div class="container-fluid" style={{ marginTop: '80px' }}>
          <div>

            <div class="row">
              {this.state.phones.map(phones => (
                <div class="col-md-4 mt-3" key={phones.phone_id}>

                  <div class="card profile-card-5">
                    <div class="card-img-block">
                      <img class="card-img-top" style={{ width: "400px", height: "400px" }} src={`http://localhost:3001/Assets/Images/${phones.imagename}`} />
                    </div>
                    <div class="card-body pt-0">
                      <h5 class="card-title">{phones.brand_name}</h5>
                      <p class="card-text">{phones.model_name}</p>
                      <p class="card-text">€{phones.price}</p>
                      <a class="btn btn-success" data-toggle="modal" data-target={`#moredetails${phones.phone_id}`}>More Details</a>



                    </div>
                  </div>
                  <div id={`moredetails${phones.phone_id}`} class="modal fade" role="dialog">
                    <div class="modal-dialog">


                      <div class="modal-content">
                        <div class="modal-header" >
                          <h4 class="modal-title">Details</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <p class="col-sm-5 text"><b>Brand Name:</b></p>
                            <p class="col-sm-7 textline">{phones.brand_name}</p>
                          </div>

                          <div class="row">
                            <p class="col-sm-5 text"><b>Model Name:</b></p>
                            <p class="col-sm-7 textline">{phones.model_name}</p>
                          </div>

                          <div class="row">
                            <p class="col-sm-5 text"><b>Storage Capacity:</b></p>
                            <p class="col-sm-7 textline">{phones.storage_capacity}</p>
                          </div>

                          <div class="row">
                            <p class="col-sm-5 text"><b>Color:</b></p>
                            <p class="col-sm-7 textline">{phones.color}</p>
                          </div>

                          <div class="row">
                            <p class="col-sm-5 text"><b>Price:</b></p>
                            <p class="col-sm-7 textline">€{phones.price}</p>
                          </div>
                        </div>


                        <div class="modal-footer">
                          <a class="btn btn-default" data-dismiss="modal">Close</a>
                          <button className="btn btn-success" type="submit">Buy</button>
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


export default Displayphones;


























