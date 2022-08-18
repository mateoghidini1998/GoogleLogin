/*global google*/
import React, { useContext, useEffect } from 'react'
import LoginContext from '../LoginContext'; 

const Login = () => {

   const {user, handleCallbackResponse, handleSignOut} = useContext(LoginContext);   
   
   useEffect(()=>{
        google.accounts.id.initialize({
          client_id:"186813496344-0j9cjp3klq5igcsk8a2vcdm5gcosner8.apps.googleusercontent.com",
          callback: handleCallbackResponse
        })
    
        google.accounts.id.prompt();
    
    
        window.google.accounts.id.renderButton(
          document.getElementById('signInDiv'),
          {theme: 'outline', size: 'medium'}
        )
    
      }, []);

  return (
    <div>
        <div id="signInDiv"></div>
      {
        //If user objetc is not empty show sign out button
        Object.keys(user).length !== 0 &&
      <button onClick={(e)=>handleSignOut(e)}>Sign Out</button>
      }
      {user && 
        <div>
          <img src={user.picture} alt="" />
          <h3>{user.name}</h3>
        </div>
      }
    </div>
  )
}

export default Login