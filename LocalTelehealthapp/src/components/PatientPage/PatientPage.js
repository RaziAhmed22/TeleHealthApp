import React from 'react';
import chat from './chat.png';
import phone from './phone.png';
import Video from './Video.png';
import message from './message.png';
import doctor1 from './doctor1.png';
import patient from './patient.png';
import consulting from './consulting.png';
import './PatientPage.css'
const PatientPage = ({onRouteChange,firstname})=>{
  return(
    <div>
      <div className="Profile_Header br2 shadow-3 tc">
        <div className="white f6 f5-ns pt4 pb5">
          <p>{`Hi ${firstname}, Welcome to RAWN's Telehealth Website!`}</p>
          <img src={consulting} alt="Telehealth" height="200" width="200"/>
        </div>
      </div> 
      <div className="flex flex-wrap justify-between pa5 ">
        <div className="ma3">
          <img src={patient} alt="patient" height="300" width="300"/>
        </div>
        <div className=" ma2 shadow-3 tc">
          <p className="pa3">Consult a doctor anytime.</p>
          <div className="flex justify-center pa3">
            <div className="link dim pointer mr3">
              <img src={message} alt="query"/>
              <p>Ask A Query</p>
            </div>
            <div className="link dim pointer mr3">
              <img onClick={()=>onRouteChange("Message")} src={chat} alt="chat"/>
              <p>Chat with Doctor</p>
            </div>
            <div className="link dim pointer mr3">
              <img src={phone} alt="phone" height="50" width="50"/>
              <p>Consult by Phone</p>
            </div>
            <div className="link dim pointer mr3">
              <img src={Video} alt="video"/>
              <p>Video chat</p>
            </div>
          </div>
          <p>You Are Priority</p>
        </div>
        <div className="ma3">
          <img src={doctor1} alt="Doctor" height="300" width="300"/>
        </div>
      </div>
    </div>
    )
}
export default PatientPage;