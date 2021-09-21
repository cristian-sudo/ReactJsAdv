import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson]=useState({name: "Cristian", age:23, message:"ciao a tutti"})
  const ChangeMessage=()=>{
    setPerson({...person, message:"jnoekvnrken"})
  }
  return <>
  <h1>{person.name}</h1>
  <h1>{person.age}</h1>
  <h1>{person.message}</h1>
  <button className="btn" type="button" onClick={ChangeMessage}>Change message</button>
  </>;
};

export default UseStateObject;
