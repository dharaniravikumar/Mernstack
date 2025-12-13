import react, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count,setCount]= useState(0);
    useEffect(()=>{
        console.log("Mounted")
    },[count])
    
  return (
    <>
    <div>UseEffect</div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button></>

    
  )
}

export default UseEffect