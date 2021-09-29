import React from 'react';
import './Navigation.css';
import RAWN2 from './RAWN2.png';
const Navigation = ({onRouteChange})=>{
  return(
       <nav className="w-100 border-box pa3 ph5-ns pointer flex flex-wrap justify-between">
          <div className=" white-80 link dim"  title="Home">
            <img src={RAWN2} className="dib w6 h3" alt="Site Name"/>
          </div>
          <div className="flex items-center flex-wrap">
          </div>
          <div className="flex items-center flex-wrap">
            <div onClick={()=>{onRouteChange('home')}} className="link dim white-80 f4 dib mr3 mr4-ns pointer grow-large"  title="About">Home</div>
            <div className="link dim white-80 f4 dib mr3 mr4-ns pointer grow-large"  title="About">How It Works</div>
            <div className="link dim white-80 f4 dib mr3 mr4-ns pointer grow-large"  title="Store">About</div>
            <div className="link dim white-80 f4 dib pointer grow-large"  title="Contact">Contact</div>
          </div>
        </nav>
    )
}
export default Navigation;