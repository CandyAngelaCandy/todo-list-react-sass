import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state ={
            allItem:[]
        }
    }

    addItem = () => {

        this.setState({
            allItem:this.state.allItem.concat(this.inputBorder.value),
        })
    }

  render() {
    return (
      <div className="App">
        <table border="1">
            {
                this.state.allItem.map(item => (<tr><td><input type="checkbox"/></td><td>{item}</td></tr>))
            }
        </table>
        <button onClick={this.addItem}>add</button>
        <input type="text" ref={
            (inputBorder) => {
                this.inputBorder = inputBorder;
            }
        } />
      </div>
    );
  }
}

export default App;
