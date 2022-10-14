import React from "react";
import FuncComp from '../Components/Functional';
//class component

class ClassComponent extends React.Component{
    render(){
        return(
            <h3><FuncComp></FuncComp>I AM the FIRST CLASS COMPONENT AND <ClassComponent1></ClassComponent1></h3>
        )
    }
}

class ClassComponent1 extends React.Component{
    render(){
        return(
            <h3>I AM THE SECOND CLASS COMPONENT AND <FunctionalComponent></FunctionalComponent></h3>
        )
    }
}

function FunctionalComponent()
{
 return(
    <h4>I AM A FUNCTIONAL COMPONENT</h4>
 )
}

export default ClassComponent;