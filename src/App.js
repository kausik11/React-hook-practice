import './App.css';
import Parent from './Component/UseCallBackHook/Parent';
// import MemoComp from './Component/MemoComp';
// import UseEffect1 from './Component/UseEffect/UseEffect1';
// import UseEffect2 from './Component/UseEffect/UseEffect2';
// import Form from './Component/Forms/Form';
// import Uncontrolled from './Component/Forms/Uncontrolled';
import DeleteBtn from './Component/DeleteBtn.js';
// import ShortCircuit from './Component/ShortCircuit.js';
// import First from'./Component/First.js';
// import UseStateArray from './Component/UseStateArray.js';
// import UseStatewithObj from './Component/UseStatewithObj.js';

function App() {
  return (
    <div className='App'>
      {/* <First /> */}
      {/* <UseStateArray/> */}
      {/* <UseStatewithObj /> */}
      <DeleteBtn />
      {/* <ShortCircuit/> */}
      {/* <Form /> */}
      {/* <UseEffect1/> */}
      {/* <UseEffect2 /> */}
      {/* <Uncontrolled /> */}
      {/* <MemoComp/> */}
      <Parent/>
    </div>
  );
}

export default App;
