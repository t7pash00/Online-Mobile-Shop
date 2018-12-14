import React, { Component } from 'react';
import HuaweiPhone from './Huawei/HuaweiPhone';
import SamsungPhone from './Samsung/SamsungPhone';
import NokiaPhone from './Nokia/NokiaPhone';
import ApplePhone from './Apple/ApplePhone';
import ShowAllPhones from './All/ShowAllPhones';
import './PhonesStyle.css';

class Phones extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ marginBottom: '20px', height: "auto" }}>
          <div className="col-lg-2 mt-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-Home-tab" data-toggle="pill" href="#v-pills-Home" role="tab" aria-controls="v-pills-Home" aria-selected="true">
                Home
              </a>
              <a className="nav-link" id="v-pills-Samsung-tab" data-toggle="pill" href="#v-pills-Samsung" role="tab" aria-controls="v-pills-Samsung" aria-selected="false">
                Samsung
              </a>
              <a className="nav-link" id="v-pills-Apple-tab" data-toggle="pill" href="#v-pills-Apple" role="tab" aria-controls="v-pills-Apple" aria-selected="false">
                Apple
              </a>
              <a className="nav-link" id="v-pills-Huawei-tab" data-toggle="pill" href="#v-pills-Huawei" role="tab" aria-controls="v-pills-Huawei" aria-selected="false">
                Huawei
              </a>
              <a className="nav-link" id="v-pills-Nokia-tab" data-toggle="pill" href="#v-pills-Nokia" role="tab" aria-controls="v-pills-Nokia" aria-selected="false">
                Nokia
              </a>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-Home" role="tabpanel" aria-labelledby="v-pills-Home-tab">
                <ShowAllPhones />
              </div>              
              <div className="tab-pane fade" id="v-pills-Samsung" role="tabpanel" aria-labelledby="v-pills-Samsung-tab">
                <SamsungPhone />
              </div>
              <div className="tab-pane fade" id="v-pills-Apple" role="tabpanel" aria-labelledby="v-pills-Apple-tab">
                <ApplePhone />
              </div>
              <div className="tab-pane fade" id="v-pills-Huawei" role="tabpanel" aria-labelledby="v-pills-Huawei-tab">
                <HuaweiPhone />
              </div>
              <div className="tab-pane fade" id="v-pills-Nokia" role="tabpanel" aria-labelledby="v-pills-Nokia-tab">
                <NokiaPhone />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
 export default Phones;
 
 
