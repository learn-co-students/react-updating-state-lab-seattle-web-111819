// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    // Initial state property called timesClicked, which is initially defined as 0.
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    // Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
    handleClick = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked +1
        }))
    }

    render() {
        return (
            // Renders out a button with a label that shows the timesClicked value. 
            // This means that, at the start, your button should just say 0.
            <button onClick={this.handleClick}>
            {this.state.timesClicked}
            </button>
        )
    }
}