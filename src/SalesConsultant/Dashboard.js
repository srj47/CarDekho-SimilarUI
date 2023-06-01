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

export default function Dashboard() {
  return (
    <>
      <div className="g-sidenav-show bg-gray-200">
        <SideBar />
        <main className="main-content position-relative  h-100 border-radius-lg ">
          {/* Navbar */}
          <nav
            className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl mb-5 pt-4"
            id="navbarBlur"
            navbar-scroll="true"
          >
            <div className="container-fluid py-1 px-3">
              {/* <nav aria-label="breadcrumb">
                <h6 className="font-weight-bolder mb-0">Dashboard</h6>
              </nav> */}
            </div>
          </nav>
          {/* End Navbar */}
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">receipt_long</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">
                        New Enquiry
                      </p>
                      <h4 className="mb-0">3k+</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-1 ">
                    <Link
                      className="btn text-sm w-100 px-2 d-flex align-items-center mb-0 "
                      to="/CarPage"
                    >
                      <p className="text-sm m-0">
                        <span className="text-success me-2  font-weight-bolder">
                          +55%
                        </span>
                        than last week
                      </p>
                      <i className="fa fa-angle-right ms-auto font-weight-bolder " />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">table_view</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">
                        Quotation Master
                      </p>
                      <h4 className="mb-0">2,300</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-1">
                    <Link
                      className="btn text-sm w-100 px-2 d-flex align-items-center mb-0 "
                      to="/QuotationMaster"
                    >
                      <p className="text-sm m-0">
                        <span className="text-danger me-2  font-weight-bolder">
                          -28%
                        </span>
                        than last week
                      </p>
                      <i className="fa fa-angle-right ms-auto font-weight-bolder " />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">person</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">
                        Application
                      </p>
                      <h4 className="mb-0">3,462</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-1">
                    <Link
                      className="btn text-sm w-100 px-2 d-flex align-items-center mb-0 "
                      to=""
                    >
                      <p className="text-sm m-0">
                        <span className="text-success me-2  font-weight-bolder">
                          +12%
                        </span>
                        than last week
                      </p>
                      <i className="fa fa-angle-right ms-auto font-weight-bolder " />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">notifications</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">
                        Notification
                      </p>
                      <h4 className="mb-0">99+</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-1">
                    <Link
                      className="btn text-sm w-100 px-2 d-flex align-items-center mb-0 "
                      to=""
                    >
                      <p className="text-sm m-0">
                        <span className="text-success me-2  font-weight-bolder">
                          18
                        </span>
                        Today
                      </p>
                      <i className="fa fa-angle-right ms-auto font-weight-bolder  " />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4 col-md-6 mt-4 mb-4">
                <div className="card z-index-2 ">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                      <div className="chart">
                        <Chart1 />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="mb-0 ">Target</h6>
                    <p className="text-sm ">Last Campaign Performance</p>
                    <hr className="dark horizontal" />
                    <div className="d-flex ">
                      <i className="material-icons text-sm my-auto me-1">
                        schedule
                      </i>
                      <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mb-4">
                <div className="card z-index-2  ">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                    <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                      <div className="chart">
                        <Chart2 />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="mb-0 "> Progress </h6>
                    <p className="text-sm ">
                      {" "}
                      (<span className="font-weight-bolder">+15%</span>)
                      increase in today sales.{" "}
                    </p>
                    <hr className="dark horizontal" />
                    <div className="d-flex ">
                      <i className="material-icons text-sm my-auto me-1">
                        schedule
                      </i>
                      <p className="mb-0 text-sm"> updated 4 min ago </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mb-3">
                <div className="card z-index-2 ">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                    <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                      <div className="chart">
                        <Chart3 />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="mb-0 ">Total Sales </h6>
                    <p className="text-sm ">Last Campaign Performance</p>
                    <hr className="dark horizontal" />
                    <div className="d-flex ">
                      <i className="material-icons text-sm my-auto me-1">
                        schedule
                      </i>
                      <p className="mb-0 text-sm">just updated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
