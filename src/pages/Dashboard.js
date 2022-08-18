import React from 'react'
import Navbar from '../organisms/Navbar'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <h2>Mateo Ghidini</h2>
        <Navbar/>
        <div className='content'>
            <h1>Welcome to my Dashboard</h1>
        </div>
    </div>
  )
}

export default Dashboard