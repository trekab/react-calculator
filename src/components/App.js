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
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Display result={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;