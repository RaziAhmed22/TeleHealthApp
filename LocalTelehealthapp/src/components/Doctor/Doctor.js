import React, {Component} from 'react';
import DoctorCardlist from './DoctorCardlist';
// import SearchBox from './SearchBox';
// import Scroll from './Scroll';
import './Doctor.css';

class Doctor extends Component {
	constructor(){
		super()
		this.state={
			doctor:[],
			searchfield:'',
			toggle:false
		}
	}
	componentDidMount(){
		fetch('http://localhost:3000/doctors')
		.then(response=> response.json())
		.then(user=>{
			this.setState({doctor:user})
		})

	}
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value});
	}
	// onClickCard=(data)=>{
	// 	this.setState({toggle:data})
	// 	console.log(data)
	// }
	// onUserClick=(data)=>{
 //    this.setState({toggle:data})
 //    console.log(data)
 //  } 
	render(){
		const filteredDoctors= this.state.doctor.filter(doctor=>{
			return doctor.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if (this.state.doctor.length===0){
			return<h1>Loading</h1>
		}
		else{
			return(
				<div className='tc Doctor pa2'>
					<h1 className="f1 white">Doctors</h1>
					{/*<SearchBox searchChange={this.onSearchChange}/>
				 	<Scroll>
				 	<DoctorCardlist doctor={filteredDoctors}/>
				 	</Scroll>*/}
				 	<DoctorCardlist doctor={filteredDoctors}/>

			 	</div>
			);
		}
	}
}
export default Doctor;