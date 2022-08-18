import './App.css';
import { useContext } from 'react';
import Login from './atoms/Login';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { LoginProvider } from './LoginContext';
import LoginContext from './LoginContext'; 

function App() {

  const {isLoggedIn} = useContext(LoginContext);   
  

  return (
    <LoginProvider >
      <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Login />}/>
        <Route  path="/" element={<Login /* setIsLoggedIn={setIsLoggedIn} *//>} />    
      </Routes>
      </BrowserRouter>
    </LoginProvider>
    
  );
}

export default App;