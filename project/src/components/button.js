import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Hi"
        }   
    }

    onClick() {
        this.setState({ title: this.state.title === "Hi" ? "Bye" : "Hi" })
    }
    
    render() {
        return (
            <button onClick={() => { this.onClick() }}>{this.state.title}</button>

        )
    }
}