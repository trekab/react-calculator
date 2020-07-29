import React from 'react';
import Button from './Button';

const buttonPanel = () => {
  return (
    <div>
      <div>
        <Button name="AC"></Button>
        <Button name="+/-"></Button>
        <Button name="%"></Button>
        <Button name="/"></Button>
      </div>
      <div>
        <Button name="7"></Button>
        <Button name="8"></Button>
        <Button name="9"></Button>
        <Button name="*"></Button>
      </div>
      <div>
        <Button name="4"></Button>
        <Button name="5"></Button>
        <Button name="6"></Button>
        <Button name="-"></Button>
      </div>
      <div>
        <Button name="1"></Button>
        <Button name="2"></Button>
        <Button name="3"></Button>
        <Button name="+"></Button>
      </div>
      <div>
        <Button name="0"></Button>
        <Button name="."></Button>
        <Button name="="></Button>
      </div>
    </div>
  );
};

export default buttonPanel;