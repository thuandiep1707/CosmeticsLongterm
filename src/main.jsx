import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import {GlobalProvider} from './GlobalContext'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </BrowserRouter>,
)
