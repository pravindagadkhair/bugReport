import react from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="centered">
      <h2 className="card-header">Login</h2>
      <div className="card-body">
        <div className="form-group ">
          <label htmlFor>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor>Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <button style={{ marginRight: 10 }} className="btn btn-success">
            Login
          </button>
          <a style={{ marginLeft: 20 }} className="link-info">
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
