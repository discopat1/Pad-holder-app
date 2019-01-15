import React, { Component } from "react";
import "./level.css"



class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {
          level: ""
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }

    handleInputChange(event) {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
        this.props.onLevelChange(event.target.value);
      }

    render() {
        console.log('state=====', this.state)
        return (
            <form>
                <h3>Level</h3>
                <input
                name="level"
                type="radio"
                value="Beginner"
                checked={this.state.level === "Beginner"}
                onChange={this.handleInputChange}
                />
                <label>Beginner</label>
                <br />

                <input
                name="level"
                type="radio"
                value="Intermediate"
                checked={this.state.level === "Intermediate"}
                onChange={this.handleInputChange}
                />
                <label>Intermediate</label>
                <br />

                <input
                name="level"
                type="radio"
                value="Advanced"
                checked={this.state.level === "Advanced"}
                onChange={this.handleInputChange}
                />
                <label>Advanced</label>
            </form>
        )
    };
};

export default Level;