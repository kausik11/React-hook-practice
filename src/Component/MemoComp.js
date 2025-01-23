import React from 'react'
import { useState } from 'react'
import MemoCompChild from './MemoCompChild';

const MemoComp = () => {
    const[count,setCount]=useState(0);
    const[val,setVal]=useState("Hello");
  return (
    <div>
      <h1>React.memo Example</h1>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
      <p>count: {count}</p>

      <button onClick={()=>setVal(val==="Hello"?"World":"Hello")}>Change Value</button>
      {/* <p>Value: {val}</p> */}
      {/* to check the usecase of memo we pass the val to the childcomp */}
      <MemoCompChild value={val}/>
    </div>
  )
}

export default MemoComp
