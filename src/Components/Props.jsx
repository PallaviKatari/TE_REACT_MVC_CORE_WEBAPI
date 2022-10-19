import React from 'react';
//Functional component -> arrow function
const Employeedetails=(props)=>{
    return(
        <p style={{textAlign:"center"}}>Employee Details = {props.empid} {props.empname} {props.empdesignation}           
        </p>
    )
}

export default Employeedetails;