import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
//have the privious state and the action to do based on type
//the action gibe us the type
const reducer=(state,action)=>{
  if(action.type==="ADD_ITEM"){
    const newItems=[...state.people, action.new_item]//containg my person
    return {...state,people:newItems,isModalOpen:true,modalContent:"Person added"}
  }
  return state
}

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
  }
  
  }

  return <>

  {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
  
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
      </p>
    })}
  </div>

  </>;
};

export default Index;



