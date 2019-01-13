import React, { Component } from "react";
import "./style.css"



class Style extends Component {
    constructor(props) {
        super(props);
        this.state = {
          style: ""
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }

    handleInputChange(event) {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
        this.props.onStyleChange(event.target.value);
      }

    render() {
        console.log('state=====', this.state)
        return (
            <form>
                <h3>Style</h3>
                <input
                name="style"
                type="radio"
                value="boxing"
                checked={this.state.style === "boxing"}
                onChange={this.handleInputChange}
                />
                <label>Boxing</label>
                <br />

                <input
                name="style"
                type="radio"
                value="kickboxing"
                checked={this.state.style === "kickboxing"}
                onChange={this.handleInputChange}
                />
                <label>Kickboxing</label>
                <br />

                <input
                name="style"
                type="radio"
                value="muaythai"
                checked={this.state.style === "muaythai"}
                onChange={this.handleInputChange}
                />
                <label>Muay Thai</label>
            </form>
        )
    };
};

export default Style;