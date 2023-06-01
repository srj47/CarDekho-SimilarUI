import React from "react";
import { Link } from "react-router-dom";
export default function PersonalDetails() {
  return (
    <>
      <div className="col-sm-12  mx-auto px-5">
        <div id="ui">
          <form className="form_group   ">
            <div className="row">
              <div className="colsm-12 mb-4">
                <label className="ms-0 me-4"> Work profile </label>
                <div className="form-check form-check-inline ps-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Private
                  </label>
                </div>
                <div className="form-check form-check-inline ps-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Government
                  </label>
                </div>
                <div className="form-check form-check-inline ps-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Bank
                  </label>
                </div>
                <div className="form-check form-check-inline ps-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Agriculture
                  </label>
                </div>
                <div className="form-check form-check-inline ps-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Business
                  </label>
                </div>
              </div>

              <div id="group1" className="row">
                <div className="col-sm-4">
                  <div className="form-floating mb-3 border-bottom">
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile Number"
                    />
                    <label htmlFor="mobile">Organisation name</label>
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
                    <label htmlFor="mobile">Tenure</label>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="border-bottom mb-2 ">
                    <label className="ms-0" htmlFor="Varient m-0">
                      Salaried Bank
                    </label>
                    <select
                      type="text"
                      className="form-control form-select "
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
                  <div className="form-floating mb-3 border-bottom">
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile Number"
                    />
                    <label htmlFor="mobile"> Annual Income </label>
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
                    <label htmlFor="mobile"> Gross Income </label>
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
                    <label htmlFor="mobile"> Net income </label>
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
                    <label htmlFor="mobile"> Credit Score </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
