import React from 'react';
import RAWN2 from './RAWN2.png';
import './DoctorNavigationBar';
import * as ReactBootStrap from "react-bootstrap";
const DoctorNavigationBar = ({onRouteChange})=>{
  return(
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="pa3">
      <div className=" white-80 link dim pointer" ><img src={RAWN2} className="ml3 dib w6 h3" alt="Site Name"/></div>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="me-auto">
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav className="tc">
          <ReactBootStrap.Nav.Link eventKey={2} 
            onClick={()=>{onRouteChange('DoctorPage')}}
            className="link dim white-80 f4 dib mr3 mr4-ns pointer grow-large" >
            Home
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2} 
            onClick={()=>onRouteChange('PatientVitals')} 
            className="link dim white-80 f4 dib mr3 mr4-ns pointer grow-large" >
            Patient Vitals
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2}
            onClick={()=>onRouteChange('DoctorProfile')} 
            className="link dim white-80 f4 dib mr3 mr4-ns pointer grow-large" >
            Profile
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2}
            onClick={()=>onRouteChange('home')} 
            className="link dim white-80 f4 dib mr3 mr4-ns pointer grow-large" >
            Sign Out
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>

  )
}
export default DoctorNavigationBar;