import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [user,setuser]=useState([])//craete a state
  const GetUsers = async()=>{
    const response= await fetch(url)//i fetch  the url and put it in an object
    const  users = await response.json()  //i put json format  of the response in an array
    console.log(users)

  }
  useEffect(()=>{
  GetUsers()
  })
  return <>
  <h3>Github Users</h3>
  
  </>;
};

export default UseEffectFetchData;
