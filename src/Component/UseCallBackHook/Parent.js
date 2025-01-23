import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import Child from './Child';

const Parent = () => {
    const[count,setcount]=useState(0);

    const show = useCallback(()=>{
        console.log("button clicked");
    },[])
  return (
    <div>
        <button onClick={()=>setcount(prev=>prev+1)}>Increment</button>
        <p>count: {count}</p>
        <Child showfunc={show}/>
    </div>
  )
}

export default Parent
