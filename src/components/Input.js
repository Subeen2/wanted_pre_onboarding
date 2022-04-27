import React, { useState } from 'react';
import "./Input.css";

function Input() {
  const [isValid, setIsValid] = useState(false);
  const [check, setCheck] = useState("");
  const [showValidBox, setShowValidBox] = useState(false);
  const [emailSelected, setEmailSelected] = useState("");
  const [passSelected, setPassSelected] = useState("");

  const emailValueChange = (e) => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

    if (regExp.test(e.target.value)) {
      setIsValid(true);
      setCheck("checked");
    } else {
      setIsValid(false);
      setCheck("");
    }
  }

  const leaveEmailBox = (e) => {
    setEmailSelected("");
    if (isValid || e.target.value === "") {
      setShowValidBox(false);
    } else setShowValidBox(true);
  }

  const leavePassBox = () => {
    setPassSelected("");
  }

  const selectEmail = () => {
    setEmailSelected("selected");
  }

  const selectPass = () => {
    setPassSelected("selected");
  }


  return (
    <div className='input-box'>
      <div>
        <div>E-mail</div>
        <div className={`email-box ${emailSelected}`} onClick={selectEmail}>
          <input type="email" placeholder='E-mail' onChange={emailValueChange} onBlur={leaveEmailBox} />
          <input id="cb" type="checkbox" checked={check} disabled />
          <label for="cb"></label>
        </div>
        {showValidBox ? <div className='invalid-box'>Invalid e-mail address.</div> : null}
      </div>
      <div className='pass-box'>
        <div>Password</div>
        <input type="password" placeholder='Password' className={`pass-box ${passSelected}`} onClick={selectPass} onBlur={leavePassBox}></input>
      </div>
    </div>
  );
}

export default Input;