import { useState } from 'react'
import carLogo from '../public/car-sharing.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={carLogo} className="logo" alt="Car logo" />
        </a>
        
      </div>
      <h1>Carpooling application on the Blockchain!!</h1>
      <div className="card">
        <h1 className="text-3xl font-bold underline text-red-700">
          Hello world!
        </h1>
       
      </div>
     
    </>
  )
}

export default App
