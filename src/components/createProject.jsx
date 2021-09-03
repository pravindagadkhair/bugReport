import React from "react";
import "../styles/createproject.css";
const createProject = () => {
  return (
    <div className="centered">
      {/* <div style="margin-top: 10px;" class="card"> */}
      <div className="card-header">
        <h3>
          {"{"}
          {"{"}project?'Update':'Add'{"}"}
          {"}"} Project
        </h3>
      </div>
      <div className="card-body">
        <div className="form">
          <div className="form-group">
            <label>Project Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Created By</label>
            <input type="text" className="form-control" />
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Start Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Target End Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Actual End Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label>Modified By</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Modified On</label>
                <input type="date" className="form-control" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <button style={{ marginRight: 5 }} className="btn-success btn-sm">
              {"{"}
              {"{"}project?'Update':'Add'{"}"}
              {"}"}
            </button>
            <button style={{ marginLeft: 5 }} className="btn-danger btn-sm">
              Cancel
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CreateProject;
