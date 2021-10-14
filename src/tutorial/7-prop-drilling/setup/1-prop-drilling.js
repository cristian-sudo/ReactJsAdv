import React, { useState,useContext} from 'react';
import {data} from "../../../data"
// more components
// fix - context api, redux (for more complex cases)
const MyContext=React.createContext();
//two components Consumer and provider

const PropDrilling = () => {
  const [people,setPeople]=useState(data)

  const removePerson=(id)=>{
      setPeople((people)=>{
       return people.filter(person=>person.id!==id)
     })
    }
  return <MyContext.Provider value={{removePerson}}>
  <section>
    <h3>prop drilling</h3>
    <List people ={people}/>
  </section>
   </MyContext.Provider>;
}

const List =({people})=>{
  return <>
  {people.map((person)=>{
    return <SinglePerson key={person.id}{...person}/>
  })}
  </>
}

const SinglePerson=({id,name})=>{
  const {removePerson}=useContext(MyContext)
  
  return <div className="item">
<h3>{name}</h3>
<button className="btn" onClick={()=>removePerson(id)}>remove</button>
  </div>
}
export default PropDrilling
