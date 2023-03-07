import React, { useState } from 'react';
import Logo from './images/logo-light.png';
import Avtar from './images/avatar-7.jpg';

function Header() {
    const [toggle, setToggle] = useState(false)
    function toggleButton() {
        if (toggle) { }
        setToggle(!toggle)

    }
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
                        <div className="dropdown d-none d-md-block ms-2">
                            <button type="button" className="btn header-item waves-effect" >
                                <span className="mdi mdi-menu font-size-24"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" >

                                <a className="dropdown-item notify-item">
                                    <span className="align-middle"> HOME </span>
                                </a>


                                <a className="dropdown-item notify-item">
                                    <span className="align-middle"> SALES </span>
                                </a>


                                <a className="dropdown-item notify-item">
                                    <span className="align-middle"> PLAYERS DB </span>
                                </a>


                                <a className="dropdown-item notify-item">
                                    <span className="align-middle"> TOURN DB </span>
                                </a>


                                <a className="dropdown-item notify-item">
                                    <span className="align-middle"> TOURN MGT </span>
                                </a>

                                <a className="dropdown-item notify-item">
                                    <span className="align-middle"> UPLOADS </span>
                                </a>

                                <a className="dropdown-item notify-item">
                                    <span className="align-middle"> MESSAGES DB </span>
                                </a>
                            </div>
                        </div>
                        <button type="button" className="btn btn-sm px-3 font-size-24 d-lg-none header-item waves-effect waves-light" >
                            <i className="mdi mdi-menu"></i>
                        </button>
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
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown">
                                <i className="mdi mdi-bell-outline bx-tada"></i>
                                <span className="badge bg-danger rounded-pill">3</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0">Notifications</h6>
                                        </div>
                                        <div className="col-auto">
                                            <a href="#!" className="small"> View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-simplebar="init">
                                    <div className="simplebar-wrapper">
                                        <div className="simplebar-height-auto-observer-wrapper">
                                            <div className="simplebar-height-auto-observer"></div></div>
                                        <div className="simplebar-mask">
                                            <div className="simplebar-offset">
                                                <div className="simplebar-content-wrapper">
                                                    <div className="simplebar-content">
                                                        <a href="" className="text-reset notification-item">
                                                            <div className="media">
                                                                <div className="avatar-xs me-3">
                                                                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                                        <i className="mdi mdi-user text-white"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mt-0 mb-1">New User Signup</h6>
                                                                    <div className="font-size-13 text-muted">
                                                                        <p className="mb-1"></p>
                                                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="simplebar-placeholder"></div>
                                    </div>
                                    <div className="simplebar-track simplebar-horizontal">
                                        <div className="simplebar-scrollbar" ></div></div>
                                    <div className="simplebar-track simplebar-vertical" >
                                        <div className="simplebar-scrollbar"></div></div>
                                </div>
                                <div className="p-2 border-top">
                                    <a className="btn btn-sm btn-link font-size-14 w-100 text-center" >
                                        <i className="mdi mdi-arrow-right-circle me-1"></i> View More.. </a>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" >
                                <img className="rounded-circle header-profile-user" src={Avtar} alt="Header Avatar" />
                                <span className="d-none d-xl-inline-block ms-1">Avinash</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" >

                                <a className="dropdown-item" href="#"><i className="mdi mdi-account-circle-outline font-size-16 align-middle me-1"></i> Profile</a>
                                <a className="dropdown-item d-block" href="#"><i className="mdi mdi-cog-outline font-size-16 align-middle me-1"></i> Settings</a>
                                <a className="dropdown-item text-danger" href="#"><i className="mdi mdi-power font-size-16 align-middle me-1 text-danger"></i> Logout</a>
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