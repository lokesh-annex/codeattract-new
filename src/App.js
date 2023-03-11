import React from 'react';
import './component/css/style.css';
import Login from './component/Login';
import DashBoard from './component/DashBoard';
import Uploads from './component/Uploads';
import Tournaments from './component/Tournaments';
import Messages from './component/Messages';
import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { useQueryClient } from 'react-query'
import PrivateRoute from './PrivateRoute';
import PublicRoutes from './PublicRoutes';


function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <Routes>
      
        <Route element={<PrivateRoute />}>
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/uploads" element={<Uploads />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/messages" element={<Messages />} />
        </Route>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
        </Route>
        {/* <Route  path="/dashBoard" element={<DashBoard/>} />
        <Route  path="/uploads" element={<Uploads/>} />
        <Route  path="/tournaments" element={<Tournaments/>} />
        <Route  path="/messages" element={<Messages/>} />  */}
    </Routes>
    // </QueryClientProvider>
  );
}

export default App;
