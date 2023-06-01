import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import PersonalDetails from "./PersonalDetails";
import IncomeDetails from "./IncomeDetails";
import Documentation from "./Documentation";

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
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="btn btn-info col-12 dropdown dropdown-toggle text-start mb-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Personal Details
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body bg-white mb-4 rounded">
                    <PersonalDetails />
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="btn btn-info col-12 dropdown dropdown-toggle text-start mb-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Income Details
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-body bg-white mb-4 rounded"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body mt-0">
                    <IncomeDetails />
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="btn btn-info col-12 dropdown dropdown-toggle text-start mb-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Documents
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-body bg-white mb-4 rounded mt-0"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <Documentation />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 mt-4 text-center">
                <Link to="/CuratedOffer" className="btn btn-primary">
                  submit
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
