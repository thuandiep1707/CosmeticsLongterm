import { useState } from 'react'
import Index from './Components/index.jsx'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Index />
    </>
  )
}

export default App
