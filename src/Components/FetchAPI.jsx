import React,{Component} from "react";

export default class TraineeDetails extends Component
{
    constructor(props)
    {
        super(props)
        this.state={trainees:[]}    //initial phase -> trainees[] -> empty
    }

    //componentDidMount() - Mounting Phase -> trainees[] -> filled with https://fakestoreapi.com/users
    componentDidMount()
    {
        fetch('https://localhost:7197/api/UserDetails').then
        (
            response=>response.json()
        ).then(trainees=>this.setState({trainees:trainees}))

    }
    render()
    {
        return(
            <div>
            {this.state.trainees.map(t=>
            <div key={t.id}>
            <h3>Name:{t.name}</h3>
            <h2>Role:{t.role}</h2>
            <hr></hr>
            </div>
            )}
            </div>
        )
    }

}