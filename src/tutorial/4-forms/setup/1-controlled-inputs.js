import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
const Four=document.createElement("h5");
const MyF=document.querySelector("#form");


const [name,setName]=useState("")
const [email,setEmail]=useState("")
const Submit=(e)=>{
  e.preventDefault()
  console.log("aaaaa")
}


const NameChange=(e)=>{
  

  setName(e.target.value)
  const MyName=e.target.value
  if(MyName.length<=4){
    if(!document.querySelector("#second")){
    const MyF=document.querySelector("#form");
    Four.innerText="Your name must be 4+ caracter"
    MyF.append(Four)
    Four.id="second"
    }
    
  }else{
    const All=document.querySelector("#second")
    All.remove()
  }
}


const EmailChange=(e)=>{

}

  return <>
  <article>
  <form className="form" onSubmit={Submit} id="form">
    <div className="form-control">
      <label htmlFor="First">Name:</label>
      <input type="text" id="First" name="First" value={name} onChange={NameChange}/>
    </div>
    <div className="form-control">
      <label htmlFor="Second">Email:</label>
      <input type="text"id="Second" name="Second" value={email} onChange={EmailChange}/>
    </div>
    <button type="submit" className="btn">Submit</button>
  </form>
  </article>
  </>;
};

export default ControlledInputs;
