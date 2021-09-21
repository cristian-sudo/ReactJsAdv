import React, {useState} from 'react';
import { data } from '../../../data';
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let NewArray= data.map((m)=>{
  return m.name;
});

const UseStateArray = () => {
const  [Text, setText]= useState("UseState example");

const Change =()=>{
  setText(NewArray[getRandomInt(NewArray.length)]);
}

  return (<section>
    <h2>{Text}</h2>
  <button type="button" className="btn" onClick={Change}>press</button>

  </section>
  );
};

export default UseStateArray;
