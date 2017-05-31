import React from 'react';
//import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { output: "" };
    }

    render() {
        
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <TodoApp />
            </div>
            
        );
    }
}

export default App;
