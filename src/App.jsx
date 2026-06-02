import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import './index.css'

import AuthScreen from './Pages/AuthScreen'
import Home from './Pages/Home'
import Analytics from './Pages/Analytics'
import Contacts from './Pages/Contacts'
import Profile from './Pages/Profile'

import NavBar from './Components/NevBar'
import Menu from './Components/Menu'
// import Footer from './Components/Footer'

function Layout() {

  const location = useLocation()

  // Hide navbar/menu on login page
  const hideLayout = location.pathname === '/'

  return (
    <div className="min-h-screen bg-zinc-50">

      {!hideLayout && <NavBar />}

      <main className={`${!hideLayout ? 'pb-28 pt-2' : ''}`}>

        <Routes>

          <Route path="/" element={<AuthScreen />} />

          <Route path="/home" element={<Home />} />

          <Route path="/analytics" element={<Analytics />} />

          <Route path="/contacts" element={<Contacts />} />

          <Route path="/profile" element={<Profile />} />

        </Routes>

      </main>

      {!hideLayout && <Menu />}

      {/* {!hideLayout && <Footer />} */}

    </div>
  )
}

export default function App() {

  return (
    <Router>
      <Layout />
    </Router>
  )
}

