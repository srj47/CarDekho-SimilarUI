import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

export default function EnquiryForm() {
  const [state, setState] = useState({
    full_name: "",
    mobile: "",
    alt_mobile: "",
    email: "",
    date_of_birth: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
    expected_delivery_date: "",
    payment_method: "",
  });

  const handleInput = (e) => {
    setState((f) => {
      return {
        ...f,
        [e.target.name]: e.target.value,
      };
    });
  };

  const saveDetails = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(state));
    // const res = await axios.post(
    //   "https://trueleo-dev-finman.herokuapp.com/api/enquiry",
    //   state
    // );
    // bt fetch ...............
    // fetch("https://finmanlocal.herokuapp.com/api/enquiry", {
    //   method: "POST",
    //   headers: {
    //     Authorization: "Bearer " + state,
    //   },
    //   body: JSON.stringify(state),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   });
  };

  return (
    <>
      <div className="g-sidenav-show bg-gray-200">
        <SideBar />
        <main className="main-content position-relative   border-radius-lg  pt-5">
          <div className="row m-0">
            <div className="col-sm-7  mx-auto">
              <div id="ui">
                <form
                  onSubmit={saveDetails}
                  className="form_group shadow p-5 mb-5 bg-body rounded "
                >
                  <h4 className="mb-4 te">PERSONAL DETAILS</h4>
                  <div className="row">
                    <div className="col-lg-12">
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
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
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
                    <div className="col-lg-12">
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
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
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
                    <div className="col-lg-12">
                      <div className="form-floating mb-3 border-bottom">
                        <textarea
                          type="text"
                          className="form-control"
                          id="Address"
                          placeholder="Address"
                          row="4"
                        ></textarea>
                        <label htmlFor="mobile">Address</label>
                      </div>
                    </div>
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
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

                    <div className="col-sm-12">
                      <div className="d-grid gap-2 mt-4">
                        <Link to="" className="btn btn-primary" type="submit">
                          Proceed to quotation
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
