import React from 'react'
import NavBar from '../Components/NevBar'
import Menu from '../Components/Menu'

const Home = () => {
  return (
    <div className='min-h-screen bg-background'>
        <NavBar />
        <h1 className='text-3xl font-bold text-center mt-10'>Welcome to ClickCard</h1>
        <Menu />
    </div>
  )
}

export default Home
