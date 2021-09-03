import React from "react";
import "../styles/issue.css";

const Issue = () => {
  return (
    <div style={{ marginTop: 30 }} className="card">
      <div className="card-header">
        <button
          style={{ marginBottom: 10 }}
          type="button"
          className="btn btn-primary float-right"
        >
          Add Bug
        </button>
        <h2>Bugs Backlog</h2>
      </div>
      <div className="card-body">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Sr No</th>
              {/* <th>Bug ID</th> */}
              <th>Bug Name</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Project</th>
              <th>Assigned To</th>
              <th>Identified By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr let index='index"'>
              <td>
                {"{"}
                {"{"}index + 1{"}"}
                {"}"}
              </td>
              {/* <td>{{bug['issueId']}}</td> */}
              <td>
                {"{"}
                {"{"}bug['issueName']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}bug['issueDescription']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}bug['priority']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}bug['severity']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}bug['status']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}bug['projects']['projectName']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}bug['people']['personName']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}bug['createdBy']{"}"}
                {"}"}
              </td>
              <td>
                <button
                  style={{ marginLeft: 10 }}
                  className="btn btn-warning btn-sm"
                >
                  Edit
                </button>
                {/* <button (click)="onDelete(bug)" style="margin-left: 10px;" class="btn btn-danger btn-sm">Delete</button> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Issue;
