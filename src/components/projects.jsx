import React from "react";
import "../styles/projects.css";
const Projects = () => {
  return (
    <div style={{ marginTop: 30 }} className="card">
      <div className="p-3 mb-2 bg-light">
        <button
          style={{ marginBottom: 10 }}
          type="button"
          className="btn btn-primary float-right"
        >
          Create Project
        </button>
        <h2>Projects</h2>
      </div>
      <div className="card-body">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th style={{ width: 5 }}>Sr No.</th>
              <th style={{ width: 5 }}>Project ID</th>
              <th>Name</th>
              <th>Created by</th>
              <th>Start Date</th>
              <th>Target End Date</th>
              <th>Actual End Date</th>
              <th>Modified by</th>
              <th>Modified On</th>
              {/* <th>Status</th> */}
              <th style={{ width: 150 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr let index='index"'>
              <td>
                {"{"}
                {"{"}index + 1{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}project['projectId']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}project['projectName']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}project['createdBy']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}project['startDate']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}project['targetEndDate']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}project['actualEndDate']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}project['modifiedBy']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}project['modifiedOn']{"}"}
                {"}"}
              </td>
              {/* <td>{{project['status']}}</td> */}
              <td>
                <button
                  style={{ marginLeft: 10 }}
                  className="btn btn-warning btn-sm"
                >
                  Edit
                </button>
                <button
                  style={{ marginLeft: 10 }}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
                {/* <button (click)="onEdit(project)" class="btn btn-warning">Edit</button> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
