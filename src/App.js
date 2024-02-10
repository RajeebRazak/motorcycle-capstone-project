import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/Admin/AuthContext';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spare from './Components/Service/Spare';
import Service from './Components/Service/Service';
import Gallery from './Components/Service/Gallery';
import Cusform from './Components/Service/Form';
import Register from './Components/Login/Register';
import Cusprice from './Components/Service/Cusprice';
import Admin from './Components/Admin/Admin';
import PrivateRoute from './Components/Admin/Privateroute';
import Cart from './Components/Service/Cart';
import Contact from './Components/contact/Contact';


function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spare" element={<Spare />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/service" element={<Service />} />
            <Route path="/form" element={<Cusform />} />
            <Route path="/register" element={<Register />} />
            <Route path="/price" element={<Cusprice />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
            <Route path="/contactus" element={<Contact />} />

          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
