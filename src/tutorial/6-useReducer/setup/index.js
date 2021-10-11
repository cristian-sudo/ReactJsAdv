import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import reducer from "./reducer"
// reducer function
//have the privious state and the action to do based on type
//the action gibe us the type


const defaultState={
people:[],
isModalOpen:false,
modalContent:"",
}



const Index = () => {
  const [name,setName]=useState("")
  //state is the state shown 
  //dispatch is the function
  //reducer is the funtion that will do somenthing to our state
  //defaultState is the default value
  const [state,dispatch]=useReducer(reducer,defaultState)

  const SubmitHandle = (e)=>{
  e.preventDefault()

  if(name){
  const newItem={id:new Date().getTime().toString(),name}
  dispatch({type: "ADD_ITEM" ,new_item:newItem} )
  setName("")
  }else{
  dispatch({type: "NO_ITEM"} )
  }
  }
const closeModal=()=>{
    dispatch({type: "DISAPEAR"} )
}


  return <>

  {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
  
  <form className="form" onSubmit={SubmitHandle}>
<input type="text" 
name="Myinput"
onChange={(e)=>{setName(e.target.value)}}
/>
<button type="submit">Add</button>
  </form>
  <div>
    {state.people.map((a)=>{
      return <p className="item" key={a.id}>
        {a.name}
        <button onClick={()=>{
    dispatch({type: "REMOVE",IDPass:a.id } )
        }}>Remove</button>
      </p>
    })}
  </div>

  </>;
};

export default Index;



