import React, { useContext } from 'react'
import LoginContext from '../LoginContext';
import LogoutBtn from '../atoms/LogoutBtn';
import './Navbar.css';


const Navbar = () => {

  const {user} = useContext(LoginContext);  

  return (
    <div className='navbar'>
        <div className="userInfo">
            <img src={user.picture} alt="" />
            <h2>{user.name}</h2>
        </div>
        <div className="logout">
            {
            //If user objetc is not empty show sign out button
                Object.keys(user).length !== 0 &&
                <LogoutBtn/>
            }
        </div>
    </div>
  )
}

export default Navbar