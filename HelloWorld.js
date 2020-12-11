import React, { Component } from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = {who: 'world'}
    }

    handleButtonClick = (wh) => {
        this.setState({who: wh})
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}.</p>
                <button onClick = {() => {this.handleButtonClick('World')}}>World</button>
                <button onClick = {() => {this.handleButtonClick('Friend')}}>Friend</button>
                <button onClick = {() => {this.handleButtonClick('React')}}>React</button>
            </div>
        )
    }
}

export default HelloWorld