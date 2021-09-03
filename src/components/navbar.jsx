import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="center-content">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* <a class="navbar-brand" href="#">BTS</a> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a
              style={{
                textAlign: "left",
                fontStyle: "oblique",
                fontSize: "larger",
              }}
              className="navbar-brand"
              href="#"
            >
              TECHIESYNC - A Bug Tracker Tool
            </a>
            {/* <a style="text-align: left;font-style: normal;font-size: x-small;" >A Bug Tracker Tool</a> */}
            <ul className="navbar-nav ml-auto">
              {/* <ul class="nav nav-tabs"> */}
              <li className="nav-item">
                <a
                  routerlink="/dashboard"
                  style={{ fontSize: "larger" }}
                  className="nav-link "
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  routerlink="/projects"
                  style={{ fontSize: "larger" }}
                  className="nav-link"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  routerlink="/issues"
                  style={{ fontSize: "larger" }}
                  className="nav-link"
                >
                  Issues
                </a>
              </li>
              <li className="nav-item">
                <a
                  routerlink="/people"
                  style={{ fontSize: "larger" }}
                  className="nav-link"
                >
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a style={{ fontSize: "larger" }} className="nav-link">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <router-outlet />
        </div>
      </div>
      {/* <div class="center-content">
  <div class="container-fluid">
    <h2>BUG TRACKING SYSTEM</h2>
    <button (click)="onLogin()">Login</button>
    <button (click)="onSignUp()" style="margin-left: 10px;">Sign Up</button>
  </div>
</div> */}
    </>
  );
}
