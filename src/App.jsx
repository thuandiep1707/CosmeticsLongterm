import {Routes, Route, useNavigate} from 'react-router-dom'


import Header from './components/header/Header'
import Homepage from './layout/homepage/Homepage'

import './App.scss'


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
      </Routes>
    </div>
  )
}

export default App
