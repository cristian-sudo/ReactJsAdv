


import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  let [value, setvalue]=useState(0);

//things that happend if a value is changed
  useEffect(()=>{
document.title=`NewMessage(${value})`
console.log(value);
  },[value])

  useEffect(()=>{
    if(value%2===0)
    console.log("hiiiii");
  })

  return <>
  <h1>{value}</h1>
  <button className="btn" type="button" onClick={()=>{setvalue(value+1)}}>Click me</button>
  </>;
};

export default UseEffectBasics;
