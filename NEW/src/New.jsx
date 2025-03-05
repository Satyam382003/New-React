import React from 'react'
import { useState } from 'react'

const New = () => {
    let [counter, setCounter] = useState(20);

    const increment = () =>{
       setCounter(counter + 1);
    }
    const Decrement = () =>{
       setCounter(counter - 1);
    }
  return (
    <>
    <h1>ADD && SUBTRACT</h1>
    <h2>Number: {counter}</h2>
   <button onClick={increment}>Increase: {counter}</button>
   <button onClick={Decrement}>Decrease: {counter}</button>
   </>
  )
}

export default New
