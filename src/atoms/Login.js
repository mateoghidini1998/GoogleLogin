import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Login = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({})

  function handleCallbackResponse(response){
    var userData = jwt_decode(response.credential); //Token with the login user Data
    setUser(userData); //Store user Data 
    /* console.log(userData) */
    document.getElementById('signInDiv').hidden = true;
    navigate('/dashboard');
  }

  function handleSignOut(event) {
    setUser({}) //Empy the user Data
    document.getElementById('signInDiv').hidden = false;
  }

    useEffect(()=>{
        /*global google*/
        google.accounts.id.initialize({
          client_id:"186813496344-0j9cjp3klq5igcsk8a2vcdm5gcosner8.apps.googleusercontent.com",
          callback: handleCallbackResponse
        })
    
        google.accounts.id.prompt();
    
    
        google.accounts.id.renderButton(
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