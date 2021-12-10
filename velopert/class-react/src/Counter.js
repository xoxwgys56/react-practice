import React, {Component} from "react";

class Counter extends Component {
    state = {
        counter: 0
    };

    constructor(props) {
        super(props);
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    onIncrease = () => {
        console.log('increase');
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            console.log('first request')
        })
        this.setState(state => ({
            counter: this.state.counter + 1
        }), () => {
            console.log(`current counter is ${this.state.counter}`)
        });
    }
    onDecrease() {
        console.log('decrease')
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.onIncrease}>increase</button>
                <button onClick={this.onDecrease}>decrease</button>
            </div>
        )
    }
}

export default Counter