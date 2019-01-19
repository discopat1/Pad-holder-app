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
        }
        this.handleStyleChange=this.handleStyleChange.bind(this);
        this.handleLevelChange=this.handleLevelChange.bind(this);
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

    handleSubmit = () => {
        console.log('button clicked state=====', this.state)
        if(this.state.level === "" || this.state.style === "") {
            alert('Choose your level and style')
        } else {
            localStorage.setItem("level", this.state.level);
            sessionStorage.setItem("style", this.state.style);
            alert(`${this.state.style} - ${this.state.level} selected!`);
            window.location.href="/Work";
        }
        
    }
    
    render() {
        console.log('state=====', this.state)
        return (
    <div class="bg-dark">
        <div class="jumbotron jumbotron-fluid" style={ { backgroundImage: "url('images/chinese.jpg')", backgroundSize: 'contain' } }>
        </div>
        <div className="container heading">
                <h1 class="display-4">Pad Holder!</h1>
                <p class="lead text-danger">Increase your reaction time as classic fight combinations are called out to you!</p>
        </div>
            <div className="text-light">
                <Style onStyleChange={this.handleStyleChange} />
            </div>
            <div className="text-light">
                <Level onLevelChange={this.handleLevelChange} />
            </div>
        <div className="container center">
                <button className="bg-success text-light rounded" onClick={this.handleSubmit}>Work</button>
        </div>
    </div>
        );
    };
};
    

export default Menu;