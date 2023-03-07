import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownList() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="btn header-item waves-effect d-md-block d-none" id="dropdown-basic">

        <span className="mdi mdi-menu font-size-24"></span>

      </Dropdown.Toggle>


      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">HOME</Dropdown.Item>
        <Dropdown.Item href="#/action-2">SALES</Dropdown.Item>
        <Dropdown.Item href="#/action-3">PLAYERS DB</Dropdown.Item>
        <Dropdown.Item href="#/action-4"> TOURN DB</Dropdown.Item>
        <Dropdown.Item href="#/action-5">TOURN MGT</Dropdown.Item>
        <Dropdown.Item href="#/action-6">UPLOADS</Dropdown.Item>
        <Dropdown.Item href="#/action-7">MESSAGES DB</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownList;