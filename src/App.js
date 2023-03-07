import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import './component/css/style.css';
import Login from './component/Login';
import DashBoard from './component/DashBoard';
import Uploads from './component/Uploads';
import Tournaments from './component/Tournaments';
import Messages from './component/Messages';

function App() {
    return (
        <>
           <DashBoard/>
        </>
    );
}

export default App;
