import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Layout'
import Nav1 from './pages/nav1'
import Nav2 from './pages/nav2'
import Nav3 from './pages/Nav3'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='Layout' element={<Layout />} >
            <Route path='nav1' element={<Nav1 />}/>
            <Route path='nav2' element={<Nav2 />}/>
            <Route path='nav3' element={<Nav3 />}/>
          </ Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
