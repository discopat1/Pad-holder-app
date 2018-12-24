import React, { Component } from "react";
import "./menu.css"


class Menu extends Component {

    state = {
        level: "",
        style: "",
    }

    handleBeginnerClick = () => {
        this.setState({
            level: 'beginner'
        })
    }

    handleBoxingClick = () => {
        this.setState({
            style: 'boxing'
        })
    }

    handleIntermediateClick = () => {
        this.setState({
            level: 'intermediate'
        })
    }

    handleKickBoxingClick = () => {
        this.setState({
            style: 'kickboxing'
        })
    }

    handleAdvancedClick = () => {
        this.setState({
            level: 'advanced'
        })
    }

    handleMMAClick = () => {
        this.setState({
            style: 'mma'
        })
    }

    handleSubmit = () => {
        console.log('button clicked state=====', this.state)
        if(this.state.level === "" || this.state.style === "") {
            alert('Choose your level and style')
        } else {
            localStorage.setItem("level", this.state.level);
            sessionStorage.setItem("style", this.state.style);
            alert('Level and style selected!');
            window.location.href="/Work";
        }
        
    }
    
    render() {
        console.log('state=====', this.state)
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
                <button type="button" class="text-danger rounded" onClick={this.handleBeginnerClick}>Beginner</button>
            </div>
            <div className="right col-4">
                <button type="button" class="text-danger rounded" onClick={this.handleBoxingClick}>Boxing</button>
            </div>
        </div>
        <br/>
        <div className="row justify-content-around">
            <div className="col-4">
                <button type="button" class="text-danger rounded" onClick={this.handleIntermediateClick}>Intermediate</button>
            </div>
            <div className="right col-4">
                <button type="button" class="text-danger rounded" onClick={this.handleKickBoxingClick}>Kickboxing</button>
            </div>
        </div>
        <br/>
        <div className="row justify-content-around">
            <div className="col-4">
                <button type="button" class="text-danger rounded" onClick={this.handleAdvancedClick}>Advanced</button>
                <br/>
                <br/>
            </div>
            <div className="right col-4">
                <button type="button" class="text-danger rounded" onClick={this.handleMMAClick}>MMA</button>
            </div>
        </div>
        <div className="container center">
                <button className="bg-success text-light rounded" onClick={this.handleSubmit}>Work</button>
        </div>
    </div>
        );
    };
};
    

export default Menu;