import React, { useState } from 'react';
import Logo from './images/logo-light.png';

import ToogleDesktop from './ToogleDesktop';
import ToogleProfile from './ToogleProfile';
import ToogleNotification from './ToogleNotification';
import ToogleMobile from './ToogleMobile';

function Header() {
    return (
        <>

            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <a className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={Logo} height="22" alt="logo" />
                                </span>
                                <span className="logo-lg">
                                    <img src={Logo} height="22" alt="logo" />
                                </span>
                            </a>

                            <a className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={Logo} height="22" alt="logo" />
                                </span>
                                <span className="logo-lg">
                                    <img src={Logo} height="22" alt="logo" />
                                </span>
                            </a>
                        </div>
                        <ToogleDesktop/>
                        <ToogleMobile/>
                    </div>

                    <div className="search-wrap" id="search-wrap">
                        <div className="search-bar">
                            <input className="search-input form-control" placeholder="Search" />
                            <a href="#" className="close-search toggle-search" >
                                <i className="mdi mdi-close-circle"></i>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="dropdown d-none d-lg-inline-block">
                            <button type="button" className="btn header-item toggle-search noti-icon waves-effect" >
                                <i className="mdi mdi-magnify"></i>
                            </button>
                        </div>

                        <div className="dropdown d-none d-lg-inline-block ms-1">
                            <button type="button" className="btn header-item noti-icon waves-effect" >
                                <i className="mdi mdi-fullscreen"></i>
                            </button>
                        </div>

                        <div className="dropdown d-inline-block">
                           
                            <ToogleNotification/>
                          
                        </div>

                        <div className="dropdown d-inline-block">
                         
                            <ToogleProfile/>
                            <div className="dropdown-menu dropdown-menu-end" >

                                <a className="dropdown-item" href="#"></a>
                                <a className="dropdown-item d-block" href="#"></a>
                                <a className="dropdown-item text-danger" href="#"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="topnav">
                <div className="container-fluid">
                    <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
                        <div className="collapse navbar-collapse" id="topnav-menu-content">
                            <ul className="navbar-nav active">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">USERS ONLINE: 200</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">TOURNAMENTS LIVE: 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">UNREAD MESSAGES:-</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SUPPORT (2)</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">BUG REPORTS (5)</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CHEAT REPORTS (2)</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FEEDBACK (4)</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ID VERIFICATION (3)</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">WITHDRAW REQS (4)</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;