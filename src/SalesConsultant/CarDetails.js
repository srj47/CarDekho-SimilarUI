import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import "./CarDetails.css";
import carimg from "../img/car3.jpeg";

const ColorDot = (props) => {
  return (
    <>
      {/* <i className="fa fa-circle fa-2x ms-3" style={{ color: props.color }} /> */}
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          {props.color}
        </label>
      </div>
    </>
  );
};
export default function CarDetails() {
  return (
    <>
      <div className="g-sidenav-show bg-gray-200">
        <SideBar />
        <main className="main-content position-relative   border-radius-lg  pt-5">
          <div className="row px-5">
            <div className="col-sm-12 px-3   ">
              <div className="card p-4">
                <div className="row p-3">
                  <div className="col-sm-3">
                    <label className="ms-0" htmlFor="Varient m-0">
                      Model
                    </label>
                    <h5 className="m-0">Maserati</h5>
                    <hr className="my-2" />
                    <div className="border-bottom mb-2 ">
                      <label className="ms-0" htmlFor="Varient m-0">
                        Variant
                      </label>
                      <select
                        type="text"
                        className="form-control form-select m-0 p-0"
                        id="Variant"
                        placeholder="Variant "
                      >
                        <option value="">Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="border-bottom mb-2 ">
                      <label className="ms-0" htmlFor="Transmision m-0">
                        Transmision
                      </label>
                      <select
                        type="text"
                        className="form-control form-select m-0 p-0"
                        id="Transmision"
                        placeholder="Transmision "
                      >
                        <option value="">Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="col-sm-12 text-center">
                      <img src={carimg} className="col-sm-12" alt="..." />
                    </div>
                  </div>
                </div>

                <div className=" mt-4 d-flex justify-content-center">
                  <div className="col-sm-2">
                    <p className=" text-dark-grey">What's your Color </p>
                  </div>
                  <div className=" ">
                    <ColorDot color="orange" />
                    <ColorDot color="yellow" />
                    <ColorDot color="red" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 px-3 mt-4 ">
              <div className="card py-4 px-5  ">
                <table className=" table table-sm table-hover ">
                  <tbody className="p-3">
                    <tr className=" ">
                      <td colSpan="2" className="text-dark-grey pt-3">
                        <h6>Know how much your car is worth.</h6>
                      </td>
                    </tr>
                    <tr className="  ">
                      <td className="text-dark-grey">EX- SHOWROOM PRICE</td>
                      <td className="">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            value="200000"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="    ">
                      <td className="text-dark-grey">Registration Charges</td>
                      <td className="text-end text-danger">
                        <div className="  p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            value="1000"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="text-dark-grey">Insurance.</td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            value="50000"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="text-dark-grey">
                        TCS( Tax collected at source)
                      </td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            value="3380"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="text-dark-grey">Essential Kit</td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            value="5800"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="text-dark-grey">ON-ROAD PRICE</td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            value="250000"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="text-dark-grey">Fast tag</td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            value="4000"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-sm-12 px-3 mt-4 ">
              <div className="card py-4 px-5 ">
                <table className=" table table-sm table-hover ">
                  <tbody className="p-3">
                    <tr className=" ">
                      <td className="text-dark-grey">
                        <b>On road price</b>
                      </td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            value="250000"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="text-dark-grey">Accessories</td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            placeholder="Enter Amt."
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="text-dark-grey">
                        VAS (Value Added Services)
                      </td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            placeholder="Enter Amt."
                          />
                        </div>
                      </td>
                    </tr>

                    <tr className=" ">
                      <td colSpan="2" className="text-dark-grey pt-3">
                        <h6>
                          Look! We have curated some <b>benefits</b> for you.
                        </h6>
                      </td>
                    </tr>

                    <tr className=" ">
                      <td className="text-dark-grey">Cash Schemes</td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            placeholder="Enter Amt."
                          />
                        </div>
                      </td>
                    </tr>

                    <tr className=" ">
                      <td className="text-dark-grey">VIN Discount</td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            placeholder="Enter Amt."
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="text-dark-grey">Exchange</td>
                      <td className="d-flex text-danger">
                        <div className="form-check form-switch ms-auto py-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="text-dark-grey">Exchange Amt.</td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            placeholder="Enter Amt."
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="text-dark-grey">Registration Number</td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            placeholder="Enter Amt."
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="text-dark-grey">Number of owner</td>
                      <td className="text-end text-danger">
                        <div className=" p-0 m-0">
                          <input
                            type="text"
                            className="myinput form-control p-0 m-0  "
                            id="myinput"
                            align="right"
                            placeholder="Enter Amt."
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className=" col-sm-12 px-3 mt-4 mb-4 ">
              <div className="card py-4 px-5 ">
                <div className="row">
                  <div className="col-sm-6 mt-4">
                    <p className="m-0 text-dark-grey">FINAL ON-ROAD PRICE</p>
                    <h2 className="text-danger">
                      <h6 className="m-0">Rs. 300000 </h6>
                      <p className="m-0">Three Lakh Rupees only.</p>
                    </h2>
                  </div>
                  <Link to="/EnquiryForm" className="col-sm-6 mt-4 text-end">
                    <button className="btn btn-primary ">Get Quotation</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
