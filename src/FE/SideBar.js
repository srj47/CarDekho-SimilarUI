import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./SideBar.css";
// CSS Files
import "../assets/css/material-dashboard.css";
// Nucleo Icons
import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";
import "../assets/css/material-dashboard.css";
import "../assets/css/material-dashboard.css.map";
import "../assets/css/material-dashboard.min.css";
import logo from "../img/logo2.png";

export default function SideBar() {
  // const [showSideBar, setShowSideBar] = useState();

  // const showSideBarFn = () => {
  //   if (showSideBar === "SideBarVisible") {
  //     setShowSideBar("SideBarHidden");
  //   } else {
  //     setShowSideBar("SideBarVisible");
  //   }
  // };

  return (
    <>
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
        id="sidenav-main"
      >
        <div className="sidenav-header text-center">
          <img className="m-3 logo " src={logo} alt="..." />
        </div>

        <hr className="horizontal light mt-0 mb-2" />
        <div
        // className="collapse navbar-collapse  w-auto "
        // id="sidenav-collapse-main"
        >
          <div className="col-12 text-center">
            <h6 className="text-light">Finance executive</h6>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/FEDashboard"
                className="nav-link text-white active bg-gradient-primary"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FELead" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">New Leads</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">
                  Loan Application Status{" "}
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Application master</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
                <span className="nav-link-text ms-1">Notifications</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">login</i>
                </div>
                <span className="nav-link-text ms-1">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
