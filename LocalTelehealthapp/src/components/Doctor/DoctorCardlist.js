import React, {Component} from 'react';
import DoctorCard from './DoctorCard';
class DoctorCardlist extends Component{
	constructor(props){
		super(props)
		this.state={
			schedule:''
		}
	}

 	onClickSchedule=(sch)=>{
 		this.setState({schedule:sch})
 		if(sch){
 			
 		}
 	}
	render(){
		const {doctor}=this.props;
		return( 
			<div>
	           {doctor.map((user,index)=>{
					return (
					<DoctorCard 
						onClickSchedule={this.onClickSchedule}
						key={doctor[index].id} 
						id={doctor[index].id}
						name={doctor[index].name}
						email={doctor[index].email}
						speciality={doctor[index].speciality}
					/>
					);
					})
				}
	    	</div>
	    );
}
}
export default DoctorCardlist;