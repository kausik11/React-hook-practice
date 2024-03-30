import React, { useState } from 'react'
import './Form.css'

const Form = () => {
    const[email,setEmail] = useState('');
    const[pass,setPass] = useState('');
    const[allUser,setAlluser] = useState('');

    const inpt = (e)=>{
        setEmail(e.target.value);
        
    }
    const inptPass = (e)=>{
        setPass(e.target.value);
    }
    const submt = (e)=>{
        e.preventDefault();
        if (email && pass) {
         
          const currentUser = {
        email : email, password : pass 
      };
      setAlluser([...allUser,currentUser]);
      setEmail('');
      setPass('');
        }else{
          alert('please enter some input');
        }
    }
  return (
    <>
        <form onSubmit={submt}>
        <div className='contain'>
        <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' autoComplete='off' value={email} onChange={inpt}/>
        </div>
        <div className='contain'>
        <label htmlFor='pass'>Pass</label>
            <input type='password' name='pass' id='email' autoComplete='off' value={pass} onChange={inptPass} />
        </div>
           <button type='submit'>submit</button> 
        </form>
        <div>
          { allUser.length > 0 && allUser.map((curele)=>{ return `Email: ${curele.email} Pass:${curele.password}`})}
        </div>
    </>
  )
}

export default Form
