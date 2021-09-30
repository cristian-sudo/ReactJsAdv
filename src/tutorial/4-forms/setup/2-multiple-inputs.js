import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person,setPerson]=useState({ID:"", Name:"",Email:"",Age:""})//create a state that contains an object
  const [people, setPeople] = useState([]);//create a state with an array of objects
  
  const handleChanges=(e)=>{//once we type this function is called
  const name=e.target.name//get the name of the element in this case of the input
  const value=e.target.value//get the value of the input at that point
  //set the person object adding value by value based on the element name and the privious state
  setPerson({...person/*get the privius state*/,[name]:value,  ID: new Date().getTime().toString()})
 }

 //Once we click on submit
const submit=(e)=>{
e.preventDefault()//it dont reload the page pressing the button
setPeople([...people,person])//Add the current person obhect to the list
setPerson({ID:"",Name:"",Email:"",Age:""})//initialising the inputs that are connected to the names of inputs
 }
  
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='Name'
              name='Name'
              value={person.Name}
              onChange={handleChanges}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='Email'>Email : </label>
            <input
              type='email'
              id='Email'
              name='Email'
              value={person.Email}
              onChange={handleChanges}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='Age'>Age : </label>
            <input
              type='text'
              id='Age'
              name='Age'
              value={person.Age}
              onChange={handleChanges}
            />
          </div>
          <button type='submit' onClick={submit}>add person</button>
        </form>





        {people.map((person, index) => {
          const { ID, Name, Email , Age} = person;//dicomposing
          return (
            <div className='item' key={ID}>
             <h4>{Name}</h4>
              <p>{Email}</p>
              <p>{Age}</p>
             </div>
           );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
