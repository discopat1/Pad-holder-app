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
                <div class="container heading">
                    <h1 class="display-4">Stats!</h1>
                    <p class="lead text-danger">Total Results:</p>
                </div>
                <div class="row">
                    <div className="col-6">
                        <div className="card card1">
                            <div className="card-body">
                                <h5 class="card-title">Total Rounds:</h5>
                                <br/>
                                <p class="card-text">{this.state.rounds}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card card2">
                            <div className="card-body">
                                <h5 class="card-title">Total Strikes:</h5>
                                <br/>
                                <p class="card-text">{this.state.strikes}</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="container">
                        <div class="row">
                        <div className="time col-sm-4 text-light">
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