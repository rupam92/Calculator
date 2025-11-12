// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from 'react'  
import './App.css'

function App() {
 
    const[input,setInput]=useState("")

    const handleClick=(value)=>{
      setInput(input+value);
    };

    const calculate=()=>{
      try{
        setInput(eval(input).toString())
      } catch{
        setInput("error");
      };
    };

    const clear= ()=>{
      setInput("");
    };

    return(
      <>
      <h1>CALCULATOR</h1>
      <div class="calculator">
        <h2>simple calculator</h2>
        <input type="text" value={input}readOnly/>
    
      <div class="buttons">
          {"1234567890+-*/.".split("").map((btn)=>(
            <button key={btn}  onClick={()=>handleClick(btn)} >
            {btn}
            </button>))}

            <button onClick={calculate}>=</button>

            <button onClick={clear}>C</button>

      </div>
      </div>
      </>
    );
}

export default App
