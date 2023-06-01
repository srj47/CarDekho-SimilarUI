import React from "react";
const myNav = {
  position: "absolute",
  zIndex: "10",
  width: "100vw",
};
export default function NavBar() {
  return (
    <nav style={myNav} className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid d-flex">
        <a className="navbar-brand mr-auto" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" aria-current="page" href="#">
              Link 1
            </a>
            <a className="nav-link" href="#">
              Link 2
            </a>
            <a className="nav-link" href="#">
              Link 3
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
