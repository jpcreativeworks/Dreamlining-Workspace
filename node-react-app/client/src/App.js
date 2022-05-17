import logo from './logo.svg';
import './App.css';
import {BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
        <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
