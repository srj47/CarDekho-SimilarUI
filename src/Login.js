import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// CSS Files
import "./assets/css/material-dashboard.css?v=3.0.2";
// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

export default function Login() {
  return (
    <>
      <main className="main-content  mt-0">
        <div
          className="page-header align-items-start min-vh-100"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <span className="mask bg-gradient-dark opacity-6" />
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-4 col-md-8 col-12 mx-auto">
                <div className="card z-index-0 fadeIn3 fadeInBottom">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                      <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                        Sign in
                      </h4>
                      <div className="row mt-3">
                        <div className="col-2 text-center ms-auto">
                          <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-facebook text-white text-lg" />
                          </a>
                        </div>
                        <div className="col-2 text-center px-1">
                          <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-github text-white text-lg" />
                          </a>
                        </div>
                        <div className="col-2 text-center me-auto">
                          <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-google text-white text-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form role="form" className="text-start">
                      <div class="form-floating mb-3 border-bottom">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="email">Email address</label>
                      </div>
                      <div class="form-floating mb-3 border-bottom">
                        <input
                          type="password"
                          className="form-control"
                          id="pass"
                          placeholder="Password"
                        />
                        <label htmlFor="pass">Password</label>
                      </div>

                      <div className="form-check form-switch d-flex align-items-center mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label mb-0 ms-2"
                          htmlFor="rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="text-center">
                        <Link to="/SCDashboard">
                          <button
                            type="button"
                            className="btn bg-gradient-primary w-100 my-4 mb-2"
                          >
                            Sign in
                          </button>
                        </Link>
                      </div>
                      <p className="mt-4 text-sm text-center">
                        Don't have an account?
                        {/* <a
                              href="../pages/sign-up.html"
                              className="text-primary text-gradient font-weight-bold"
                            >
                              Sign up
                            </a> */}
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
