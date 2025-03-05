import { useState } from 'react'
import New from './New'



function App() {

  // let[counter, setCounter] = useState(20)
  // const addValue = () =>{
  //   // console.log("clicked", Math.random());
  //   // counter = counter + 1;
    
  //   setCounter(counter + 1)
  // }
  // const removeValue = () =>{
    
  //   setCounter(counter - 1)
  // }

  // return (
  //   <>
  //   <h1>Chai aur react</h1>
  //   <h2>Counter Value: {counter}</h2>

  //   <button onClick={addValue}>Add a Value: {counter}</button>
  //   <br/>
  //   <button onClick={removeValue}>Remove a Value: {counter}</button>
  //   </>
  // )
  return(
    <New/>
  )
  
}

export default App

//UI Updation ko react control karta h 
