import React from "react";
import { Link } from "react-router-dom";

import SideBar from "./SideBar";
import carimg from "../img/car6.jpg";
import audiLogo from "../img/audiLogo.png";

// CSS Files
import "../assets/css/material-dashboard.css";
import "./carPage.css";

import "../assets/css/material-dashboard.css";
import "../assets/css/material-dashboard.css.map";
import "../assets/css/material-dashboard.min.css";

// import "../assets/js/plugins/perfect-scrollbar.min.js";
// import "../assets/js/plugins/smooth-scrollbar.min.js";
// import "../assets/js/plugins/chartjs.min.js";

const CarBox = (props) => {
  return (
    <>
      <div className="col-sm-3 p-4">
        <Link
          to={props.link}
          className="col-12 card border-0  carPageBox shadow "
        >
          <div className="card">
            <div className="card-header p-1 text-center">
              <img src={props.CarLogo} width="auto" height="50px" alt="..." />
            </div>
            <div className="card-body p-0">
              {" "}
              <img
                src={props.CarPic}
                width="100%"
                height="auto"
                className="col-12"
                alt="..."
              />
            </div>
            <div className="card-footer p-2  d-flex align-items-center">
              <h6 className="m-0 ">Audi </h6>
              <i className="fa fa-caret-right font-weight-bold  ms-auto" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default function CarPage() {
  return (
    <>
      <div className="g-sidenav-show bg-gray-200">
        <SideBar />
        <main className="main-content position-relative   border-radius-lg  pt-5">
          <div className="row m-0">
            <CarBox
              Model="Wagon R"
              CarPic={carimg}
              CarLogo={audiLogo}
              link="/CarDetails"
            />
            <CarBox
              Model="Wagon R"
              CarPic={carimg}
              CarLogo={audiLogo}
              link="/CarDetails"
            />
            <CarBox
              Model="Wagon R"
              CarPic={carimg}
              CarLogo={audiLogo}
              link="/CarDetails"
            />
            <CarBox
              Model="Wagon R"
              CarPic={carimg}
              CarLogo={audiLogo}
              link="/CarDetails"
            />
            <CarBox
              Model="Wagon R"
              CarPic={carimg}
              CarLogo={audiLogo}
              link="/CarDetails"
            />
            <CarBox
              Model="Wagon R"
              CarPic={carimg}
              CarLogo={audiLogo}
              link="/CarDetails"
            />
            <CarBox
              Model="Wagon R"
              CarPic={carimg}
              CarLogo={audiLogo}
              link="/CarDetails"
            />
            <CarBox
              Model="Wagon R"
              CarPic={carimg}
              CarLogo={audiLogo}
              link="/CarDetails"
            />
          </div>
        </main>
      </div>
    </>
  );
}
