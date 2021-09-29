import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person,setPerson]=useState({Name:"",Email:"",Age:""})
  const [people, setPeople] = useState([]);
 const handleChanges=(e)=>{
   const name=e.target.name
   const value=e.target.value
  setPerson({...person,[name]:value})

 }
 const submit=(e)=>{
e.preventDefault()
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
              value={person.age}
              onChange={handleChanges}
            />
          </div>
          <button type='submit' onClick={submit}>add person</button>
        </form>





        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
