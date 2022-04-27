import React, { useState } from 'react';
import './Toggle.css';

function Toggle() {
  const [toggleState, setToggleState] = useState("off");

  const toggle =() => {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  return (
    <div className={`switch ${toggleState}`}>
      <div id={toggleState==="off"? "black":""} onClick={toggle}>기본</div>
      <div id={toggleState==="on"? "black":""} onClick={toggle}>상세</div>
    </div>
  );
}

export default Toggle;