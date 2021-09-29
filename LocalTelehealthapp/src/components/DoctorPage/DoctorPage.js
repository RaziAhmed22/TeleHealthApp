import React from 'react';
import chat from './chat.png';
import phone from './phone.png';
import Video from './Video.png';
import message from './message.png';
import doctor1 from './doctor1.png';
import people from './people.png';
import consulting from './consulting.png';
import './DoctorPage.css'
const DoctorPage = ({onRouteChange,name,filename})=>{
  return(
    <div>
      <div className="Profile_Header br2 shadow-3">
        <div className="tc white f6 f5-ns pt4 pb5">
          <p>{`Hi ${name}, Welcome to RAWN's Telehealth Website!`}</p>

          <img src={consulting} alt="Telehealth" height="200" width="200"/>
        </div>
      </div> 
      <div className="flex flex-wrap justify-between pa5">
        <div className="ma3">
          <img src={people} alt="patient" height="300" width="300"/>
        </div>
        <div className=" ma2 shadow-3 tc">
          <p className="pa3 tc">Consult a doctor anytime.</p>
          <div className="flex justify-center pa3">
            <div className="link dim pointer mr3">
              <img src={message} alt="query"/>
              <p>Reply A Query</p>
            </div>
            <div onClick={()=>onRouteChange('Message')} className="link dim pointer mr3">
              <img src={chat} alt="chat"/>
              <p>Chat with Patient</p>
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
          <p className="tc">You Are Priority</p>
        </div>
        <div className="ma3">
          <img src={doctor1} alt="Doctor" height="300" width="300"/>
        </div>
      </div>
    </div>
    )
}
export default DoctorPage;