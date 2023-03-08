import React from 'react';
import './component/css/style.css';
import Login from './component/Login';
import DashBoard from './component/DashBoard';
import Uploads from './component/Uploads';
import Tournaments from './component/Tournaments';
import Messages from './component/Messages';
import { Routes ,Route } from 'react-router-dom'; 


function App() {
    return (
    <Routes>
        <Route  path="/" element={ <Login />} />
        <Route  path="/dashBoard" element={<DashBoard/>} />
        <Route  path="/uploads" element={<Uploads/>} />
        <Route  path="/tournaments" element={<Tournaments/>} />
        <Route  path="/messages" element={<Messages/>} /> 
      </Routes>
    );
}

export default App;
