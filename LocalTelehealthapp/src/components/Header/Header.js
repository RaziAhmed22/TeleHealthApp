import React from 'react';
import './Header.css';
const Header = ({onRouteChange,onUserClick})=>{
  return(
      <div className="Page_header bg-black-80 pt4 pl5 pr5 pb6 center">
        <div className="tc-l mt4 mt5-m mt6-l ph3 center">
          <h1 className="f1 f1-l fw2 white-90 mb0 lh-title tc">RAWN'S TELEHEALTH PORTAL</h1>
          <h2 className="fw1 f3 white-80 mt3 mb4 tc">YOUR HEALTH IS OUR PRIORITY</h2>
          <div className="flex justify-center ">
            <div 
              onClick={
                ()=>{
                  onRouteChange('DoctorSignIn');
                  onUserClick('Doctor');
                }
              }  
              className="f4 no-underline grow v-mid br4 white ba b--white ph3 pv2 mb3 mr2 pointer">
              Doctor
            </div>
            <div 
              onClick={
                ()=>{
                  onRouteChange('PatientSignIn');
                  onUserClick('Patient');
                  }
                } 
              className=" f4 no-underline grow v-top br4 white ba b--white ph3 pv2 mb3 pointer" >
              Patient
            </div>
          </div>
        </div>
      </div>
    )
}
export default Header;