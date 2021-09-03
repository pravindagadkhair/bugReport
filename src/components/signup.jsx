import React from "react";
const Signup = () => {
  return (
    <div style={{ marginTop: 30 }} className="row">
      <div className="col-md-4" />
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h2>Sign Up</h2>
          </div>
          <div className="card-body">
            <div className="form">
              <p className="hint-text">
                Create your account. It's free and only takes a minute.
              </p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="full_name"
                  placeholder="Full Name"
                  required="required"
                />
              </div>
              <div className="form-group">
                {/* <input type="text" [(ngModel)]="role" class="form-control" name="role" placeholder="Role" required="required"> */}
                <select
                  className="form-control"
                  name="role"
                  required="required"
                >
                  <option value selected data-default>
                    Role
                  </option>
                  <option value="ProjectManager">ProjectManager</option>
                  <option value="Developer">Developer</option>
                  <option value="TestEngineer">TestEngineer</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  minLength={5}
                  required="required"
                />
              </div>
              {/* <div class="form-group">
                    <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required">
                </div>         */}
              {/* <div class="form-group">
                    <label class="checkbox-inline"><input type="checkbox" required="required"> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                </div> */}
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-success btn-md btn-block"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="text-center">
            Already member of System ? <a href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
