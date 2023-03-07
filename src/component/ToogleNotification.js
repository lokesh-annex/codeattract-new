import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Avtar from './images/avatar-7.jpg';
function DropdownList() {
  return (
    <Dropdown>
      
      <Dropdown.Toggle  className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown">
      <i className="mdi mdi-bell-outline bx-tada"></i>
                                <span className="badge bg-danger rounded-pill">3</span>
                          
      </Dropdown.Toggle>

      
      <Dropdown.Menu className="dropdown-menu-lg dropdown-menu-end">
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
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownList;