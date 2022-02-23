import './Counter.css'
import React, { Component } from "react";

export default class Counter extends Component {

    state = {
        step: this.props.step || 1,
        va: this.props.value || 0,
    }

    /*Or:
    constructor(props) {
        super(props)
        this.state = {
            step: props.step,
            va: 0
        }
    }*/

    inc = () => {
        this.setState({
            va: this.state.va + this.state.step
        })
    }

    dec = () => {
        this.setState({
            va: this.state.va - this.state.step
        })

    }

    render() {
        return (
            <div className='Counter'>
                <h2>Counter</h2>
                <div>
                    <label for="stepInput">Step: </label>
                    <input id="stepInput" type="number" value={this.state.step}
                        onChange={e => this.setState({ step: +e.target.value })} />
                </div>

                <h4>Value:</h4>

                <div>
                    <button className="marginBtn btn" onClick={this.inc}>+</button>
                    {this.state.va}
                    <button className="marginBtn btn less" onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}