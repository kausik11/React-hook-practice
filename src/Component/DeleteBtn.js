import React,{useState} from 'react'

function DeleteBtn() {

    const BioData = [
        {id :0,myname:'Hello',age:23},
        {id :1,myname:'world',age:25},
        {id :2, myname:'universe', age:'33'}
    ];
    const[myarray,setArray] = useState(BioData);

    // const clearArray = ()=>{
    //   setArray(['data is cleared']);  
    // };
    
    const del =(element)=>{
     const NewArr =  myarray.filter((currEle)=>{ return currEle.id !== element}); 
     setArray(NewArr);   

    }
      
    

  return (
     <div className='container'>
      {
        myarray.map(ele=> {if(ele.age){
            let a =`Id: ${ele.id} name: ${ele.myname} age:${ele.age}`
                 return (<h1 className='headings' key={ele.id}>{a} <button onClick={()=>del(ele.id)}>delete</button></h1>);
        }
    
            
                 })
                 
      }
    </div>
  )
}

export default DeleteBtn
