import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [list,setList]=useState([])
const [id,setID]=useState(0)

const Submit=(e)=>{
e.preventDefault()//not autorefreshing the page
const MyObj={id,name,email}//creating an object
//let NewArray=[];
//NewArray.push(MyObj)
//setList(NewArray)

setList((Newelement)=>{
  return [...Newelement,MyObj]
    })//set the new state having the old state as parameter and adding a new person

setName("")
setEmail("")
setID((Privious)=>Privious+1)
  }

const NameChange=(e)=>{
  setName(e.target.value)
}


const EmailChange=(e)=>{
setEmail(e.target.value)
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
  <article>
    <ul>
      <li>Person List</li>
     {
       list.map((element)=>{
         const {id,name,email}=element
         return <li key={id} className="item">
        <h3>ID:{id}___Name:{name}___Email:{email}</h3>
         </li>
       })
     }
    </ul>
  </article>
  </>;
};

export default ControlledInputs;
