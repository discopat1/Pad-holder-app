import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./stats.css";


class Stats extends Component {
    state = {
        strikes: sessionStorage.getItem('strikes'),
        rounds: sessionStorage.getItem('rounds')
    }
    render() {
        return (
            <div class="bg-dark">
                <div class="jumbotron jumbotron-fluid" style={ { backgroundImage: "url('images/chinese.jpg')", backgroundSize: 'contain' } }>
                </div>
                <div className="container heading">
                    <h1 class="display-4">Stats!</h1>
                    <p class="lead text-danger">Total Results:</p>
                </div>
                <div className="">
                    <div className="">
                        <div className="card card1 container center">
                            <div className="card-body">
                                <h5 class="card-title">Total Rounds:</h5>
                                <br/>
                                <p class="card-text">{this.state.rounds}</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card card1 container center">
                            <div className="card-body">
                                <h5 class="card-title">Total Strikes:</h5>
                                <br/>
                                <p class="card-text">{this.state.strikes}</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="container center">
                        <div class="">
                        <div className="text-light">
                            <Link to="/"><button className="bg-primary text-light rounded">Home</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}





export default Stats;