import React,{Component} from 'react';
import './PatientProfile.css';
class PatientProfile extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
    const {firstname,lastname,email,birthday,age,phonenumber,city,province}=this.props
    return(
         <div className="PatientProfile tc flex justify-center flex-wrap items-center flex-column">
            <div className="Patient white ma3 pa3 tl bg-white b--white-40 w-50-m w-25-l shadow-3 br3 ba">
             <h1 className="tc">Patient Profile</h1>
             <p>{`First Name: ${firstname}`}</p>
             <p>{`Last Name: ${lastname}`}</p>
             <p>{`Email: ${email}`}</p>
             <p>{`Birthday: ${birthday}`}</p>
             <p>{`Age: ${age}`}</p>
             <p>{`Phone Number: ${phonenumber}`}</p>
             <p>{`City: ${city}`}</p>
             <p>{`State/Province: ${province}`}</p>
             <form action="http://localhost:3000/patientupload" enctype="multipart/form-data" method="POST"> 
               <input type="file" name="patientfile"/>
               <input type="submit" value="Upload a file"/>
             </form>
            </div>
         </div>
      )
    }
}


export default PatientProfile;