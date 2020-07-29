import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../App.css';

const app = () => {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <Display></Display>
      <ButtonPanel></ButtonPanel>
    </div>
  );
}

export default app;
