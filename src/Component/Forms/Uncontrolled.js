import React,{useRef, useState} from 'react'
import { GiSubmarineMissile } from "react-icons/gi";

const Uncontrolled = () => {
   

    //it likes a usestate only and its preserve the value. no rerender the component
    const lucyname = useRef(null)
    const [show,setshow] = useState(false);
    const [result,setResult] = useState('');


    const submitform = (e)=>{
        e.preventDefault();
        let result = lucyname.current.value;
         setResult(result);
        result === '' ? alert('input field is empty') : setshow(true);
    }
  return (
    <div>
    <form onSubmit={submitform}>
        <div>
            <label htmlFor='lucyname'>Enter Your name</label>
            <input type='text' id='lucyname' ref={lucyname}></input>
        </div>
        <br/>
        <button>Submit <GiSubmarineMissile /></button>
    </form>
    <p>{show ? `${result}` : 'please enter text'}</p>
    </div>
  )
}

export default Uncontrolled
