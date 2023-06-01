import React from "react";
import { Link } from "react-router-dom";
import "chart.js/auto";
import SideBar from "./SideBar";

import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";

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

export default function Application() {
  return (
    <>
      <div className="g-sidenav-show bg-gray-200 ">
        <SideBar />
        <main className="main-content position-relative  pt-4  border-radius-lg ">
          <div className="col-sm-12  p-4 mx-0 ">
            <div className="card">
              <div className="card-header pb-0">
                <div className="row">
                  {/* filters */}
                  <div className="text-center d-flex align-items-center ">
                    <h6 className="me-auto">Application</h6>
                    <div className="dropdown me-3 ">
                      <button
                        className="btn dropdown-toggle border-bottom"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-funnel me-2 "></i>
                        Quotation sent to customer
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Quotation sent to customer
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Quotation sent to FE
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown me-3 ">
                      <button
                        className="btn dropdown-toggle border-bottom"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-funnel me-2"></i>
                        Cash
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Cash
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Finance
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown me-3 ">
                      <button
                        className="btn dropdown-toggle border-bottom"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-funnel me-2"></i>
                        Vehicle
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Tata Tiago
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Maruti Swift
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Renault Duster
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Honda City
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown me-3">
                      <input type="date" className="btn  border-bottom" />
                    </div>
                  </div>
                  {/* filter end  */}
                </div>
              </div>
              <div className="card-body px-0 pb-2 mx-0 ">
                <div className="table-responsive ">
                  <table className="table table-hover  align-items-center mb-4 pb-5  text-xs ">
                    <thead>
                      <tr>
                        <th className="text-uppercase  text-secondary text-xxs font-weight-bolder opacity-7">
                          S.no.
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Customer's name
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Mobile Number
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Enquiry Date
                        </th>

                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Model Interested
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Cash/Finance
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Preferred Bank
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody className="mb-5">
                      <tr className="">
                        <td className="text-center">1</td>
                        <td className="text-start text-info">Suraj Kumar</td>
                        <td className="text-center">7438363278</td>
                        <td className="text-center">10-03-2022</td>
                        <td className="text-center text-primary">Tata Tiago</td>
                        <td className="text-center">Finance</td>
                        <td className="text-center">SBI</td>
                        <td className="text-center">
                          <button className="btn btn-sm btn-primary">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-center">2</td>
                        <td className="text-start text-info">Suraj Kumar</td>
                        <td className="text-center">7438363278</td>
                        <td className="text-center">10-03-2022</td>
                        <td className="text-center text-primary">Tata Tiago</td>
                        <td className="text-center">Finance</td>
                        <td className="text-center">SBI</td>
                        <td className="text-center">
                          <button className="btn btn-sm btn-primary">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-center">3</td>
                        <td className="text-start text-info">Suraj Kumar</td>
                        <td className="text-center">7438363278</td>
                        <td className="text-center">10-03-2022</td>
                        <td className="text-center text-primary">Tata Tiago</td>
                        <td className="text-center">Finance</td>
                        <td className="text-center">SBI</td>
                        <td className="text-center">
                          <button className="btn btn-sm btn-primary">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-center">4</td>
                        <td className="text-start text-info">Suraj Kumar</td>
                        <td className="text-center">7438363278</td>
                        <td className="text-center">10-03-2022</td>
                        <td className="text-center text-primary">Tata Tiago</td>
                        <td className="text-center">Finance</td>
                        <td className="text-center">SBI</td>
                        <td className="text-center">
                          <button className="btn btn-sm btn-primary">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-center">5</td>
                        <td className="text-start text-info">Suraj Kumar</td>
                        <td className="text-center">7438363278</td>
                        <td className="text-center">10-03-2022</td>
                        <td className="text-center text-primary">Tata Tiago</td>
                        <td className="text-center">Finance</td>
                        <td className="text-center">SBI</td>
                        <td className="text-center">
                          <button className="btn btn-sm btn-primary">
                            View
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
