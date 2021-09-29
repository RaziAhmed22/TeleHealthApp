import React from 'react';
import './DoctorProfile.css';

const DoctorProfile=({name,speciality,email,contact})=>{
    return(
        <div className="DoctorProfile pa2">
            <div className="DoctorProfile white ma3 pa3 center bg-white b--white-40 w-50-m w-25-l shadow-3 br3 ba">
             <h1 className="tc">Doctor Profile</h1>
             <p className="tc">{`Name: ${name}`}</p>
             <p className="tc">{`Speciality: ${speciality}`}</p>
             <p className="tc">{`Email: ${email}`}</p>
             <p className="tc">{`Contact No.: ${contact}`}</p>
            </div>
        </div>
    )
}
export default DoctorProfile;