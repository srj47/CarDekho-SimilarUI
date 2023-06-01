import React from "react";
import { Link } from "react-router-dom";
import "chart.js/auto";
import SideBar from "../SalesConsultant/SideBar";

// CSS Files
import "../assets/css/material-dashboard.css";

import "../assets/css/material-dashboard.css";
import "../assets/css/material-dashboard.css.map";
import "../assets/css/material-dashboard.min.css";

// import "../assets/js/plugins/perfect-scrollbar.min.js";
// import "../assets/js/plugins/smooth-scrollbar.min.js";
// import "../assets/js/plugins/chartjs.min.js";

// Nucleo Icons
import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";

// img file
import BankLogo1 from "../img/sbiLogo.jpg";
import BankLogo2 from "../img/AxisLogo.jpg";
import BankLogo3 from "../img/kotakLogo.jpg";
import BankLogo4 from "../img/iciciLogo.jpg";

export default function CuratedOffer() {
  return (
    <>
      <div className="g-sidenav-show bg-gray-200 ">
        <SideBar />
        <main className="main-content position-relative  pt-4  border-radius-lg ">
          <div className="col-sm-12  p-4 mx-0 ">
            <div className="card p-4">
              <h5 className="mb-4">Let us curate the best offer for you !</h5>
              <div className="row ">
                <h6 className="m-0">Ex showroom Price</h6>
                <h4>3,50,000</h4>
              </div>
              <div className="row">
                <div className="col-sm-3 p-3">
                  <div className="form-floating mb-3 border-bottom">
                    <input
                      type="text"
                      className="form-control"
                      id="DownPayment"
                      placeholder="DownPayment"
                    />
                    <label htmlFor="mobile"> Down Payment </label>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    defaultValue="0"
                  />
                </div>
                <div className="col-sm-3 p-3">
                  <div className="form-floating mb-3 border-bottom">
                    <input
                      type="text"
                      className="form-control"
                      id="LoanAmt"
                      placeholder="LoanAmt"
                    />
                    <label htmlFor="mobile"> Loan Amount </label>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    defaultValue="0"
                  />
                </div>
                <div className="col-sm-3 p-3">
                  <div className="form-floating mb-3 border-bottom">
                    <input
                      type="text"
                      className="form-control"
                      id="LoanTenure"
                      placeholder="LoanTenure"
                    />
                    <label htmlFor="mobile"> Loan Tenure </label>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    defaultValue="0"
                  />
                </div>
                <div className="col-sm-3 p-3">
                  <div className="form-floating mb-3 border-bottom">
                    <input
                      type="text"
                      className="form-control"
                      id="LoanTenure"
                      placeholder="LoanTenure"
                    />
                    <label htmlFor="mobile"> Interest Rate </label>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    defaultValue="0"
                  />
                </div>
              </div>
              <div className="row">
                <h5 className="mt-5">Our banking partners</h5>
                <div className="col-sm-3 p-4">
                  <img src={BankLogo1} className="img-fluid" alt="..." />
                </div>
                <div className="col-sm-3 p-4">
                  <img src={BankLogo2} className="img-fluid" alt="..." />
                </div>
                <div className="col-sm-3 p-4">
                  <img src={BankLogo3} className="img-fluid" alt="..." />
                </div>
                <div className="col-sm-3 p-4">
                  <img src={BankLogo4} className="img-fluid" alt="..." />
                </div>
              </div>
              <hr />
              <div className="row mt-5">
                <table className="table">
                  <thead>
                    <tr>
                      <th>institution</th>
                      <th>Loan Amount</th>
                      <th>Interest rate</th>
                      <th>Downpayment</th>
                      <th>EMI</th>
                      <th>Total Interest Amount</th>
                      <th>Processing Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={BankLogo1} className="img-fluid" alt="..." />
                      </td>
                      <td>50000</td>
                      <td>12</td>
                      <td>10000</td>
                      <td>15</td>
                      <td>40000</td>
                      <td>1200</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={BankLogo2} className="img-fluid" alt="..." />
                      </td>
                      <td>50000</td>
                      <td>12</td>
                      <td>10000</td>
                      <td>15</td>
                      <td>40000</td>
                      <td>1200</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={BankLogo3} className="img-fluid" alt="..." />
                      </td>
                      <td>50000</td>
                      <td>12</td>
                      <td>10000</td>
                      <td>15</td>
                      <td>40000</td>
                      <td>1200</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={BankLogo4} className="img-fluid" alt="..." />
                      </td>
                      <td>50000</td>
                      <td>12</td>
                      <td>10000</td>
                      <td>15</td>
                      <td>40000</td>
                      <td>1200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
