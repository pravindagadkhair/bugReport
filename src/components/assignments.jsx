import React from "react";
import "../styles/assignments.css";

const Assignments = () => {
  return (
    <div className="centered">
      {/* <div style="margin-top: 10px;" class="card"> */}
      <div className="card-header">
        <h2>Assign Project</h2>
      </div>
      <div className="card-body">
        <div className="form">
          <div className="form-group">
            <label>Person Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Person Email</label>
            <input type="text" className="form-control" />
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label>Role</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="form-group">
            {/* <input [(ngModel)]="proj" type="text" class="form-control"> */}
            <label>Project Name</label>
            <select id="pid" className="form-control">
              <option value>--Select Project --</option>
              <option>
                {"{"}
                {"{"}project.projectId{"}"}
                {"}"}-{"{"}
                {"{"}project.projectName{"}"}
                {"}"}
              </option>
            </select>
          </div>
          <div className="form-group">
            <button style={{ marginLeft: 5 }} className="btn-success btn-sm">
              Save
            </button>
            <button style={{ marginLeft: 5 }} className="btn-info btn-sm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
