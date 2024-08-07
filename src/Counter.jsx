import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    function increment() {
        setCount(count+1)        
    }
    function decrement() {
        setCount(count-1)
        
        // if (count>0) {
        //     setCount(count-1)            
        // }
    }
    function reset() {
        setCount(0)
        // alert("Reset Done")               
    }
  return (
    <div className='counter'>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter