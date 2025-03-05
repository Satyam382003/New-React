import { useState } from 'react'
import React from 'react'


function App() {
      let[color, setColor] = useState("blue")

  return (
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-3 px-3 py-1 rounded-xl bg-white shadow-lg '>
            <button onClick={() => setColor("red")} className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("green")} className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("white")} className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "white"}}>White</button>
            <button onClick={() => setColor("black")} className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>
            <button onClick={() => setColor("orange")} className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}}>Orange</button>
            <button onClick={() => setColor("olive")} className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "olive"}}>Olive</button>
            <button onClick={() => setColor("purple")} className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}}>Purple</button>
          </div>
        </div>
    </div>
    
    )
}

export default App
