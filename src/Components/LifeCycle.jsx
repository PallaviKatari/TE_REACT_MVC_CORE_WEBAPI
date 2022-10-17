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
            <h3>Course Name:{this.state.course}</h3>
            <a onClick={this.changeState.bind(this)}>Change State</a>
            </>
        )
    }
}