import React from "react";
import { Link } from "react-router-dom";
export default function PersonalDetails() {
  return (
    <>
      <div className="col-sm-12  mx-auto">
        <div id="ui">
          <form className="form_group  px-5  mb-3   ">
            <div className="row">
              <div className="col-sm-4">
                <div className="mb-3 ">
                  <label htmlFor="formFile" className="form-label">
                    KYC
                  </label>
                  <input
                    className="form-control border"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3 ">
                  <label htmlFor="formFile" className="form-label">
                    Income proof
                  </label>
                  <input
                    className="form-control border"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3 ">
                  <label htmlFor="formFile" className="form-label">
                    Proof of address
                  </label>
                  <input
                    className="form-control border"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3 ">
                  <label htmlFor="formFile" className="form-label">
                    Firm Document
                  </label>
                  <input
                    className="form-control border"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
