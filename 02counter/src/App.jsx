import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [value, setValue] = useState(5)

  // let counter = 5

  const addValue = () => {
      if(value == 20) {
        setValue(value==20 )
      }
      else {
        setValue(value+1)
      }
    }
  
  const removeValue  = () => {
    if(value > 0) {
      setValue(value - 1)
    }
    else {
      setValue (0)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {value}</h2>

      <button onClick={addValue}
      >Add Value {value} </button>
      <br />
      <button onClick={removeValue}
      >Decrease Value {value} </button>
    </>
  )
}

export default App
