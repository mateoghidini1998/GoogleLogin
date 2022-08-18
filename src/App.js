import './App.css';
import Login from './atoms/Login';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route element={<PrivateRoutes/>}>
      </Route> */}
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route  path="/" element={<Login/>} />    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
