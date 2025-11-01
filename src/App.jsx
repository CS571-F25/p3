import { HashRouter, Route, Routes } from 'react-router'
import { useState } from 'react'   
import './App.css'
import Home from './components/home'
import AboutMe from './components/aboutme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutMe/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
