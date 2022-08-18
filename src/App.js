import './App.css';
import Login from './atoms/Login';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { LoginProvider } from './LoginContext';


function App() {

  
  

  return (
    <LoginProvider >
      <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={ <Dashboard/>}/>
        <Route  path="/" element={<Login /* setIsLoggedIn={setIsLoggedIn} *//>} />    
      </Routes>
      </BrowserRouter>
    </LoginProvider>
    
  );
}

export default App;