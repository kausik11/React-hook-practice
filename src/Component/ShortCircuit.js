import React, { useState } from 'react'

const ShortCircuit = () => {
    let val;
   
    const [array,setArray] = useState('');
  return (
    <div>
    <h1>Short circuit evaluation</h1>
      <h1>{array || setArray('hii')}</h1>
      <h1>{val && 'kausik'}</h1>
    </div>
  )
}

export default ShortCircuit
