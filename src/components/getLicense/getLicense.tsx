import * as React from 'react';
import './getLicense.css';

export class GetLicense extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="licenseCard card-1">
            <div className="cardLicnese-content">
              <div className="row">
                <div
                  className="col-md-8"
                  style={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <div className="grid-items license">
                    <span className="Badge-badge-1 badge-success">
                      Lake Cumberland
                    </span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="grid-items text">
                    <p className="grid-items text-title">$25</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9" style={{ marginLeft: '-15px' }}>
                  <div className="grid-items content">
                    <p className="grid-items content title-2000">
                      Food Employee (Handler) Certification
                    </p>
                    <p className="grid-items content title-2010">
                      License Length: 2 years
                    </p>
                    <p className="grid-items content title-2020">
                      There are 5 sections in this course
                    </p>
                  </div>
                </div>
                <div className="col-md-3 grid-items-btn1">
                  <div className="grid-items-actionbtn1">
                    <button className="btn btn-primary">
                      <span className="btn-primary-title">Start</span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="licenseCard card-1">
            <div className="cardLicnese-content">
              <div className="row">
                <div
                  className="col-md-8"
                  style={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <div className="grid-items license">
                    <span className="Badge-badge-1 badge-success">
                      Lake Cumberland
                    </span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="grid-items text">
                    <p className="grid-items text-title">$80</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9" style={{ marginLeft: '-15px' }}>
                <div className="grid-items content">
                  <p className="grid-items content title-2030">
                    Food Manager Certification
                  </p>
                  <p className="grid-items content title-2040">
                    License Length: 3 years
                  </p>
                  <p className="grid-items content title-2050">
                    There are 7 sections in this course
                  </p>
                </div>
              </div>
              <div className="col-md-3 grid-items-btn1">
                <div className="grid-items-actionbtn1">
                  <button className="btn btn-primary">
                    <span className="btn-primary-title">Start</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
