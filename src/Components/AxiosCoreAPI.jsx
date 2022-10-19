import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Get = () => {
  const [data, setData] = useState([])
  useEffect(() => {
  
    fetchdata()
  }, [])
  const fetchdata = async () => {
    const response = await axios.get("https://localhost:7126/api/Registrations");
    setData(response.data)
  }

  return (
    <div>
       <h1 className='text-center'>User Details</h1>
      <div>      
        <table className="table border shadow table-striped text-center" style={{width:70,marginLeft:500}}>
          <thead className='table-dark' >
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, index) => (
              <tr>
                <th scope="row">{index + 1} </th>
                <td>{x.username}</td>
                <td>{x.useremail}</td>
                <td>{x.password}</td>
                <td>{x.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Get;