import React from 'react'
import './app.css'
import Counter from './components/Counter.js'
import Home from './pages/Home.js'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  )
}

export default App