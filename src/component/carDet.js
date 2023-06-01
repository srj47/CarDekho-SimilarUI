import React from "react";
import "./carDet.css";
import carimg from "../img/car3.jpeg";

export default function EnquiryForm() {
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col-sm-12">
            <label className="select1" htmlFor="car">
              {" "}
              <b>select varient :</b>
            </label>
            <select
              id="car"
              className="form-select  select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected="">Open this select menu</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5  ">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={carimg} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={carimg} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={carimg} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="row col-sm-7">
            <h2>Swift </h2>
            <div className="col-sm-4">
              <div className="details shadow px-3 py-2 mb-3 bg-body rounded">
                <p className="m-0 text-secondary"> ex showroom price </p>
                <div className="d-flex align-content-end flex-wrap">
                  <i className="fa fa-inr  rs-sign mt-2"> </i>
                  <p className="font m-0">5000</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="details shadow px-3 py-2 mb-3 bg-body rounded">
                <p className="m-0 text-secondary"> on road price </p>
                <div className="d-flex align-content-end flex-wrap">
                  <i className="fa fa-inr  rs-sign mt-2"> </i>
                  <p className="font m-0">5000</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="details shadow px-3 py-2 mb-3 bg-body rounded">
                <p className="m-0 text-secondary  "> price </p>
                <div className="d-flex align-content-end flex-wrap">
                  <i className="fa fa-inr  rs-sign mt-2"> </i>
                  <p className="font m-0">5000</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="details shadow px-3 py-2 mb-3 bg-body rounded">
                <p className="m-0 text-secondary"> essential kit price </p>
                <div className="d-flex align-content-end flex-wrap">
                  <i className="fa fa-inr  rs-sign mt-2"> </i>
                  <p className="font m-0">5000</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="details shadow px-3 py-2 mb-3 bg-body rounded rounded-3">
                <p className="m-0 text-secondary">tcs</p>
                <div className="d-flex align-content-end flex-wrap">
                  <i className="fa fa-inr  rs-sign mt-2"> </i>
                  <p className="font m-0">5000</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="details shadow px-3 py-2 mb-3 bg-body rounded rounded-3">
                <p className="m-0 text-secondary"> registration charge</p>
                <div className="d-flex align-content-end flex-wrap">
                  <i className="fa fa-inr  rs-sign mt-2"> </i>
                  <p className="font m-0">5000</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="d-grid gapx-3 py-2">
                <button className="btn btn-primary" type="button">
                  BUY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
