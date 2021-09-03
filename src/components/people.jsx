import React from "react";
const People = () => {
  return (
    <div style={{ marginTop: 30 }} className="card">
      <div className="p-3 mb-2 bg-light">
        <h2>Community</h2>
      </div>
      <div className="card-body">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th style={{ width: 10 }}>Sr No</th>
              <th style={{ width: 10 }}>Person ID</th>
              <th>Name</th>
              <th>Email Id</th>
              <th style={{ width: 200 }}>Role</th>
              <th>Project Alloted(ID)</th>
              <th style={{ width: 150 }}>Action</th>
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
                {"{"}person['personId']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}person['personName']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}person['personEmail']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}person['role']{"}"}
                {"}"}
              </td>
              <td>
                {"{"}
                {"{"}person['assignedProjects']{"}"}
                {"}"}
              </td>
              {/* <td >
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="{{person['assignedProjects']}}">
        {{person['assignedProjects']}}
      </button> 
      </td> */}
              <td>
                <button className="btn-sm btn-info">Assign Project</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default People;
