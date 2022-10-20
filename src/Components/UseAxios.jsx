import React from "react";
//npm install use-axios-client --force
import { useAxios } from "use-axios-client";
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
        color:'blue',
        border:'2px solid white',
        padding:'10px'
    }

})

export default function UseAxiosAPI() {
    //Component Styling
    const styles=tableStyle()

    const { data, error, loading } = useAxios({
        url: "https://localhost:7126/api/Registrations"
    })

    if (loading||!data) return "Loading......";
    if(error) return "Error loading data";

    return (
        <div>
            <h1 className='text-center'>User Details</h1>
            <div>
                <table className="table border shadow table-striped text-center" style={{ width: 70, marginLeft: 500 }}>
                    <thead className={styles.thead} >
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((x,index) => (
                            <tr key={index} className={styles.tbody}>
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
