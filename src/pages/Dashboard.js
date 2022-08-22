import React, { useContext } from 'react'
import Sidebar from '../organisms/Sidebar'
import './Dashboard.css'
import LoginContext from '../LoginContext'; 

const Dashboard = () => {

  const {user} = useContext(LoginContext);
  console.log(user)

  return (
    <div className='dashboard'>
      <div className="user-content">
        <Sidebar />
      </div>
        <div className='content'>
            <h1>Welcome to my Dashboard</h1>
        </div>
    </div>
  )
}

export default Dashboard
