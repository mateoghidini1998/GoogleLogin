import './App.css';
import Login from './atoms/Login';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { useContext } from 'react';
import LoginContext from './LoginContext';
import Contact from './pages/Contact';
import Search from './pages/Search';
import Main from './templates/Main';

function App() {
  const {isLoggedIn} = useContext(LoginContext);
  console.log(isLoggedIn);
  return (    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Main/> : <Login />}/>
        <Route path="/contact" element ={<Contact/>}/> 
        <Route path="/search" element ={<Search/>}/>       
      </Routes>
      </BrowserRouter>   
    );
}

export default App;