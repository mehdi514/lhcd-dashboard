import * as React from 'react';
// import qr from '../../assets/img/qr.png';
import qr from '../../assets/img/qr.png';
import './dashboardCard.css';
import videoicon from '../../assets/img/currVideoIcon.svg';
import add from '../../assets/img/add.png';

export class DashboardCard extends React.Component {
  render() {
    return (
      <div className="row" style={{ padding: '0 15px !important' }}>
        <div className="col-md-6">
          <div className="customLinearProgressBarComplete">
            <div className="customLinearProgressComplete-success"></div>
          </div>
          <div className="card cardLicense">
            <div className="dashboardCardContent">
              <div className="col-md-12" style={{ padding: 3 }}>
                <div className="row">
                  <div className="col-md-7">
                    <p className="DashboardContentTitle">
                      Food Employee (Handler) Certification
                    </p>
                  </div>
                  <div className="col-md-5">
                    <div className="gridItem-startLicense">
                      <span className="Badge-badge badge-success">
                        15-00-03d
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12" style={{ padding: 3 }}>
                <div className="row" style={{ marginTop: '-13px' }}>
                  <div className="col-md-4">
                    <img
                      src={qr}
                      style={{
                        width: '72px',
                        height: '72px'
                      }}
                      alt="qr-code"
                    ></img>
                  </div>
                  <div className="col-md-8">
                    <div className="dashboardCardAction-1">
                      <p className="cardActionTitle-1">Seth Horsley</p>
                    </div>
                    <div className="dashboardCardAction-1">
                      <p className="cardActionTitle-1">
                        5d5d94e13664760df7514b88
                      </p>
                    </div>
                    <div className="dashboardCardAction-1">
                      <p className="cardActionTitle-1">Exp: Aug 21 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardActionButton" style={{ marginTop: '-18px' }}>
                <button className="btn btn-success">
                  <span className="btnLabel">Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="customLinearProgress-root">
            {/* <div className="progressInfoBar"></div> */}
          </div>
          <div className="card cardLicense">
            <div className="dashboardCardContent">
              <div className="col-md-12" style={{ padding: 3 }}>
                <div className="row">
                  <div className="col-md-7">
                    <p className="DashboardContentTitle">
                      Food Manager Certification
                    </p>
                  </div>
                  <div className="col-md-5">
                    <div className="gridItem-startLicense-2">
                      <span className="Badge-badge-2 badge-info">
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12" style={{ padding: 3 }}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="text-center">
                      <img
                        src={videoicon}
                        style={{
                          width: '73.84px',
                          height: '70px'
                        }}
                        alt="slides"
                      ></img>
                    </div>
                  </div>
                  <div
                    className="col-md-8 mt-3"
                    style={{ marginLeft: '-30px' }}
                  >
                    <div className="dashboardVideoAction-1">
                      <p className="videoActionTitle-1">Section 0</p>
                    </div>
                    <div className="dashboardVideoAction-2">
                      <p className="videoActionTitle-2">Slide #1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="videoActionButton">
                <button className="btn btn-normBtn">
                  <span className="normBtnLabel">Start</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card cardLicenseGetCard">
            <img
              src={add}
              style={{
                width: '14px',
                height: '14px'
              }}
              alt="add"
            />
            <h2 className="cardLicenseGetCard-label">Get new License</h2>
          </div>
        </div>
      </div>
    );
  }
}
