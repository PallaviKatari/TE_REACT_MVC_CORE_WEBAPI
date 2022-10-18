import React, { Component } from "react";

//Toggle
export default class Trainees extends Component{
    constructor(){
        super();
        this.state={show:false};
        this.toggle=this.toggle.bind(this);
    }
    toggle()
    {
        this.setState({show:!this.state.show});
        console.log(this.state);
    }
    //Conditional Rendering(Ternary operator)
    render(){
        return(
            <>
            <h3>No of Trainees in Dotnet Full Stack</h3>
            {
                this.state.show?
                (
                    <>
                    <button onClick={this.toggle}>-</button>
                    <br>
                    </br>
                    <h2>38 Participants</h2>
                    </>
                ):
                (
                    <>
                    <button onClick={this.toggle}>+</button>
                    <br>
                    </br>
                    </>
                )
            }
            </>
        )
    }
}