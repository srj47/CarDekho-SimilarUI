import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "./ContextApi/AuthProvider";
import axios from "./api/axios";

import logo from "./img/logo2.png";
import "./login.css";

// img and icons

const LOGIN_URL = "/token";
export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const query = new URLSearchParams({
        username: user,
        password: pwd,
      });
      const response = await axios.post(LOGIN_URL, query, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessTocken = response?.data.accessToken;
      const roles = response?.data.roles;
      setAuth({ user, pwd, roles, accessTocken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>you are loged in </h1>
        </section>
      ) : (
        <>
          <div className="loginBG "></div>
          <img className="loginImgBg" />
          <div className="  text-light">
            <div className="col-sm-3  loginContainer border-0 text-center  shadow position-absolute  top-50 start-50 translate-middle">
              <div className=" d-flex justify-content-center  ">
                <div className="login-title p-2  text-light">
                  <img className="m-3 logo mb-5" src={logo} alt="..." />
                  <h4 className="text-light">Login</h4>
                </div>
              </div>
              <div className="col-sm-12 p-5 mt-4 login_form">
                <div className="mb-4 mt-3">
                  <i>Hey, Welcome back! We missed you, Let's log you in!</i>
                  <p
                    ref={errRef}
                    // className={errMsg ? "errmsg" : "offscreen"}
                    className="text-danger"
                    aria-live="asserive"
                  >
                    {errMsg}
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form__group1 field1">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form__field1"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      required
                    />
                    <label htmlFor="username" className="form__label1">
                      Dealer Code
                    </label>
                  </div>
                  <div className="form__group1 field1">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form__field1"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      autoComplete="off"
                      required
                    />
                    <label htmlFor="password" className="form__label1">
                      Password
                    </label>
                  </div>

                  <div className="row mt-5 ">
                    <Link to="/SCDashboard">
                      <button
                        className="col-sm-6 btn btn-primary mx-auto bg-5 border border-0"
                        type="submit"
                      >
                        Log in
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
