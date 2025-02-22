import React from 'react'
import Card from '../src/components/Card'



const App = () => {

    let myObj = {
        username: "atharva",
        age: 21,

    }
    let newArr = [1, 2, 3]
  return (
   <>
   <h1 className='bg-green-400 text-black p-4 rounded-3xl mb-4'>Tailwind Test</h1>
   <Card username='chaiaurcode'/>
   <Card />
   </>
  )
}

export default App    