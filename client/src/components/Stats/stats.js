import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./stats.css";


class Stats extends Component {
    state = {

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
                                <p class="card-text">5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card card2">
                            <div className="card-body">
                                <h5 class="card-title">Total Strikes:</h5>
                                <br/>
                                <p class="card-text">568</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="container">
                        <div class="row">
                            <div className="time col-sm-4 text-light">
                                <h2>Total Time:</h2>
                            </div>
                        </div>
                        <div class="row">
                        <div className="time col-sm-4 text-light">
                            <h3>36:23</h3>
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