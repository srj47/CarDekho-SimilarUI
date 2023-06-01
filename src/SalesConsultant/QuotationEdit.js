import axios from "axios";
import React, { useState } from "react";
import SideBar from "./SideBar";

export default function QuotationEdit() {
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
            <div className="col-sm-10  mx-auto">
              <div id="ui">
                <form
                  onSubmit={saveDetails}
                  className="form_group shadow p-5 mb-5 bg-body rounded "
                >
                  <div className="row">
                    <div className="col-12">
                      <h6 className="mb-4 te">PERSONAL DETAILS</h6>
                    </div>
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
                    <div className="col-12">
                      <h6 className="mb-4 te">Car Details </h6>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-floating mb-3 border-bottom">
                        <input
                          type="date"
                          className="form-control my-2"
                          id="BookingDate"
                          placeholder="Booking Date"
                        />
                        <label htmlFor="BookingDate">Booking Date </label>
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
                    <div className="col-sm-4">
                      <div className="border-bottom mb-2 ">
                        <label className="ms-0" htmlFor="CustomerType ">
                          Customer type
                        </label>
                        <select
                          type="text"
                          className="form-control form-select"
                          id="CustomerType"
                          placeholder="CustomerType "
                        >
                          <option value="">Select</option>
                          <option value="1">Walk in</option>
                          <option value="2">type 2</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="ModelInterested" className="form-label  ">
                        Model Interested
                      </label>
                      <input
                        className="form-control border-bottom mb-2"
                        list="datalistOptions"
                        id="ModelInterested"
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco" />
                        <option value="New York" />
                        <option value="Seattle" />
                        <option value="Los Angeles" />
                        <option value="Chicago" />
                      </datalist>
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="Variant" className="form-label  ">
                        Variant
                      </label>
                      <input
                        className="form-control border-bottom mb-2"
                        list="datalistOptions"
                        id="Variant"
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco" />
                        <option value="New York" />
                        <option value="Seattle" />
                        <option value="Los Angeles" />
                        <option value="Chicago" />
                      </datalist>
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="Colour" className="form-label  ">
                        Colour
                      </label>
                      <input
                        className="form-control border-bottom mb-2"
                        list="datalistOptions"
                        id="Colour"
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco" />
                        <option value="New York" />
                        <option value="Seattle" />
                        <option value="Los Angeles" />
                        <option value="Chicago" />
                      </datalist>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-floating mb-3 border-bottom">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="VINAllotted"
                          placeholder="Booking Date"
                        />
                        <label htmlFor="VINAllotted">VIN Allotted </label>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="PreferredBank1" className="form-label  ">
                        Preferred bank1
                      </label>
                      <input
                        className="form-control border-bottom mb-2"
                        list="datalistOptions"
                        id="PreferredBank1"
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco" />
                        <option value="New York" />
                        <option value="Seattle" />
                        <option value="Los Angeles" />
                        <option value="Chicago" />
                      </datalist>
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="PreferredBank2" className="form-label  ">
                        Preferred bank2
                      </label>
                      <input
                        className="form-control border-bottom mb-2"
                        list="datalistOptions"
                        id="PreferredBank2"
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco" />
                        <option value="New York" />
                        <option value="Seattle" />
                        <option value="Los Angeles" />
                        <option value="Chicago" />
                      </datalist>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-floating mb-3 border-bottom">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="LoanTenure "
                          placeholder="Loan Tenure "
                        />
                        <label htmlFor="LoanTenure ">Loan Tenure </label>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-floating mb-3 border-bottom">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="LoanAmt "
                          placeholder="Loan Amt. "
                        />
                        <label htmlFor="LoanAmt ">Loan Amount </label>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-floating mb-3 border-bottom">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="Rate "
                          placeholder="rate "
                        />
                        <label htmlFor="Rate ">Rate of Interest </label>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-floating mb-3 border-bottom">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="RoadPrice "
                          placeholder="RoadPrice "
                        />
                        <label htmlFor="RoadPrice ">
                          Bifurcation of On-road price
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-floating mb-3 border-bottom">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="EXshowroomPrice "
                          placeholder="EXshowroomPrice "
                        />
                        <label htmlFor="EXshowroomPrice ">
                          EX- showroom price
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-floating mb-3 border-bottom">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="RegistrationCharges "
                          placeholder="RegistrationCharges "
                        />
                        <label htmlFor="RegistrationCharges ">
                          Registration Charges (RTO)
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-floating mb-3 border-bottom">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="InsuranceCharges "
                          placeholder="InsuranceCharges "
                        />
                        <label htmlFor="InsuranceCharges ">
                          Insurance charges
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-floating mb-3 border-bottom">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="AccessoryValue "
                          placeholder="AccessoryValue "
                        />
                        <label htmlFor="AccessoryValue ">Accessory Value</label>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="d-grid gap-2 mt-4">
                        <button className="btn btn-primary" type="submit">
                          Proceed to quotation
                        </button>
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
