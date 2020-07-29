import React from 'react';
import Button from './Button';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi, there!</h1>
      <Display result="0"></Display>
      <Button name="New"></Button>
    </div>
  );
}

export default App;
