import './App.css';
import Login from './atoms/Login';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import LoginContext from './LoginContext';
import Contact from './pages/Contact';
import Search from './pages/Search';
import Main from './templates/Main';
import Dashboard from './pages/Dashboard';


function App() {
  const {isLoggedIn} = useContext(LoginContext);
  console.log(isLoggedIn);
  return (    
      <div>
      
        <BrowserRouter>
          {isLoggedIn ? <Main/> : <Login/> }
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard/> : <Login />}/>
          <Route path="/contact" element ={ isLoggedIn ? <Contact/> : <Login/>}/> 
          <Route path="/search" element ={ isLoggedIn ? <Search/> : <Login/>}/>       
        </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;