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
        fetch('https://fakestoreapi.com/users').then
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
            <h3>Name:{t.name.firstname} {t.name.lastname}</h3>
            <h2>City:{t.address.city}</h2>
            <hr></hr>
            </div>
            )}
            </div>
        )
    }

}