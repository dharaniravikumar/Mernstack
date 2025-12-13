import React, { useState } from 'react'

const UseState = () => {
    const[count,setCount]=useState(0);
    const[value,setValue]=useState("");
    const handleDecrement =()=>{setCount(count-1);}
    const handleIncrement =()=>{setCount(count+1);}
     return (
    <div>
        <h1>{value}</h1>
        <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder='Enter the value'></input>
        {/*<h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>*/}
    </div>
  )
}

export default UseState