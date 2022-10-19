import React from "react";

export default class LifeCycle extends React.Component{
    constructor(props)
    {
        super(props);
        //state in class component
        this.state={course:"React"};
    }
    componentDidMount()
    {
        console.log("ComponentDidMountmethod");
    }
    changeState()
    {
        this.setState({course:"React 18"});
    }
    componentDidUpdate()
    {
        console.log("ComponentDidUpdatemethod");
    }
    render()
    {
        return(
            <>
            <h3 style={{textAlign:"center"}}>Course Name:{this.state.course} - <a onClick={this.changeState.bind(this)}>Click me to Change the State</a></h3>
            
            </>
        )
    }
}