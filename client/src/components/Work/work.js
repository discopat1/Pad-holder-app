import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./work.css";


class Work extends Component {
    constructor() {
        super();
   this.state = {
     seconds: '00', 
     roundMinutes: '3',
     breakMinutes: '1',
     round: '1',
     work: true,
   }
   // method that triggers the countdown functionality
   this.startCountDown = this.startCountDown.bind(this);
   this.breakTick = this.breakTick.bind(this);
   this.roundTick = this.roundTick.bind(this);
   this.round = this.round.bind(this);
   this.break = this.break.bind(this);
   this.display = this.display.bind(this);
   }
    startCountDown() {
        this.round();
        this.roundNumber = 1;
    }
    round() {
        this.intervalHandle = setInterval(this.roundTick, 1000);
        let time = this.state.roundMinutes;
        this.secondNumber = time * 60;
    }
    roundTick() {
        var min = Math.floor(this.secondNumber / 60);
        var sec = this.secondNumber - (min * 60);
        var round = this.roundNumber;
        this.setState({
            roundMinutes: min,
            seconds: sec,
            round: round,
            work: true
        })
        if (sec < 10) {
            this.setState({
            seconds: "0" + this.state.seconds,
            })
        }
        if (min < 10) {
        this.setState({
            value: "0" + min,
            })
        }
        if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
            this.break();
            this.setState({
                roundMinutes: '3'
            })
        }
        console.log("round minutes==", this.state.roundMinutes);
        console.log("break minutes===", this.state.breakMinutes);
            this.secondNumber--
    }
    break() {
        this.intervalHandle = setInterval(this.breakTick, 1000);
        let time = this.state.breakMinutes;
        this.secondNumber = time * 60;
    }
    breakTick() {
        var min = Math.floor(this.secondNumber / 60);
        var sec = this.secondNumber - (min * 60);
        var round = this.roundNumber;
        this.setState({
            breakMinutes: min,
            seconds: sec,
            round: round,
            work: false,
        })
        if (sec < 10) {
            this.setState({
            seconds: "0" + this.state.seconds,
            })
        }
        if (min < 10) {
        this.setState({
            value: "0" + min,
            })
        }
        if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
            this.roundNumber++;
            this.round();
            this.setState({
                breakMinutes: '1'
            })
        }
            this.secondNumber--
    }
   
    display() {
       if (this.state.work === true) {
           return `Round ${this.state.round} of 5`;
       } else {
            return 'Break';
       }
    }
    clockMinutes() {
        if (this.state.work === true) {
            return this.state.roundMinutes;
        } else {
            return this.state.breakMinutes;
        }
    }

    render() {
        console.log("round minutes==", this.state.roundMinutes);
        console.log("break minutes===", this.state.breakMinutes);
        return (
            <div class="bg-dark">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Work!</h1>
                <p class="lead text-danger">Throw your combos as they're called out!</p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div className="round col-sm-4 text-light">
                    <button className="bg-success text-light rounded" onClick={this.startCountDown}>Start</button>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div className="col-6">
                <div className="card card1">
                    <div className="card-body">
                        <h5 class="card-title">Current Combo</h5>
                        <p class="card-text">Jab</p>
                        <p class="card-text">Cross</p>
                        <p class="card-text">Hook</p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card card2">
                    <div className="card-body">
                        <h5 class="card-title">Total Strikes:</h5>
                        <br/>
                        <p class="card-text">23</p>
                    </div>
                </div>
            </div>
            <br/>
            <div class="container">
                <div class="row">
                    <div className="round col-sm-4 text-light">
                        <h3>{this.display()}</h3>
                    </div>
                </div>
                <div class="row">
                <div className="round col-sm-4 text-light">
                    <h2>{this.clockMinutes()}:{this.state.seconds}</h2>
                    <Link to="/Stats"><button className="bg-danger text-light rounded">Finish</button></Link>
                </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}





export default Work;