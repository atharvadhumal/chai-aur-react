import React, { useState } from 'react'

const App = () => {
    const [color, setColor] = useState("olive")
  return (
    <div className={`w-full h-screen duration-200' ${color}`}>
        <div className='flex flex-wrap justiy-center bg-amber-50'>
            <div className='flex flex-wrap justiy-center'>
                <button onClick={()=> setColor("bg-red-400")}
                className='outline-none p-5 rounded-2xl' style={{backgroundColor: "red"}}>Red</button>
                <button onClick={()=> setColor("bg-amber-400")} 
                className='outline-none p-5 rounded-2xl' style={{backgroundColor: "yellow"}}>Yellow</button>
                <button onClick={()=> setColor("bg-pink-400")}
                className='outline-none p-5 rounded-2xl'style={{backgroundColor: "pink"}} >Pink</button>
                <button onClick={()=> setColor("bg-blue-400")}
                className='bloutline-none p-5 rounded-2xl' style={{backgroundColor: 'blue'}}>Blue</button>
            </div>
        </div>
    </div>

  )
}

export default App