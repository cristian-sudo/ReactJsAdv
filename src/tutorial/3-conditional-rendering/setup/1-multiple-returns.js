import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson1';


const MultipleReturns = () => {
const [isLoading,setIsLoading]=useState(true)
const [isError,setIsError]=useState(false)
const [user,setUser]=useState("default user")

//const fetching =async()=>{
//const response =  await fetch(url)
//const userResponce = await response.json
//console.log(userResponce)
//}
//fetching()

useEffect(()=>{
  fetch(url)
  .then((response)=>{
    if(response.status >=200 &&  response.status<=299){
      return response.json()
    }else{
      setIsLoading(false)
      setIsError(true)
      throw new Error(response.statusText)
    }
  })//here i recive a onbject from url
  .then((MyJsonResponse)=>{
    const {login}=MyJsonResponse;
    setIsLoading(false)
    setUser(login)
    
  })
  .catch(error=>{
    console.log(error)
  })
},[])

if(isLoading===true){
  return <><h1>Loading...</h1></>;
}
if(isError===true){
return <><h1>There was an error</h1></>;
}
  

  return <div>
  <h1>{user}</h1>
</div>
  
  
};

export default MultipleReturns;
