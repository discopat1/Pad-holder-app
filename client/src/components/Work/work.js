import React, { Component } from "react";
import "./work.css";


class Work extends Component {
    state = {

    }
    render() {
        return (
            <div class="bg-dark">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Work!</h1>
                <p class="lead text-danger">Throw your combos as they're called out!</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div className="card card1">
                    <div className="card-body">
                        <h5 class="card-title">Current Combo</h5>
                        <p class="card-text">Jab</p>
                        <p class="card-text">Cross</p>
                        <p class="card-text">Hook</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div className="card card2">
                    <div className="card-body">
                        <h5 class="card-title">Total Strikes:</h5>
                        <br/>
                        <p class="card-text">23</p>
                    </div>
                </div>
            </div>
            <br/>
            <div class="row">
                <div className="round col-sm-6 offset-6 justify-content-center text-light">
                    <h2>Round 3 of 5</h2>
                    <h3>2:43</h3>
                </div>
            </div>
        </div>
    </div>
        )
    }
}





export default Work;