import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import RAWN2 from './RAWN2.png';

const BootstrapNav =({onRouteChange})=> {
  return (
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="pa3">
      <div className=" white-80 link dim pointer" ><img src={RAWN2} className="ml3 dib w6 h3" alt="Site Name"/></div>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="me-auto">
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav className="tc">
          <ReactBootStrap.Nav.Link eventKey={2} 
            onClick={()=>{onRouteChange('home')}}
            className="link dim white-80 f4 dib mr3 mr4-ns pointer grow-large" >
            Home
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2} className="link dim white-80 f4 dib mr3 mr4-ns pointer grow-large" >
            How It Works
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2} className="link dim white-80 f4 dib mr3 mr4-ns pointer grow-large" >
            About
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2} className="link dim white-80 f4 dib mr3 mr4-ns pointer grow-large" >
            Contact
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}

export default BootstrapNav;