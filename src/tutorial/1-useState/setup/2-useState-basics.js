import React, { useState } from 'react';


const UseStateBasics = () => {
  const  [text, SetText]= useState("rondom title");
  const ChangeTitle=()=>{
    if(text=="rondom title"){
      SetText("ciao");
    }
    else{
  SetText("rondom title");
    }
    
  }
  return (
  <React.Fragment>
<h1>{text}</h1>
<button className="btn" type="button" onClick={ChangeTitle}>Button</button>
  </React.Fragment>
  )
};

export default UseStateBasics;
