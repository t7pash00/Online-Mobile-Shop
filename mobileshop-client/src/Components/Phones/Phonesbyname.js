import React, { Component } from 'react';
import axios from 'axios';
import Displayphones from './Displayphones';
import PhonesbySamsung from './PhonesbySamsung';
import PhonesbyApple from './PhonesbyApple';
import PhonesbyHuawei from './PhonesbyHuawei';
import PhonesbyNokia from './PhonesbyNokia';



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
      
     
      <div className="row" style={{ marginTop: '80px', height: "auto" }}>
        <div className="col-lg-2">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a className="nav-link active" id="v-pills-Home-tab" data-toggle="pill" href="#v-pills-Home" role="tab" aria-controls="v-pills-Home" aria-selected="true">Home</a>
            <a className="nav-link" id="v-pills-Samsung-tab" data-toggle="pill" href="#v-pills-Samsung" role="tab" aria-controls="v-pills-Samsung" aria-selected="false">Samsung</a>
            <a className="nav-link" id="v-pills-Apple-tab" data-toggle="pill" href="#v-pills-Apple" role="tab" aria-controls="v-pills-Apple" aria-selected="false">Apple</a>
            <a className="nav-link" id="v-pills-Huawei-tab" data-toggle="pill" href="#v-pills-Huawei" role="tab" aria-controls="v-pills-Huawei" aria-selected="false">Huawei</a>
            <a className="nav-link" id="v-pills-Nokia-tab" data-toggle="pill" href="#v-pills-Nokia" role="tab" aria-controls="v-pills-Nokia" aria-selected="false">Nokia</a>
          </div>
        </div>
        <div className="col-lg-10">
          

              <div className="tab-content" id="v-pills-tabContlklkhlent">
              <div className="tab-pane fade show active" id="v-pills-Home" role="tabpanel" aria-labelledby="v-pills-Home-tab">
            <Displayphones/>
                </div>
               
                
                <div className="tab-pane fade " id="v-pills-Samsung" role="tabpanel" aria-labelledby="v-pills-Samsung-tab">
            <PhonesbySamsung/>
                </div>

               
                
                <div className="tab-pane fade" id="v-pills-Apple" role="tabpanel" aria-labelledby="v-pills-Apple-tab">
            <PhonesbyApple/>
                </div>
                <div className="tab-pane fade" id="v-pills-Huawei" role="tabpanel" aria-labelledby="v-pills-Huawei-tab">
            <PhonesbyHuawei/>
                </div>
                <div className="tab-pane fade" id="v-pills-Nokia" role="tabpanel" aria-labelledby="v-pills-Nokia-tab">
            <PhonesbyNokia/>
                </div>
              </div>
              </div>
              )
             
              </div>
             

              );
          }
   
 }
 
 export default Phonesbyname;
 
 
