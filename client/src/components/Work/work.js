import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./work.css";
import API from "../utils/API";


class Work extends Component {
    constructor() {
        super();
   this.state = {
     seconds: '00', 
     roundMinutes: '3',
     breakMinutes: '1',
     round: '1',
     work: true,
     combo: '',
     strikes: 0
   }
   // method that triggers the countdown functionality
   this.startCountDown = this.startCountDown.bind(this);
   this.breakTick = this.breakTick.bind(this);
   this.roundTick = this.roundTick.bind(this);
   this.round = this.round.bind(this);
   this.break = this.break.bind(this);
   this.display = this.display.bind(this);
   this.getCombo = this.getCombo.bind(this);
   }

    // Starts timer
    startCountDown() {
        this.round();
        this.roundNumber = 1;
    }
    // Starts Round
    round() {
        this.intervalHandle = setInterval(this.roundTick, 1000);
        let time = this.state.roundMinutes;
        this.secondNumber = time * 60;
        this.callCombos();
    }
    
    // Makes minutes and seconds go down
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
            this.toggle();
            this.setState({
                roundMinutes: '3'
            })
        }
        console.log("round minutes==", this.state.roundMinutes);
        console.log("break minutes===", this.state.breakMinutes);
            this.secondNumber--;
    }

    // Break functions
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
    // Displays Round or Break
    display() {
       if (this.state.work === true) {
           return `Round ${this.state.round} of 5`;
       } else {
            return 'Break';
       }
    }
    // Decides Round or break for minutes
    clockMinutes() {
        if (this.state.work === true) {
            return this.state.roundMinutes;
        } else {
            return this.state.breakMinutes;
        }
    }
    // End session after last round or go to break in between rounds
    toggle() {
        if (this.roundNumber === 5) {
            this.endSession()
        }
        else {
            this.break();
        }
    }

    // End session
    endSession() {
        console.log("end session");
        clearInterval(this.intervalHandle);
    }

    // API call to get combos
    getCombo() {
        API.findAll()
        .then(res => 
            this.setState({ 
                combo: res.data.combo,
            }))
        .catch(err => console.log(err));
        this.callCombos();
        this.totalStrikes();
    }

    // Combo random timer
    callCombos() {
        var rand = Math.round(Math.random() * (6000 - 2500)) + 2500;
        setTimeout(this.getCombo, rand);
    };

    // Add strikes based on combos called
    totalStrikes() {
       const arr = this.string_to_array(this.state.combo);
       console.log('arr===', arr);
       const length = arr.length;
       this.setState({ strikes: this.state.strikes + length });
    }

    string_to_array = function (str) {
        return str.trim().split(", ");
   };

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
                        <p class="card-text">{this.state.combo}</p>
                        {/* <p class="card-text">Cross</p>
                        <p class="card-text">Hook</p> */}
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