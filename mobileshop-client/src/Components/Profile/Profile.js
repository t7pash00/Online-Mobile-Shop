import React, { Component } from 'react';

class Profile extends Component {
  render() {
    if (!(localStorage.usertoken)) {
      document.location = "/"
    }
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>First Name</td>
                <td></td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td></td>
              </tr>
              <tr>
                <td>Email</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-5">
            <a href="/phones" className="btn btn-lg btn-primary">Go to Phones</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
