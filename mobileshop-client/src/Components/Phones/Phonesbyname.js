import React, { Component } from 'react';
import axios from 'axios';
import Displayphones from './Displayphones';

class Phonesbyname extends Component {
  constructor() {
    super();
    this.showPhones = this.showPhones.bind(this);
    this.showSamsung = this.showSamsung.bind(this);
    this.showApple = this.showApple.bind(this);
    this.showHuawei = this.showHuawei.bind(this);
    this.showNokia = this.showNokia.bind(this);
    this.state = {
      phones: [],
      samsung: [],
      apple: [],
      huawei: [],
      nokia: []

    };
    this.showPhones();
    this.showSamsung();
    this.showApple();
    this.showHuawei();
    this.showNokia();
  }
  showPhones() {
    axios.get("http://localhost:3000/phones").then(res => {
      const phones = res.data;
      this.setState({ phones });
    });
  }
  showSamsung() {
    axios.get("http://localhost:3000/phones/phones_by_brand/Samsung").then(res => {
      const samsung = res.data;
      this.setState({ samsung });
    });
  }
  showApple() {
    axios.get("http://localhost:3000/phones/phones_by_brand/Apple").then(res => {
      const apple = res.data;
      this.setState({ apple });
    });
  }
  showHuawei() {
    axios.get("http://localhost:3000/phones/phones_by_brand/Huawei").then(res => {
      const huawei = res.data;
      this.setState({ huawei });
    });
  }
  showNokia() {
    axios.get("http://localhost:3000/phones/phones_by_brand/Nokia").then(res => {
      const nokia = res.data;
      this.setState({ nokia });
    });
  }
  render() {
    
    return (
      
      <div class="row" style={{ marginTop: '80px', height: "auto" }}>
        <div class="col-lg-2">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link active" id="v-pills-Home-tab" data-toggle="pill" href="#v-pills-Home" role="tab" aria-controls="v-pills-Home" aria-selected="true">Home</a>
            <a class="nav-link" id="v-pills-Samsung-tab" data-toggle="pill" href="#v-pills-Samsung" role="tab" aria-controls="v-pills-Samsung" aria-selected="false">Samsung</a>
            <a class="nav-link" id="v-pills-Apple-tab" data-toggle="pill" href="#v-pills-Apple" role="tab" aria-controls="v-pills-Apple" aria-selected="false">Apple</a>
            <a class="nav-link" id="v-pills-Huawei-tab" data-toggle="pill" href="#v-pills-Huawei" role="tab" aria-controls="v-pills-Huawei" aria-selected="false">Huawei</a>
            <a class="nav-link" id="v-pills-Nokia-tab" data-toggle="pill" href="#v-pills-Nokia" role="tab" aria-controls="v-pills-Nokia" aria-selected="false">Nokia</a>
          </div>
        </div>
        <div class="col-lg-10">
          

              <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-Home" role="tabpanel" aria-labelledby="v-pills-Home-tab">
                 <Displayphones/>
                </div>
                <div class="tab-pane fade" id="v-pills-Samsung" role="tabpanel" aria-labelledby="v-pills-Samsung-tab">
                {this.state.samsung.map(samsung => (
                  <div class="col-md-4 mt-3" key={samsung.brand_name}>
                    <p>{samsung.model_name}</p>
                    <p>{samsung.storage_capacity}</p>
                    <p>{samsung.price}</p>
                  </div>
                ))}
                </div>
                <div class="tab-pane fade" id="v-pills-Apple" role="tabpanel" aria-labelledby="v-pills-Apple-tab">
                {this.state.apple.map(apple => (
                  <div class="col-md-4 mt-3" key={apple.brand_name}>
                    <p>{apple.model_name}</p>
                    <p>{apple.storage_capacity}</p>
                    <p>{apple.price}</p>
                  </div>
                ))}
                </div>
                <div class="tab-pane fade" id="v-pills-Huawei" role="tabpanel" aria-labelledby="v-pills-Huawei-tab">
                {this.state.huawei.map(huawei => (
                  <div class="col-md-4 mt-3" key={huawei.brand_name}>
                    <p>{huawei.model_name}</p>
                    <p>{huawei.storage_capacity}</p>
                    <p>{huawei.price}</p>
                  </div>
                ))}
                </div>
                <div class="tab-pane fade" id="v-pills-Nokia" role="tabpanel" aria-labelledby="v-pills-Nokia-tab">
                {this.state.nokia.map(nokia => (
                  <div class="col-md-4 mt-3" key={nokia.brand_name}>
                    <p>{nokia.model_name}</p>
                    <p>{nokia.storage_capacity}</p>
                    <p>{nokia.price}</p>
                  </div>
                ))}
                </div>
              </div>
              </div>
              )
             
              </div>
             

              );
          }
   
 }
 
 export default Phonesbyname;
 
 
