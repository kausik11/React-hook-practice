import React, { useState } from 'react'

const ShortCircuit = () => {
   
    const [array,setArray] = useState('hello world');
  return (
    <div>
    <h1>Short circuit evaluation</h1>
      <h1>{array || setArray('hii')}</h1>
    </div>
  )
}

export default ShortCircuit
