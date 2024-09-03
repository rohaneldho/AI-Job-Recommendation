import './App.css';
import { Routes, Route } from 'react-router-dom';
import Firstpagecontent from './Pages/FirstPage.js'; 
import Login from './Pages/login.js';
import Signup from './Pages/signup.js';
import Dashboard from './Pages/dashboard.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Firstpagecontent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
