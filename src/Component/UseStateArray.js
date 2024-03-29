import React, { useState } from 'react'
import './UseStateArray.css'

function UseStateArray() {

 


    const BioData = [
        {id :0,myname:'Hello',age:23},
        {id :1,myname:'world',age:25},
        {id :2, myname:'universe', age:'33'}
    ]


   

    const[myarray,setArray] = useState(BioData);

    const clearArray = ()=>{
      setArray(['data is cleared']);  
    };

  return (
    <>
      <div className='container'>
      {
        myarray.map(ele=> {if(ele.age){
            let a =`Id: ${ele.id} name: ${ele.myname} age:${ele.age}`
                 return <h1 className='headings' key={ele.id}>{a}</h1>;
        }else{
            let a = `${ele}`
            return <h1 className='headings'>{a}</h1>
        }
            
                 })
                 
      }
    </div>
    <button onClick={clearArray}>Clear</button>
    </>
    
  )
}

export default UseStateArray
