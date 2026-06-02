import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthScreen from './Pages/AuthScreen'
import './index.css'
import Footer from './Components/Footer'
import NavBar from './Components/NevBar'
import Home from './Pages/Home'
import Analytics from './Pages/Analytics'
import Contacts from './Pages/Contacts'
import Profile from './Pages/Profile'

export default function App() {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<AuthScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}
