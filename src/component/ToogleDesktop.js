import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownList() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="btn header-item waves-effect d-md-block d-none" id="dropdown-basic">

        <span className="mdi mdi-menu font-size-24"></span>

      </Dropdown.Toggle>


      <Dropdown.Menu>
        <Dropdown.Item href="/dashBoard">HOME</Dropdown.Item>
        <Dropdown.Item href="">SALES</Dropdown.Item>
        <Dropdown.Item href="">PLAYERS DB</Dropdown.Item>
        <Dropdown.Item href="/tournaments"> TOURN DB</Dropdown.Item>
        <Dropdown.Item href="">TOURN MGT</Dropdown.Item>
        <Dropdown.Item href="/uploads">UPLOADS</Dropdown.Item>
        <Dropdown.Item href="/messages">MESSAGES DB</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownList;