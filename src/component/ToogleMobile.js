import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownList() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="btn btn-sm px-3 font-size-24 d-lg-none header-item waves-effect waves-light">

      <i className="mdi mdi-menu"></i>
      </Dropdown.Toggle>


      <Dropdown.Menu className="mobile-menu">
        <Dropdown.Item href="#/action-1">USERS ONLINE: 200</Dropdown.Item>
        <Dropdown.Item href="#/action-2">TOURNAMENTS LIVE: 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">UNREAD MESSAGES:-</Dropdown.Item>
        <Dropdown.Item href="#/action-4"> SUPPORT (2)</Dropdown.Item>
        <Dropdown.Item href="#/action-5">BUG REPORTS (5)</Dropdown.Item>
        <Dropdown.Item href="#/action-6">CHEAT REPORTS (2)</Dropdown.Item>
        <Dropdown.Item href="#/action-7">FEEDBACK (4)</Dropdown.Item>
        <Dropdown.Item href="#/action-8">ID VERIFICATION (3)</Dropdown.Item>
        <Dropdown.Item href="#/action-9">WITHDRAW REQS (4)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownList;