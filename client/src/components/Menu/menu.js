import React, { Component } from "react";
import "./menu.css"


class Menu extends Component {

    state = {
        level: "",
        style: "",
    }

    
    render() {
        return (
    <div class="bg-dark">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                            <img src={"./images/senchai-pads.jpg"} className="rounded float-right image" alt="..."/>

                <h1 class="display-4">Virtual Pad Holder!</h1>
                <p class="lead text-danger">Increase your reaction time as classic fight combinations are called out to you!</p>
            </div>
        </div>
        <br/>
        <div className="row justify-content-around">
            <div className="col-4">
                <button class="text-danger">Beginner</button>
            </div>
            <div className="col-4">
                <button class="text-danger">Boxing</button>
            </div>
        </div>
        <br/>
        <div className="row justify-content-around">
            <div className="col-4">
                <button class="text-danger">Intermediate</button>
            </div>
            <div className="col-4">
                <button class="text-danger">Kickboxing</button>
            </div>
        </div>
        <br/>
        <div className="row justify-content-around">
            <div className="col-4">
                <button class="text-danger">Advanced</button>
                <br/>
                <br/>
                <button type="button" class="bg-success text-light">Start</button>
            </div>
            <div className="col-4">
                <button class="text-danger">MMA</button>
            </div>
        </div>
    </div>
        );
    };
};
    

export default Menu;