import React, { useContext } from 'react'
import './Dashboard.css'
import LoginContext from '../LoginContext'; 

const Dashboard = () => {

  const {user} = useContext(LoginContext);
  console.log(user)

  return (
    <div className='dashboard'>
      
        <div className='content'>
            <h1>Welcome to my Dashboard</h1>
        </div>
    </div>
  )
}

export default Dashboard
