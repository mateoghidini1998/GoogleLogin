import React, { useContext } from 'react'
import Navbar from '../organisms/Navbar'
import './Dashboard.css'
import LoginContext from '../LoginContext'; 

const Dashboard = () => {

  const {user, handleSignOut} = useContext(LoginContext);
  console.log(user)

  return (
    <div className='dashboard'>
      <div className="user-content">
      {
        //If user objetc is not empty show sign out button
        Object.keys(user).length !== 0 &&
      <button onClick={(e)=>handleSignOut(e)}>Sign Out</button>
      }
        <h2>{user.name}</h2>
        <Navbar/>
      </div>
        <div className='content'>
            <h1>Welcome to my Dashboard</h1>
        </div>
    </div>
  )
}

export default Dashboard
