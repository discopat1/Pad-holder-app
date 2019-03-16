import React, { Component } from "react";
import "./menu.css";
import Style from "../MAStyle";
import Level from "../Level";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: "",
            style: "",
            rounds: "",
            roundTime: "",
            breakTime: ""
        }
        this.handleStyleChange=this.handleStyleChange.bind(this);
        this.handleLevelChange=this.handleLevelChange.bind(this);
        this.handleRoundChange=this.handleRoundChange.bind(this);
        this.handleTimeChange=this.handleTimeChange.bind(this);
        this.handleBreakChange=this.handleBreakChange.bind(this);
    }
    
    handleStyleChange(styleValue) {
        this.setState({
          style: styleValue
        });
    }

    handleLevelChange(levelValue) {
        this.setState({
          level: levelValue
        });
    }

    handleRoundChange(event) {
        let value = event.target.value;
        this.setState({
          rounds: value
        });
    }

    handleTimeChange(event) {
        let value = event.target.value;
        this.setState({
          roundTime: value
        });
    }

    handleBreakChange(event) {
        let value = event.target.value;
        this.setState({
          breakTime: value
        });
    }

    handleSubmit = () => {
        (this.state.level === "" || this.state.style === "" || this.state.roundTime === "" || this.state.rounds === "" || this.state.breakTime === "") ? alert('Choose all options')
          : localStorage.setItem("level", this.state.level);
            sessionStorage.setItem("style", this.state.style);
            sessionStorage.setItem("rounds", this.state.rounds);
            sessionStorage.setItem("roundTime", this.state.roundTime);
            sessionStorage.setItem("breakTime", this.state.breakTime);
            alert(`${this.state.style} - ${this.state.level} selected!`);
            window.location.href="/Work";
    }
    
    render() {
        console.log('state=====', this.state)
        return (
    <div class="bg-dark">
        <div class="jumbotron jumbotron-fluid" style={ { backgroundImage: "url('images/chinese.jpg')", backgroundSize: 'contain' } }>
        </div>
        <div className="container heading">
                <h1 class="display-4">Pad Holder!</h1>
                <p class="lead text-danger">Improve your reaction time as classic fight combinations are called out to you!</p>
        </div>
            <div className="text-light">
                <Style onStyleChange={this.handleStyleChange} />
            </div>
            <div className="text-light">
                <Level onLevelChange={this.handleLevelChange} />
            </div>
            <form>
            <div class="form-group text-danger">
                <label for="exampleFormControlSelect1">Rounds</label>
                <select className="form-control-lg dropdowns" id="exampleFormControlSelect1" onChange={this.handleRoundChange}>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                </select>
            </div>
            <div class="form-group text-danger">
                <label for="exampleFormControlSelect2 ">Round Time (Minutes)</label>
                <select className="form-control-lg dropdowns" id="exampleFormControlSelect2" onChange={this.handleTimeChange}>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div class="form-group text-danger">
                <label for="exampleFormControlSelect3">Break Time (Seconds)</label>
                <select className="form-control-lg dropdowns" id="exampleFormControlSelect3" onChange={this.handleBreakChange}>
                <option></option>
                <option>30</option>
                <option>60</option>
                </select>
            </div>
            </form>
        <div className="container center">
                <button className="bg-success text-light rounded" onClick={this.handleSubmit}>Work</button>
        </div>
    </div>
        );
    };
};
    

export default Menu;