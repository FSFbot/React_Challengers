import { useState } from 'react'

import './App.css'
import Chalenger from "./components/Chalenger.jsx";
import UserDetails from "./components/userDetails.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chalenger/>
      <UserDetails/>
    </>
  )
}

export default App
