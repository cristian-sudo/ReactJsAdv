import React, { useEffect, useState } from 'react';
const url="https://api.github.com/users/QuincyLarson"

const UseRefBasics=()=>{
const [ID,setID]=useState(0)
const first=0;

const GetData=async ()=>{
    const results= await fetch(url)
    const Jresult= await results.json()
if(first==0){
    const body=document.querySelector("body")
    const NewDiv=document.createElement("div")
    body.append(NewDiv)
    var H3=document.createElement("h3")
    H3.innerText=Jresult.login
    NewDiv.append(H3)
    const img=document.createElement("img")
    img.textContent=Jresult.avatar_url
    NewDiv.append(img)
   
}
else{
    console.log("a")
}
}

//call the api and store the data
//create the div in javascript
//add it to the last element




  return <div >
  <button className="btn" onClick={GetData}>Add user</button>
  </div>
;
};

export default UseRefBasics;
