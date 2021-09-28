import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [isShown,setIsShown]= useState(false)
  return <>
  <button className="btn" onClick={()=>setIsShown(!isShown) }>Show component</button>
  {isShown && <Item/>}
  </>;
};
 const Item=()=>{

   const [size, setSize]= useState(window.innerWidth)
  
   const checksize =()=>{
   setSize(window.innerWidth)
    }

   useEffect((()=>{
   window.addEventListener("resize",checksize)
   return ()=>{
     window.removeEventListener("resize",checksize)
   }
   }),[])

   return <>
   <h1>Display:{size}</h1>
   </>
 }

export default ShowHide;
