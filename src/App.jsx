import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthScreen from './Components/AuthScreen'
import './index.css'
import Footer from './Components/Footer'
import NavBar from './Components/NevBar'

export default function App() {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<AuthScreen />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}
