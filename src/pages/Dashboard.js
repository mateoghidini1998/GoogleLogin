import React, { useContext } from 'react'
import Navbar from '../organisms/Navbar'
import './Dashboard.css'
import LoginContext from '../LoginContext'; 

const Dashboard = () => {

  const {user} = useContext(LoginContext);
  

  return (
    <div className='dashboard'>
        <h2>{user.name}</h2>
        <Navbar/>
        <div className='content'>
            <h1>Welcome to my Dashboard</h1>
        </div>
    </div>
  )
}

export default Dashboard
