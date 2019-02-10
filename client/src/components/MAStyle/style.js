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
                value="Boxing"
                checked={this.state.style === "Boxing"}
                onChange={this.handleInputChange}
                />
                <label>Boxing</label>
                <br />

                <input
                name="style"
                type="radio"
                value="Kickboxing"
                checked={this.state.style === "Kickboxing"}
                onChange={this.handleInputChange}
                />
                <label>Kickboxing <span className="small">(Sans Knees and Elbows)</span></label>
                <br />

                <input
                name="style"
                type="radio"
                value="Muay Thai"
                checked={this.state.style === "Muay Thai"}
                onChange={this.handleInputChange}
                />
                <label>Muay Thai <span className="small">(Knees and Elbows)</span></label>
                <br />

                <input
                name="style"
                type="radio"
                value="MMA"
                checked={this.state.style === "MMA"}
                onChange={this.handleInputChange}
                />
                <label>MMA</label>
            </form>
        )
    };
};

export default Style;