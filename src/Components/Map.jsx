import React from "react";
//array
const empdetails=['John','Peter','Sam','Shaun','Lee'];
//array
const depdetails=[
    {
        "id":1,
        "name":"IT"
    },
    {
        "id":2,
        "name":"ADMIN"
    },
    {
        "id":3,
        "name":"TESTING"
    },
    {
        "id":4,
        "name":"TRAINING"
    },
    {
        "id":5,
        "name":"DESIGNING"
    }

];
//MAP WITHOUT ID
function Fetch_empdetails()
{
    return(
    <>
    {/* key attribute is mandatory when using map function */}
    {/* filter(emp=>emp.includes('J')) */}
    {empdetails.filter(emp=>emp.length==5).map(
        empname=>
        (
            <h3 key={empname.index} style={{textAlign:"center"}}>
                Employee Name : {empname}
            </h3>
        )

    )}
    <br></br>
    <hr>
    </hr>
    <Fetch_depdetails></Fetch_depdetails>
    </>
    )
}

export default Fetch_empdetails;
//MAP WITH ID
function Fetch_depdetails()
{
    return(
    <>
    {/* key attribute is mandatory when using map function */}
    {depdetails.map(
        depname=>
        (
            <h3 key={depname.id} style={{textAlign:"center"}}>
                Department Name : {depname.name}
            </h3>
        )

    )}
    </>
    )
}