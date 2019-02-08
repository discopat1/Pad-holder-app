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
     roundMinutes: sessionStorage.getItem('roundTime'),
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
   this.endSession = this.endSession.bind(this);
   this.goHome = this.goHome.bind(this);
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
        if (this.state.roundMinutes === sessionStorage.getItem('roundTime')) {
        this.bellRing();
        }
    }
    // Starts Round
    round() {
            this.intervalHandle = setInterval(this.roundTick, 1000);
            let time = this.state.roundMinutes;
            if (this.state.roundMinutes === sessionStorage.getItem('roundTime')) {
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
        let comboInt;
        const level = localStorage.getItem("level");
        if(level === 'Beginner') {
            comboInt = ((length * 1.3) * 1000);
        } else if(level === 'Intermediate') {
            comboInt = ((length * 0.88) * 1000);
        } else if(level === 'Advanced') {
            comboInt = ((length * 0.5) * 1000);
        };
        const randInt = Math.round(Math.random() * (3000 - 1000)) + 1000;
        const totalInt = randInt + comboInt;
        this.comboHandle = setTimeout(this.getCombo, totalInt);
        this.speak();
    };

    // API call to get combos
    getCombo() {
        const style = sessionStorage.getItem('style');
        console.log("style---_-_-_", style);
        if (this.state.work && style === 'Kickboxing') {
            API.findKickboxing()
        .then(res => 
            this.setState({ 
                combo: res.data.combo,
            }))
        .catch(err => console.log(err));
        this.callCombos();
        this.totalStrikes();
        } else if (this.state.work && style === 'Boxing') {
            API.findBoxing()
        .then(res => 
            this.setState({ 
                combo: res.data.combo,
            }))
        .catch(err => console.log(err));
        this.callCombos();
        this.totalStrikes();
        } else if (this.state.work && style === 'Muay Thai') {
            API.findMuaythai()
        .then(res => 
            this.setState({ 
                combo: res.data.combo,
            }))
        .catch(err => console.log(err));
        this.callCombos();
        this.totalStrikes();
        }
        else {
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
            this.bellRing();
            this.toggle();
            this.setState({
                roundMinutes: sessionStorage.getItem('roundTime')
            })
        }
            this.secondNumber--;
    }

    // Break functions
    break() {
            this.intervalHandle = setInterval(this.breakTick, 1000);
            if(sessionStorage.getItem('breakTime') === '60') {
                let time = this.state.breakMinutes;
                this.secondNumber = time * 60;
            } else {
                this.secondNumber = 30;
            }
            
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
           return `Round ${this.state.round} of ${sessionStorage.getItem('rounds')}`;
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
        if (this.state.round === sessionStorage.getItem('rounds')) {
            this.endSession();
        }
        else {
            this.break();
        }
    }

    // End session
    endSession() {
        clearInterval(this.intervalHandle);
        clearInterval(this.comboHandle);
        alert(`Finished ${this.state.round} Rounds!`);
        sessionStorage.setItem("strikes", this.state.strikes);
        sessionStorage.setItem('rounds', this.state.round);
        window.location.href="/Stats";
    }

    // Reset with home button
    goHome() {
        clearInterval(this.intervalHandle);
        clearInterval(this.comboHandle);
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
        var voices = speechSynthesis.getVoices();
        msg.rate = 1.25;
        msg.voice = voices[7];
        speechSynthesis.cancel();
        speechSynthesis.speak(msg);
    }
    render() {
        // console.log("storage level====", localStorage.getItem('level'));
        // console.log("storagestyle", sessionStorage.getItem('style'));
        // console.log('voices===', window.speechSynthesis.getVoices());
        // console.log('round time===', this.state.roundMinutes);
        console.log('state round=-=-=-=', this.state.round);
        console.log('sessuin rounds====', sessionStorage.getItem('rounds'));
        return (
        <div class="bg-dark">
            <div class="jumbotron jumbotron-fluid" style={ { backgroundImage: "url('images/chinese.jpg')", backgroundSize: 'contain' } }>
            </div>
            <div class="container">
                <div class="row">
                    <div className="container text-light center">
                        <Link to="/"><button className="bg-primary text-light rounded center" id="homebtn" onClick={this.goHome}>Home</button></Link>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="container heading">
                <h1 class="display-4">{sessionStorage.getItem('style')}</h1>
                <h1 class="display-4">{localStorage.getItem('level')}</h1>
                <p class="lead text-danger">Throw your combos as they're called out!</p>
            </div>
            <div class="container">
                <div class="row">
                    <div className="container text-light center">
                        <button className="bg-success text-light rounded" id="startbtn" onClick={this.startCountDown}>Start</button>
                        <button className="bg-danger text-light rounded" id="pausebtn" onClick={this.pause}>Pause</button>
                    </div>
                </div>
            </div>
                <div className="container center">
                    <div className="card card4 container center">
                        <div className="card-body">
                            <h5 class="card-title">Total Strikes:</h5>
                            <br/>
                            <p class="card-text">{this.displayPositiveStrikes()}</p>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container center">
                    <div class="">
                        <div className="round text-light">
                            <h3>{this.display()}</h3>
                        </div>
                    </div>
                        <div className="round text-light">
                            <h1>{this.clockMinutes()}:{this.state.seconds}</h1>
                            <button className="bg-danger text-light rounded" onClick={this.endSession}>Finish</button>
                        </div>
                </div>
                <div className="col-6">
                    <div className="card3 bg-dark text-dark">
                        <div className="card-body">
                            <h5 class="card-title">Current Combo</h5>
                            <p class="card-text">{this.state.combo}</p>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}





export default Work;