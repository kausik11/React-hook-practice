import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const[widthCount, setWithCount] = useState(0)
    useEffect(()=>{
        console.log('add event');
        window.addEventListener('resize',()=>{setWithCount(window.screen.width)});
        return()=>{
            console.log('remove event');
            window.removeEventListener('resize',()=>{setWithCount(window.screen.width)});
        }
    },[window.screen.width])
  return (
    <div>
      <h1>The actual size of window </h1>
      <p>{widthCount}</p>
    </div>
  )
}

export default UseEffect2
