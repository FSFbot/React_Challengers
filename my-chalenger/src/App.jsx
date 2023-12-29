import { useState } from 'react'

import './App.css'
import Chalenger from "./components/Chalenger.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chalenger/>
    </>
  )
}

export default App
