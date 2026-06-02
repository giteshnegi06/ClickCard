import React from 'react'
import NavBar from '../Components/NevBar'
import Menu from '../Components/Menu'

const Profile = () => {
  return (
    <div className='min-h-screen bg-background'>
        <NavBar />
        <Menu />
      <h1 className='text-3xl font-bold text-center mt-10'>Profile Page</h1>
    </div>
  )
}

export default Profile
