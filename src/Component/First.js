import React, { useState } from 'react'
import './First.css'

function First() {
    var val = 'hello world';
    const[Value, SetValue]=useState(val);
   
    
     const Change = ()=>{
        if (val === Value) {
            SetValue('This is my first React App');
        } else {
            SetValue(val);
        }
       
     }

  return (
    <div className='show'>
      <h1>{Value}</h1>
      <button onClick={Change}>Click Me</button>
    </div>
  )
}

export default First
