import React,{useState} from "react";

//Functional components -> Stateless
//Stateful Logic -> React Hooks
//Hooks -> prefix use
//useState -> available in react by default -> import React from "react";
export default function UserDetails(){
    const[name,setName]=useState("John");
    return(
        <>
        <h4 style={{textAlign:"right"}}>Welcome {name}</h4>
        <br>
        </br>
        {/* text =  Johnny */}
        <ChangeName ChangeText={(text)=>setName(text)}/>
        </>
    )
}
//functional component to change the value of the name using the react hook
//one-way data binding 
function ChangeName(props){
    return(
        <>
        <button onClick={()=> props.ChangeText(" Johnny")}>Click to change the name</button>
        </>
    )
}