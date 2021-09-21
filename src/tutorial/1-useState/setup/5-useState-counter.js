import React, { useState } from 'react';

const UseStateCounter = () => {
  const[text,setText]=useState(0)
const anotherFunction=()=>{
  setTimeout(()=>{
setText((n)=>{return n+1})
  }, 2000)
}
  return (
    <>  
    <h3>{text}</h3>
    <button className="btn" type="button" onClick={anotherFunction}>button</button>
    </>
  );
};

export default UseStateCounter;
