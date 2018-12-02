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
  }
  showPhones() {
    axios.get("http://localhost:3000/phones").then(res => {
      const phones = res.data;
      this.setState({ phones });
    });
  }
showdetail()
{
  alert("sdkjgksejg");
  
}
  render() {
    return (
      <div className="main-wrap "  >
        <div class="container-fluid" style={{ marginTop: '80px' }}>
          <div>
            {this.onload = this.showPhones()}
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
                      <a href="#" class="btn btn-primary"><button onClick={this.showdetail}>More Details</button></a>



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