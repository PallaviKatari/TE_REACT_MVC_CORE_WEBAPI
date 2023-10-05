import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import axios from "axios";
import "./Employee.css";

export default function EmployeeList() {
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshEmployeeList();
  }, []);

  //APIKEY AUTHORIZATION - React_ImageUpload_Core_API Repository - .NET Core API - API Keys - Query Params
  //const employeeAPI = (url = "https://localhost:44388/api/Employee?XApiKey=pgH7QzFHJx4w46fI~5Uzi4RvtTwlEXp") => {
    const employeeAPI = (url = "https://localhost:44388/api/Employee") => {
  return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  function refreshEmployeeList() {
    employeeAPI()
      .fetchAll()
      .then((res) => {
        setEmployeeList(res.data);
      })
      .catch((err) => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("employeeID") == "0")
      employeeAPI()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshEmployeeList();
        })
        .catch((err) => console.log(err));
    else
      employeeAPI()
        .update(formData.get("employeeID"), formData)
        .then((res) => {
          onSuccess();
          refreshEmployeeList();
        })
        .catch((err) => console.log(err));
  };

  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };

  const onDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Are you sure to delete this record?"))
      employeeAPI()
        .delete(id)
        .then((res) => refreshEmployeeList())
        .catch((err) => console.log(err));
  };

  const imageCard = (data) => (
    <div
      className="card"
      onClick={() => {
        showRecordDetails(data);
      }}
    >
      <img src={data.imageSrc} className="card-img-top rounded-circle" />
      <div className="card-body">
        <h5>{data.employeeName}</h5>
        <span>{data.occupation}</span> <br />
        <button
          className="btn btn-light delete-button"
          onClick={(e) => onDelete(e, parseInt(data.employeeID))}
        >
          Delete
        </button>
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="jumbotron jumbotron-fluid py-4">
          <div className="container text-center">
            <h1 className="display-4">Employee Register</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Employee addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-md-12">
          <table>
            <tbody>
              {//tr > 3 td
              [...Array(Math.ceil(employeeList.length / 6))].map((e, i) => (
                <tr key={i}>
                  <td>{imageCard(employeeList[6 * i])}</td>
                  <td>
                    {employeeList[6 * i + 1]
                      ? imageCard(employeeList[6 * i + 1])
                      : null}
                  </td>
                  <td>
                    {employeeList[6 * i + 2]
                      ? imageCard(employeeList[6 * i + 2])
                      : null}
                  </td>
                  <td>
                    {employeeList[6 * i + 3]
                      ? imageCard(employeeList[6 * i + 3])
                      : null}
                  </td>
                  <td>
                    {employeeList[6 * i + 4]
                      ? imageCard(employeeList[6 * i + 4])
                      : null}
                  </td>
                  <td>
                    {employeeList[6 * i + 5]
                      ? imageCard(employeeList[6 * i + 5])
                      : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
