import React, { useState } from 'react'

function UseStatewithObj() {
     
     const obj = {
        myName : 'hello world',
        myAge : 23,
        degree : 'MCA',
        location: 'Kolkata'
     }
     const[myObj, setMyobj] = useState(obj);

     const change= ()=>{
        setMyobj({...myObj, myName : 'kausik saha'});
     }

  return (
    <div>
    {/* Spread Operator */}
      <h1>Name:-{myObj.myName} Myage:-{myObj.myAge} Degree:-{myObj.degree}</h1>
      <button onClick={change}>Change</button>
    </div>
  )
}

export default UseStatewithObj
