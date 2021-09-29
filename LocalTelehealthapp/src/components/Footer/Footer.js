import React from 'react';
import './Footer.css';
import RAWN2 from './RAWN2.png';
const Footer =()=>{
  return(
      <div className="Page_footer">
        <footer className="pv4 ph3 ph5-m ph6-l white flex justify-between flex-wrap center">
          <div className="flex flex-column items-start justify-start flex-wrap">
            <div className=" "><img src={RAWN2} alt="Logo" height="60" width="200"/></div>
            <div className="mb4 mb0-ns w-100 w-50-l fr">
              <a className="white f3 tl link dim dib pv3 mt2 " href="mailto:hello@impossible.com" >
                rawntelehealth@gmail.com
              </a>
            </div>
            <div className="mt2 mb4 mb0-ns fl w-100 w-50-l" >
              <p className="f4 fw6 mb2 f6 mt0">
                Sign up for our newsletter.
              </p>
              <div className="flex">
                <input placeholder="Email Address" className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"/>
                <input type="submit" className="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray pointer hover"/>
              </div>
            </div>
          </div>
          <div className="flex flex-column items-center justify-center pointer flex-wrap center mb4">
            <div className="ma2 f3 dib ph2 link white dim">Tools</div>
            <div className="ma2 f3 dib ph2 link white dim">FAQs</div>
            <div className="ma2 f3 dib ph2 link white dim">About Us</div>
            <div className="ma2 f3 dib ph2 link white dim">Career</div>
          </div>
          <div className="flex flex-column items-center justify-center flex-wrap trs">
            <div className="flex flex-wrap">
              <div className="link dim white dib h2 w2 br-100 mr3 pointer" title="">
                <svg data-icon="facebook" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
                  <title>facebook icon</title>
                  <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
                </svg>
              </div>
              <div className="link dim white dib h2 w2 br-100 mr3 pointer" title="">
                <svg data-icon="twitter" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
                  <title>twitter icon</title>
                  <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
                </svg>
              </div>
              <div className="link dim white dib br-100 h2 w2 mr3 pointer " title="">
                <svg data-icon="github" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
                  <title>github icon</title>
                  <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
                </svg>
              </div>
              <div className="link dim white dib br-100 h2 w2 mr3 pointer" title="">
                <svg data-icon="dribbble" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
                  <title>dribbble icon</title>
                  <path d="M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M5 11.5 A12 12 0 0 1 11 5 A46 46 0 0 1 13.5 9.25 A46 46 0 0 1 5 11.5 M15 4 A12 12 0 0 1 21.5 5.25 A46 46 0 0 1 17 7.75 A50 50 0 0 0 15 4 M4 16 A50 50 0 0 0 15 13 A46 46 0 0 1 16 15.5 A26 26 0 0 0 6 22.5 A12 12 0 0 1 4 16 M18.5 11.5 A50 50 0 0 0 25 8 A12 12 0 0 1 28 13.75 A26 26 0 0 0 19.75 14.5 A50 50 0 0 0 18.5 11.5 M17 19.5 A46 46 0 0 1 18 28 A12 12 0 0 1 8.75 25.5 A22 22 0 0 1 17 19.5 M20.75 18.25 A22 22 0 0 1 28 17.75 A12 12 0 0 1 22 26.5 A50 50 0 0 0 20.75 18.25"></path>
                </svg>
              </div>
            </div>        
            <small className="mt3 f6 db tc">© 2016 <b className="ttu">SOME COMPANY Inc</b>., All Rights Reserved</small>
            <div className="tc mt3">
              <div title="Language" className="f6 dib ph2 link white dim pointer">Language</div>
              <div title="Terms" className="f6 dib ph2 link white dim pointer">Terms of Use</div>
              <div title="Privacy" className="f6 dib ph2 link white dim pointer">Privacy</div>
            </div>
          </div>
        </footer>
      </div>
    )
}
export default Footer;