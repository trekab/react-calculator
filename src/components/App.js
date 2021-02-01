import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = buttonName => {
      this.setState(previousState => calculate(previousState, buttonName));
    };
  }

  render() {
    const { total, next } = this.state;
    let result = next ? next : total;
    if(!total){
      result = 0;
    }
    return (
      <div className="App">
        <Display result={`${result}`} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;