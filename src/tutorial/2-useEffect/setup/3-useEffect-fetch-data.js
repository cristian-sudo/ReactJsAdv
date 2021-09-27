import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [user,setuser]=useState([])//craete a state
  const GetUsers = async()=>{
    const response= await fetch(url)//i fetch  the url and put it in an object
    const  users = await response.json()  //i put json format  of the response in an array
    setuser(users);

  }
  useEffect(()=>{
  GetUsers()
  },[])
  return <>
  <h3>Github Users</h3>
  <ul className="users">
        {
          user.map((user)=>{
                return(
               
            <li key={user.id} className="" >
            <img src={user.avatar_url} alt="" />
            <div>
                       <h4>{user.login}</h4>
                       <a href={user.html_url}>User Profile</a>
            </div>
            </li>
            
                )
              })

        }
  </ul>
  </>;
};

export default UseEffectFetchData;


