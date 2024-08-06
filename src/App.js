import { useState } from 'react';
import './App.css';
import FunctionClass from './FunctionClass';

function App() {
const [ data,setData ] = useState(0)

function updatedata() {
  setData(data + 1)
}

  function Innerfunction() {
return(
  <h4>this inner function </h4>
) 
  }
console.log("ghjkl")
  //click event ------------------

//   let name = "beena"
// function Clickevent() {
// name = "nailwal"
//   alert(name)
// }

//-----------------------------
  return (
    <div className="App">
     <h1>app file</h1>
     <FunctionClass />
     <Innerfunction />
     <h6>{data}</h6>
     <button onClick={updatedata}>Update</button>
     {/* <h2>{name}</h2> */}
     {/* <button onClick={Clickevent}>Click</button> */}
    </div>
  );
}

export default App;
