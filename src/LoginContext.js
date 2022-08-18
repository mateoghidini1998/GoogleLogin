import React, { createContext, useState } from "react";
import jwt_decode from 'jwt-decode';

const LoginContext = createContext();

export function LoginProvider({ children}) {

    const [user, setUser] = useState({}) 
    

    function handleCallbackResponse(response){
        var userData = jwt_decode(response.credential); //Token with the login user Data
        setUser(userData); //Store user Data 
        
        /* console.log(userData) */
        document.getElementById('signInDiv').hidden = true;        
      }

    function handleSignOut(event) {
        setUser({}) //Empy the user Data
        
        document.getElementById('signInDiv').hidden = false;
    }  

    return(
        <LoginContext.Provider value={{user, handleCallbackResponse, handleSignOut}}>{children}</LoginContext.Provider>
    );
}

export default LoginContext
