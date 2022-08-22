import React, { useContext } from 'react'
import './LogoutBtn.css';
import LoginContext from '../LoginContext';

const LogoutBtn = () => {

  const { handleSignOut } = useContext(LoginContext);  

  return (
    <button onClick={(e)=>handleSignOut(e)} className='logoutBtn'>Log Out</button>
  )
}

export default LogoutBtn