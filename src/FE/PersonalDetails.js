import React from "react";
import { Link } from "react-router-dom";
export default function PersonalDetails() {
  return (
    <>
      {" "}
      <div className="col-sm-12  mx-auto">
        <div id="ui">
          <form className="form_group  px-5  mb-3   ">
            <div className="row">
              <div className="col-sm-4">
                <div className="form-floating mb-3 border-bottom">
                  <input
                    type="Fname"
                    className="form-control"
                    id="Fname"
                    placeholder="Full Name"
                  />
                  <label htmlFor="email">Full Name</label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-floating mb-3 border-bottom">
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    placeholder="Mobile Number"
                  />
                  <label htmlFor="mobile"> Mobile Number </label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-floating mb-3 border-bottom">
                  <input
                    type="text"
                    className="form-control"
                    id="AltMobile"
                    placeholder="Alternate Mobile Number"
                  />
                  <label htmlFor="mobile">Alternate Mobile Number </label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-floating mb-3 border-bottom">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                  <label htmlFor="mobile">Email </label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-floating mb-3 border-bottom">
                  <input
                    type="date"
                    className="form-control"
                    id="DOB"
                    placeholder="DOB"
                  />
                  <label htmlFor="mobile">Date of birth </label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-floating mb-3 border-bottom">
                  <input
                    type="text"
                    className="form-control"
                    id="PinCode"
                    placeholder="Pin Code"
                  />
                  <label htmlFor="mobile">Pin Code </label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-floating mb-3 border-bottom">
                  <textarea
                    type="text"
                    className="form-control"
                    id="Address"
                    placeholder="Address"
                    style={{ height: "75px" }}
                  ></textarea>
                  <label htmlFor="mobile">Address</label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-bottom mb-2 ">
                  <label className="ms-0" htmlFor="Varient m-0">
                    City
                  </label>
                  <select
                    type="text"
                    className="form-control form-select"
                    id="State"
                    placeholder="State "
                  >
                    <option value="">Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-bottom mb-2 ">
                  <label className="ms-0" htmlFor="Varient m-0">
                    State
                  </label>
                  <select
                    type="text"
                    className="form-control form-select"
                    id="City"
                    placeholder="City "
                  >
                    <option value="">Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-floating mb-3 border-bottom">
                  <input
                    type="date"
                    className="form-control my-2"
                    id="ExpectedDate"
                    placeholder="ExpectedDate"
                  />
                  <label htmlFor="mobile">Expected Delivery Date </label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-bottom mb-2 ">
                  <label className="ms-0" htmlFor="Payment ">
                    Payment Method
                  </label>
                  <select
                    type="text"
                    className="form-control form-select"
                    id="Payment"
                    placeholder="Payment "
                  >
                    <option value="">Select</option>
                    <option value="1">Cash</option>
                    <option value="2">Finance</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className="col-sm-4">
                <div className="form-check form-switch ms-auto py-1 mt-4">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Any on-going EMI
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-floating mb-3 border-bottom">
                  <input
                    type="text"
                    className="form-control my-2"
                    id="ExpectedDate"
                    placeholder="ExpectedDate"
                  />
                  <label htmlFor="mobile">EMI amount</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
