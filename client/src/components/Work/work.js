import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./work.css";
import API from "../utils/API";
import Bell from "../Sounds/bell.m4a"
import Clapper from "../Sounds/clapper.m4a"


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
     strikes: -1,
     clockRunning: true
   }
   // method that triggers the countdown functionality
   this.startCountDown = this.startCountDown.bind(this);
   this.breakTick = this.breakTick.bind(this);
   this.roundTick = this.roundTick.bind(this);
   this.round = this.round.bind(this);
   this.break = this.break.bind(this);
   this.display = this.display.bind(this);
   this.getCombo = this.getCombo.bind(this);
   this.pause = this.pause.bind(this);
   this.bell = new Audio(Bell);
   this.clapper = new Audio(Clapper);
   }

    // Bell
    bellRing() {
        this.bell.play();
    }
    // Clapper
    clapSound() {
        this.clapper.play();
    }

    // Starts timer
    startCountDown() {
        this.round();
        this.roundNumber = 1;
        this.setState({
            clockRunning: true
        });
        if (this.state.roundMinutes === '3') {
        this.bellRing();
        }
    }
    // Starts Round
    round() {
            this.intervalHandle = setInterval(this.roundTick, 1000);
            let time = this.state.roundMinutes;
            if (this.state.roundMinutes === '3') {
                this.secondNumber = time * 60;
            }
            this.callCombos();
    }

    pause() {
        clearInterval(this.intervalHandle);
        clearInterval(this.comboHandle);
        if (this.state.clockRunning) {
            this.setState({ clockRunning: false })
        } else {
            this.setState({ clockRunning: true })
        }
    }

    // Combo random timer
    callCombos() {
        const arr = this.string_to_array(this.state.combo);
        const length = arr.length;
        const comboInt = ((length * 0.88) * 1000);
        const randInt = Math.round(Math.random() * (3000 - 1000)) + 1000;
        const totalInt = randInt + comboInt;
        this.comboHandle = setTimeout(this.getCombo, totalInt);
        this.speak();
    };

    // API call to get combos
    getCombo() {
        if (this.state.work) {
            API.findAll()
        .then(res => 
            this.setState({ 
                combo: res.data.combo,
            }))
        .catch(err => console.log(err));
        this.callCombos();
        this.totalStrikes();
        } else {
            this.setState({ combo: 'Break' })
        }
        
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
        if (min === 0 & sec === 10) {
            this.clapSound();
        }
        if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
            this.toggle();
            this.setState({
                roundMinutes: '3'
            })
        }
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
        if (min === 0 & sec === 10) {
            this.clapSound();
        }
        if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
            this.roundNumber++;
            this.round();
            this.bellRing();
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
            this.bellRing();
            this.break();
        }
    }

    // End session
    endSession() {
        console.log("end session");
        clearInterval(this.intervalHandle);
        window.location.href="/Stats";
    }
    

    // Add strikes based on combos called
    totalStrikes() {
       const arr = this.string_to_array(this.state.combo);
       const length = arr.length;
            this.setState({ strikes: this.state.strikes + length });
    }
    
    // string to array
    string_to_array = function (str) {
        return str.trim().split(", ");
   };

    // Solution to get around intitial 1-index array
    displayPositiveStrikes() {
        if (this.state.strikes > 0) {
            return this.state.strikes;
        }
    }

    // speech function?
    speak() {
        const msg = new SpeechSynthesisUtterance();
        msg.text = this.state.combo;
        var voices = speechSynthesis.getVoices()
        msg.voice = voices[7]
        speechSynthesis.cancel();
        speechSynthesis.speak(msg);
    }
    render() {
        console.log('voices===', window.speechSynthesis.getVoices())
        return (
            <div class="bg-dark">
        <div class="jumbotron jumbotron-fluid" style={ { backgroundImage: "url('images/chinese.jpg')", backgroundSize: 'contain' } }>
        </div>
        <div className="container heading">
            <h1 class="display-4">Work!</h1>
            <p class="lead text-danger">Throw your combos as they're called out!</p>
        </div>
        <div class="container">
            <div class="row">
                <div className="round col-sm-4 text-light">
                    <button className="bg-success text-light rounded" onClick={this.startCountDown}>Start</button>
                </div>
            </div>
        </div>
        <div class="container"> 
            <div class="row">
                <div className="round col-sm-4 text-light">
                    <button className="bg-danger text-light rounded" onClick={this.pause}>Pause</button>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div className="col-6">
                <div className="card card1">
                    <div className="card-body">
                        <h5 class="card-title">Current Combo</h5>
                        <p class="card-text">{this.state.combo}</p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card card2">
                    <div className="card-body">
                        <h5 class="card-title">Total Strikes:</h5>
                        <br/>
                        <p class="card-text">{this.displayPositiveStrikes()}</p>
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