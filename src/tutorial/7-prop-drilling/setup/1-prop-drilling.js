import React, { useState,useContext} from 'react';
import {data} from "../../../data"
// more components
// fix - context api, redux (for more complex cases)
const MyContext=React.createContext();
//two components Consumer and provider

const PropDrilling = () => {
  const [people,setPeople]=useState(data)
  return <MyContext.Provider value="ciao">
  <section>
    <h3>prop drilling</h3>
    <List people ={people}/>
  </section>
   </MyContext.Provider>;
};

const List =({people})=>{
  return <>
  {people.map((person)=>{
    return <SinglePerson key={person.id}/>
  })}
  </>
}

const SinglePerson=({id,name})=>{
  const myData=useContext(MyContext)
  return <div className="item">
<h3>Single item{myData}</h3>
  </div>
}
export default PropDrilling;
