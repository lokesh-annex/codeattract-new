import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Avtar from './images/avatar-7.jpg';
function DropdownList() {
  return (
    <Dropdown>
      
      <Dropdown.Toggle className="btn header-item waves-effect"  id="dropdown-basic">
      <img className="rounded-circle header-profile-user" src={Avtar} alt="Header Avatar" />
                                <span className="d-none d-xl-inline-block ms-1">Avinash</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                          
      </Dropdown.Toggle>

      
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><i className="mdi mdi-account-circle-outline font-size-16 align-middle me-1"></i> Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><i className="mdi mdi-cog-outline font-size-16 align-middle me-1"></i> Settings</Dropdown.Item>
        <Dropdown.Item href="/"><i className="mdi mdi-power font-size-16 align-middle me-1 text-danger"></i> Logout</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownList;