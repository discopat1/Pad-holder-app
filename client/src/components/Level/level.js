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
                value="beginner"
                checked={this.state.level === "beginner"}
                onChange={this.handleInputChange}
                />
                <label>Beginner</label>
                <br />

                <input
                name="level"
                type="radio"
                value="intermediate"
                checked={this.state.level === "intermediate"}
                onChange={this.handleInputChange}
                />
                <label>Intermediate</label>
                <br />

                <input
                name="level"
                type="radio"
                value="advanced"
                checked={this.state.level === "advanced"}
                onChange={this.handleInputChange}
                />
                <label>Advanced</label>
            </form>
        )
    };
};

export default Level;