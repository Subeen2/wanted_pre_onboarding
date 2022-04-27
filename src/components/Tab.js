import React, {useState} from 'react';
import "./Tab.css";

function Tab() {
  const [potato, setPotato] = useState("");
  const [sweetPotato, setSweetPotato] = useState("");
  const [curry, setCurry] = useState("");

  const selectPotato = () => {
    setPotato("potato");
    setSweetPotato("");
    setCurry("");
  }

  const selectSweetPotato = () => {
    setSweetPotato("sweet-potato");
    setPotato("");
    setCurry("");
  } 
  const selectCurry = () => {
    setCurry("curry");
    setPotato("");
    setSweetPotato("");
  }


  return (
    <div className="select">
      <div className={potato} onClick={selectPotato}>감자</div>
      <div className={sweetPotato} onClick={selectSweetPotato}>고구마</div>
      <div className={curry} onClick={selectCurry}>카레</div>
    </div>
  );
}

export default Tab;