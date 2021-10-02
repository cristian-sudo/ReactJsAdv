import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const InputRef = useRef(null)
  const submit=(e)=>{
  e.preventDefault();
  console.log(InputRef.current.value)
  }
  useEffect(()=>{
    InputRef.current.focus()
  })
  return <>
  <input type="text" ref={InputRef}/>
  <button type="button" onClick={submit}>Click</button>
  </>;
  
  
};

export default UseRefBasics;
