import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./menu.css"


class Menu extends Component {

    state = {
        level: "",
        style: "",
    }

    handleButtonSubmit = () => {

    }

    
    render() {
        return (
    <div class="bg-dark">
        <div class="jumbotron jumbotron-fluid" style={ { backgroundImage: "url('images/chinese.jpg')", backgroundSize: 'contain' } }>
        </div>
        <div class="container heading">
                <h1 class="display-4">Pad Holder!</h1>
                <p class="lead text-danger">Increase your reaction time as classic fight combinations are called out to you!</p>
            </div>
        <div className="row justify-content-around">
            <div className="col-4">
                <button type="button" class="text-danger rounded">Beginner</button>
            </div>
            <div className="right col-4">
                <button type="button" class="text-danger rounded">Boxing</button>
            </div>
        </div>
        <br/>
        <div className="row justify-content-around">
            <div className="col-4">
                <button type="button" class="text-danger rounded">Intermediate</button>
            </div>
            <div className="right col-4">
                <button type="button" class="text-danger rounded">Kickboxing</button>
            </div>
        </div>
        <br/>
        <div className="row justify-content-around">
            <div className="col-4">
                <button type="button" class="text-danger rounded">Advanced</button>
                <br/>
                <br/>
            </div>
            <div className="right col-4">
                <button type="button" class="text-danger rounded">MMA</button>
            </div>
        </div>
        <div className="container center">
                <Link to="/Work"><button type="button" className="bg-success text-light rounded">Work</button></Link>
        </div>
    </div>
        );
    };
};
    

export default Menu;