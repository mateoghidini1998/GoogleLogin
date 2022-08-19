import './App.css';
import Login from './atoms/Login';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { useContext } from 'react';
import LoginContext from './LoginContext';

function App() {
  const {isLoggedIn} = useContext(LoginContext);
  console.log(isLoggedIn);
  return (    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard/> : <Login />}/>
                
      </Routes>
      </BrowserRouter>   
    );
}

export default App;