import React, { Component } from 'react';
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';

class CalculatorApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { output: "" };
    }

    render() {
        let IntegerA, IntegerB, IntegerC;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="container">
                    <h2>using React</h2>
                    <div>Input 1:
                    <input type="text" placeholder="Input 1" ref="input1"></input>
                    </div>
                    <div>Input 2 :
                    <input type="text" placeholder="Input 2" ref="input2"></input>
                    </div>
                    <div>
                        <button id="add" onClick={() => {
                            IntegerA = parseInt(ReactDOM.findDOMNode(this.refs.input1).value)
                            IntegerB = parseInt(ReactDOM.findDOMNode(this.refs.input2).value)
                            IntegerC = IntegerA + IntegerB
                            this.setState({ output: IntegerC })
                        }
                        }>Add</button>
                        <button id="subtract" onClick={() => {
                            IntegerA = parseInt(ReactDOM.findDOMNode(this.refs.input1).value)
                            IntegerB = parseInt(ReactDOM.findDOMNode(this.refs.input2).value)
                            IntegerC = IntegerA - IntegerB
                            this.setState({ output: IntegerC })
                        }
                        }>Subtract</button>
                    </div>
                    <div>
                        <h2>Output: {this.state.output}</h2>
                    </div>
                </div>
            </div>

        );
    }
}
export default CalculatorApp;
