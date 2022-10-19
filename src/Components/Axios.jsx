import React, { Component } from "react";
//npm install axios
import axios from "axios";
import { render } from "@testing-library/react";

export default class Footer extends Component {
    state = { details: [] }
    //componentDidMount() - Mounting Phase -> trainees[] -> filled with https://fakestoreapi.com/users
    componentDidMount() {
        axios.get('https://fakestoreapi.com/products').then(
            res => {
                const details = res.data;
                this.setState({ details });
            }
        )
    }

render()
{
    return(
        <div className="row">
            {this.state.details.filter(details=>details.id<19).map(det =>
                <div className="col" key={det.id}>
                    <div className="card">
                        <div className="card-body">
                            <img src={det.image} style={{ height: 50, width: 50 }}></img>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
}
