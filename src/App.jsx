import { useState } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Index from './Components/index.jsx'
import './App.scss'

function App() {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route path="/*" element={<Index />}/>
    </Routes>
  )
}

export default App
