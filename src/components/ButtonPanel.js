import React from 'react';
import Button from './Button';
import '../css/ButtonPanel.css';

const ButtonPanel = () => (
  <div className="ButtonPanel">
    <div className="ButtonPanelGroup">
      <Button name="AC" color="#E0E0E0" />
      <Button name="+/-" color="#E0E0E0" />
      <Button name="%" color="#E0E0E0" />
      <Button name="/" />
    </div>
    <div className="ButtonPanelGroup">
      <Button name="7" color="#E0E0E0" />
      <Button name="8" color="#E0E0E0" />
      <Button name="9" color="#E0E0E0" />
      <Button name="*" />
    </div>
    <div className="ButtonPanelGroup">
      <Button name="4" color="#E0E0E0" />
      <Button name="5" color="#E0E0E0" />
      <Button name="6" color="#E0E0E0" />
      <Button name="-" />
    </div>
    <div className="ButtonPanelGroup">
      <Button name="1" color="#E0E0E0" />
      <Button name="2" color="#E0E0E0" />
      <Button name="3" color="#E0E0E0" />
      <Button name="+" />
    </div>
    <div className="ButtonPanelGroup">
      <Button name="0" wide color="#E0E0E0" />
      <Button name="." color="#E0E0E0" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
