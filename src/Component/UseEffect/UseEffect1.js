import React, { useEffect, useState } from 'react'


const UseEffect1 = () => {

    const[count,setCount]=useState(0);
    const change = ()=>{
        setCount(count + 1);
    }
    useEffect(()=>{(count>0) ? (document.title = `chats(${count})`) : (document.title = 'Your React App')},[count]);
    console.log('hello world1')
    useEffect(()=>{console.log('hello world2')},[])
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={change}>Click Me</button>
    </div>
  )
}

export default UseEffect1
