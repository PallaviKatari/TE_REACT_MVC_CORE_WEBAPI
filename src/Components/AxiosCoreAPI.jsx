import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
//COMPONENT STYLING
//npm install react-jss --force -> css
import { createUseStyles } from "react-jss";

const tableStyle=createUseStyles({
    thead:{
        color:'red',
        border:'2px solid white',
        padding:'10px',
        backgroundColor:'pink',
        textShadow:'2px 2px 2px blue'
    },
    tbody:{
        color:'green',
        border:'2px solid white',
        padding:'10px'
    }

})
const Get = () => {
  const styles=tableStyle()
  const [data, setData] = useState([])
  useEffect(() => {
  
    fetchdata()
  }, [])
  const fetchdata = async () => {
    //https://localhost:7126/api/Registrations //.NET CORE WEB API
    //https://localhost:44300/api/registrations2 //.NET WEB API
    const response = await axios.get("https://localhost:44300/api/registrations2");
    setData(response.data)
  }

  return (
    <div>
       <h1>User Details</h1>
      <div>      
        <table className="table border shadow table-striped text-center" style={{width:70,marginLeft:500}}>
          <thead className={styles.thead} >
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Mobile</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
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