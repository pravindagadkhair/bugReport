import React from "react";
import "../styles/add_bg.css";
const AddBug = () => {
  return (
    <div className="centered">
      {/* <div style="margin-top: 10px;" class="card"> */}
      <div className="card-header">
        <h2>
          {"{"}
          {"{"}issue ? 'Update' : 'Add'{"}"}
          {"}"} bug
        </h2>
      </div>
      <div className="card-body">
        <div className="form">
          <div className="form-group">
            <label>Bug Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Bug Description</label>
            <input type="text" className="form-control" />
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label>Created By</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Created On</label>
                <input type="date" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Priority </label>
                {/* <input  type="date" class="form-control"> */}
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Set Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Severity</label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Set Severity</option>
                  <option value="Blocker">Blocker</option>
                  <option value="Critical">Critical</option>
                  <option value="Major">Major</option>
                  <option value="Minor">Minor</option>
                  <option value="Trivial">Trivial</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Status</label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Set Status</option>
                  <option value="Active">Active</option>
                  <option value="InProgress">InProgress</option>
                  <option value="OnTrack">OnTrack</option>
                  <option value="Delayed">Delayed</option>
                  <option value="InTesting">InTesting</option>
                  <option value="OnHold">OnHold</option>
                  <option value="Approved">Approved</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Planning">Planning</option>
                  <option value="Completed">Completed</option>
                  <option value="Invoiced">Invoiced</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Project ID</label>
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
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Assigned To</label>
                <select className="form-control">
                  <option value>-- Select Person --</option>
                  <option>
                    {"{"}
                    {"{"}person.personId{"}"}
                    {"}"}-{"{"}
                    {"{"}person.personName{"}"}
                    {"}"}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button style={{ marginLeft: 5 }} className="btn-success btn-sm">
              {"{"}
              {"{"}issue ? 'Update' : 'Add'{"}"}
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

export default AddBug;
