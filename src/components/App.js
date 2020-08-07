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

  render(){
    return (
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
