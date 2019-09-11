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
