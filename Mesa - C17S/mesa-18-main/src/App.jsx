import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import routes from './'
import Home from '../components/Home.jsx'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
