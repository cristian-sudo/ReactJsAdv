import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size,setsize] = useState(window.innerWidth)//set the size
  
  //a function that change the size to the current window width
  const modify =()=>{
  setsize(window.innerWidth)
  }

//creating an use effect that every time we render and change somenting on the page it creates a new event
  useEffect(()=>{
    window.addEventListener("resize", modify)
    return ()=>{
    window.removeEventListener("resize",modify)
  }
  })

  console.log(size)
  return <>
  <h1>window size</h1>
  <h2>{size}</h2>
  </>;
};

export default UseEffectCleanup;
