import * as React from 'react';
import avatar from '../../assets/img/default-avatar.png';
import './account.css';

export class Account extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card tab-containter">
            <div className="content-wrapper">
              <div style={{ overflow: 'hidden' }}>
                <div className="row">
                  <div className="col-sm-3 imageSectCont text-center">
                    <div className="fileinput text-center">
                      <input type="file" id="avatar" accept="image/*" />
                      <div className="thumbnail img-circle">
                        <img src={avatar} alt="avatar"></img>
                      </div>
                      <button className="avatarButton">
                        <span className="avatarTitle">Add Photo</span>
                        <span className="TouchRipple-root"></span>
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="grid-item firstName">
                          <div className="griditem-twoLineCont-300">
                            <div className="CustomInput-formControl-300 formControl-root">
                              <label className="CustomInput-labelRoot-300 CustomInput-labelRootSuccess-300 InputLabel-animated InputLabel-shrink InputLabel-root">
                                <span>First Name</span>
                              </label>
                              <div className="InputBase-root Input-root Input-underline CustomInput-labelRoot-300 CustomInput-underline-300">
                                <input
                                  className="InputBase-input Input-input CustomInput-input-300"
                                  id="firstName"
                                  placeholder="First Name"
                                  type="text"
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="grid-item lastName">
                          <div className="griditem-twoLineCont-301">
                            <div className="CustomInput-formControl-301 formControl-root">
                              <label className="CustomInput-labelRoot-301 CustomInput-labelRootSuccess-301 InputLabel-animated InputLabel-shrink InputLabel-root">
                                <span>Last Name</span>
                              </label>
                              <div className="InputBase-root Input-root Input-underline CustomInput-labelRoot-301 CustomInput-underline-301">
                                <input
                                  className="InputBase-input Input-input CustomInput-input-301"
                                  id="lastName"
                                  placeholder="Last Name"
                                  type="text"
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="grid-item street">
                          <div className="griditem-twoLineCont-400">
                            <div className="CustomInput-formControl-400 formControl-root">
                              <label className="CustomInput-labelRoot-400 CustomInput-labelRootSuccess-400 InputLabel-animated InputLabel-shrink InputLabel-root">
                                <span style={{ color: '#AAAAAA' }}>Street</span>
                              </label>
                              <div className="InputBase-root Input-root Input-underline CustomInput-labelRoot-400 CustomInput-underline-400">
                                <input
                                  className="InputBase-input Input-input CustomInput-input-400"
                                  id="street"
                                  placeholder="Address 1"
                                  type="text"
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="grid-item APT">
                          <div className="griditem-twoLineCont-401">
                            <div className="CustomInput-formControl-401 formControl-root">
                              <label className="CustomInput-labelRoot-401 CustomInput-labelRootSuccess-401 InputLabel-animated InputLabel-shrink InputLabel-root">
                                <span style={{ color: '#AAAAAA' }}>APT</span>
                              </label>
                              <div className="InputBase-root Input-root Input-underline CustomInput-labelRoot-401 CustomInput-underline-401">
                                <input
                                  className="InputBase-input Input-input CustomInput-input-401"
                                  id="APT"
                                  placeholder="APT B"
                                  type="text"
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="grid-item APT">
                          <div className="griditem-twoLineCont-401">
                            <div className="CustomInput-formControl-401 formControl-root">
                              <label className="CustomInput-labelRoot-401 CustomInput-labelRootSuccess-401 InputLabel-animated InputLabel-shrink InputLabel-root">
                                <span>APT</span>
                              </label>
                              <div className="InputBase-root Input-root Input-underline CustomInput-labelRoot-401 CustomInput-underline-401">
                                <input
                                  className="InputBase-input Input-input CustomInput-input-401"
                                  id="APT"
                                  placeholder="APT B"
                                  type="text"
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="grid-item city">
                          <div className="griditem-twoLineCont-500">
                            <div className="CustomInput-formControl-500 formControl-root">
                              <label className="CustomInput-labelRoot-500 CustomInput-labelRootSuccess-500 InputLabel-animated InputLabel-shrink InputLabel-root">
                                <span>City</span>
                              </label>
                              <div className="InputBase-root Input-root Input-underline CustomInput-labelRoot-500 CustomInput-underline-500">
                                <input
                                  className="InputBase-input Input-input CustomInput-input-500"
                                  id="city"
                                  placeholder="City"
                                  type="text"
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="grid-item state">
                          <div className="griditem-twoLineCont-501">
                            <div className="CustomInput-formControl-501 formControl-root">
                              <label className="CustomInput-labelRoot-501 CustomInput-labelRootSuccess-501 InputLabel-animated InputLabel-shrink InputLabel-root">
                                <span>State</span>
                              </label>
                              <div className="InputBase-root Input-root Input-underline CustomInput-labelRoot-501 CustomInput-underline-501">
                                <input
                                  className="InputBase-input Input-input CustomInput-input-501"
                                  id="state"
                                  placeholder="State"
                                  type="text"
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 zip">
                        <div className="grid-item zip">
                          <div className="griditem-twoLineCont-502">
                            <div className="CustomInput-formControl-502 formControl-root">
                              <label className="CustomInput-labelRoot-502 CustomInput-labelRootSuccess-502 InputLabel-animated InputLabel-shrink InputLabel-root">
                                <span>Zip Code</span>
                              </label>
                              <div className="InputBase-root Input-root Input-underline CustomInput-labelRoot-502 CustomInput-underline-502">
                                <input
                                  className="InputBase-input Input-input CustomInput-input-502"
                                  id="zip"
                                  placeholder="Zip Code"
                                  type="text"
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="grid-item email">
                          <div className="griditem-twoLineCont-600">
                            <div className="CustomInput-formControl-600 formControl-root">
                              <label className="CustomInput-labelRoot-600 CustomInput-labelRootSuccess-600 InputLabel-animated InputLabel-shrink InputLabel-root">
                                <span>Email</span>
                              </label>
                              <div className="InputBase-root Input-root Input-underline CustomInput-labelRoot-600 CustomInput-underline-600">
                                <input
                                  className="InputBase-input-email Input-input CustomInput-input-600"
                                  id="email"
                                  placeholder="Email"
                                  type="text"
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
