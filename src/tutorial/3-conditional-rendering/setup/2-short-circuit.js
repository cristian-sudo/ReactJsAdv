import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText]= useState("")
  const [isError,setIsError]=useState(false)
//if i have an empty string:
/*
empty string=false
true || “Something”   == “”  if the expression is true dont do that
false || “Something”   == something if the expression is false do that

true &&  “Something”   == something
true &&    show or hide something
false && “Something”   == “”
*/

const genErr =()=>{
setIsError(!isError)
}
  return <>
<h1>{isError ? <div>Error</div> : <div>No error</div>}</h1>
<button className="btn" onClick={genErr}>Generate an error</button>
  </>
};

export default ShortCircuit;
