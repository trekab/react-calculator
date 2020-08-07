import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../css/App.css';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null
  };

  handleClick = (buttonName) => {
    const result = calculate(this.state, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation
    });
  }

  render(){
    return (
      <div className="App">
        <Display result={this.state.total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
