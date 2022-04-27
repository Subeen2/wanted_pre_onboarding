import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown() {
  const [value, setValue] = useState("All Symbols");
  const [isShow, setIsShow] = useState(false);

  const updateValue = (e) => {
    setValue(e.target.value);
  }

  const showBox = () => {
    setIsShow(true);
  }

  return (
    <div className='dropdown-box'>
      <div className='box' onClick={showBox}>{value}</div>
      {isShow ? 
      <div>
        <input type="text" list="options" onChange={updateValue}/>
        <datalist id="options">
          <option value="Dune"/>
          <option value="Dark Waters"/>
          <option value="The Artist"/>
          <option value="The Avengers"/>
          <option value="Iron Man"/>
          <option value="Iron Man 2"/>
          <option value="Matrix"/>
          <option value="Matrix 2"/>
        </datalist>
      </div>
      :null}

    </div>
  );
}

export default Dropdown;