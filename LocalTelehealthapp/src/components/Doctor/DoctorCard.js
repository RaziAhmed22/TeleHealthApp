import React from 'react';
import './DoctorCard';
const DoctorCard=({id,name,email,speciality,onClickSchedule})=>{
		return(
			<div className='tc dib br3 shadow-5 pa3 ma2 white DoctorCard'> 
				<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<p>{speciality}</p>
				<button className='f5 no-underline grow v-mid br4 white ba b--white ph3 pv2 mb3 mr2 pointer bg-transparent'>Schedule</button>
				</div>
			</div>
		);
	}
export default DoctorCard;