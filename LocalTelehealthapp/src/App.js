import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Navigation from './components/Navigation/Navigation.js';
import Footer from './components/Footer/Footer.js';
import DoctorForm from './components/DoctorForm/DoctorForm.js';
import DoctorPage from './components/DoctorPage/DoctorPage.js';
import DoctorSignIn from './components/DoctorSignIn/DoctorSignIn.js';
import PatientPage from './components/PatientPage/PatientPage.js';
import PatientSignIn from './components/PatientSignIn/PatientSignIn.js';
import PatientForm from './components/PatientForm/PatientForm.js';
import Doctor from './components/Doctor/Doctor.js';
import PatientProfile from './components/PatientProfile/PatientProfile.js';
import ChatApp from './components/ChatApp/ChatApp.js';
import PatientVitals from './components/PatientVitals/PatientVitals.js';
import PatientNavigationBar from './components/PatientNavigationBar/PatientNavigationBar.js';
import DoctorNavigationBar from './components/DoctorNavigationBar/DoctorNavigationBar.js';
import DoctorProfile from './components/DoctorProfile/DoctorProfile.js';
import BootstrapNav from './components/BootstrapNav/BootstrapNav.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      person:'',
      route:'home',
      user:{
        id:'',
        name:'',
        speciality:'',
        contact:'',
        email:'',
        MRN:'',
        joined:''
      },
      patient_user:{
        id:'',
        firstname:'',
        lastname:'',
        birthday:'',
        age:'',
        gender:'',
        phonenumber:'',
        cnic:'',
        address:'',
        city:'',
        province:'',
        postalzip:'',
        email:'',
        Name:'',
        Relation:'',
        Contact:'',
        EmergencyCNIC:'',
        EmergencyEmail:'',
        EmergencyAddress:'',
        HMR:'',
        Operation:''
      },
    }
  }
  onUserClick=(person)=>{
    this.setState({person:person})
  } 
  onRouteChange =(route)=>{
    this.setState({route:route});
  }
  loadUser=(data)=>{
    this.setState({user:{
        id:data.id,
        name:data.name,
        speciality:data.speciality,
        contact:data.contact,
        email:data.email,
        MRN:data.mrn,
        joined:data.joined
    }})
  }
  loadPatient=(data)=>{
    this.setState({patient_user:{
        id:data.id,
        firstname:data.firstname,
        lastname:data.lastname,
        birthday:data.birthday,
        age:data.age,
        gender:data.gender,
        phonenumber:data.phonenumber,
        cnic:data.cnic,
        address:data.address,
        city:data.city,
        province:data.province,
        postalzip:data.postalzip,
        email:data.email,
        joined:data.joined,
        Name:data.Name,
        Relation:data.Relation,
        Contact:data.Contact,
        EmergencyCNIC:data.EmergencyCNIC,
        EmergencyEmail:data.EmergencyEmail,
        EmergencyAddress:data.EmergencyAddress,
        HMR:data.HMR,
        Operation:data.Operation
    }
  })
  }  
  loadData=(data)=>{
    this.setState({data:data})
  }
  render(){
    if(this.state.route==='home'){
      return (
        <div>
          {/*<Navigation onRouteChange={this.onRouteChange}/>*/}
          <BootstrapNav onRouteChange={this.onRouteChange}/>
          <Header onUserClick={this.onUserClick} onRouteChange={this.onRouteChange}/>
          <Footer/>
          <BootstrapNav/>
        </div>
      )
    }else if (this.state.person==='Doctor'){
      return(
        <div>
          {
            this.state.route==='DoctorSignIn'
            ? <div>
                <Navigation onRouteChange={this.onRouteChange}/>
                <DoctorSignIn data={this.state.data} loadUser={this.loadUser} onUserClick={this.onUserClick} onRouteChange={this.onRouteChange}/>
                <Footer/>
              </div>
            :(
              this.state.route==='DoctorPage'
              ? <div>
                  <DoctorNavigationBar onRouteChange={this.onRouteChange}/>
                  <DoctorPage filename={this.state.fileName} name={this.state.user.name} onRouteChange={this.onRouteChange}/>
                  <Footer/>
                </div>
              :( 
                this.state.route==='DoctorForm'
                ? <div>
                    <Navigation onRouteChange={this.onRouteChange}/>
                    <DoctorForm loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                    <Footer/>
                  </div>
                :(
                  this.state.route==='Message'
                  ? <div>
                      <DoctorNavigationBar onRouteChange={this.onRouteChange}/>  
                      <ChatApp name={this.state.user.name}/>
                      <Footer/>
                    </div>
                  : (
                    this.state.route==='PatientVitals'
                    ? <div>
                        <DoctorNavigationBar onRouteChange={this.onRouteChange}/>
                        <PatientVitals/>
                        <Footer/>
                      </div>
                    : <div>
                        <DoctorNavigationBar onRouteChange={this.onRouteChange}/>
                        <DoctorProfile 
                          name={this.state.user.name} 
                          speciality={this.state.user.speciality} 
                          email={this.state.user.email}
                          contact={this.state.user.contact}/>
                        <Footer/>
                      </div>
                    )
                  )
                )
              )
          }
        </div>
        )
      }else if (this.state.person==='Patient'){
        return(
          <div>
            {
              this.state.route==='PatientSignIn'
              ? <div>
                  <Navigation onRouteChange={this.onRouteChange}/>
                  <PatientSignIn loadPatient={this.loadPatient} onUserClick={this.onUserClick} onRouteChange={this.onRouteChange}/>
                  <Footer/>
                </div>
              :(
                this.state.route==='PatientPage'
                ? <div>
                    <PatientNavigationBar  onRouteChange={this.onRouteChange}/>
                    <PatientPage firstname={this.state.patient_user.firstname}  onRouteChange={this.onRouteChange}/>
                    <Footer/>
                  </div>
                :(
                  this.state.route==='PatientForm'
                  ? <div>
                      <Navigation onRouteChange={this.onRouteChange}/>
                      <PatientForm loadPatient={this.loadPatient} onRouteChange={this.onRouteChange}/>
                      <Footer/>
                    </div>

                  :(
                    this.state.route==="Message"
                    ? <div>
                        <PatientNavigationBar  onRouteChange={this.onRouteChange}/>
                        <ChatApp name={this.state.patient_user.firstname}/>
                        <Footer/>
                      </div>
                    :( 
                      this.state.route==="Doctor"
                      ? <div>
                          <PatientNavigationBar  onRouteChange={this.onRouteChange}/>
                          <Doctor/>
                          <Footer/>
                        </div>
                      : <div>
                          <PatientNavigationBar  onRouteChange={this.onRouteChange}/>
                          <PatientProfile 
                            firstname={this.state.patient_user.firstname} 
                            lastname={this.state.patient_user.lastname} 
                            email={this.state.patient_user.email} 
                            birthday={this.state.patient_user.birthday} 
                            age={this.state.patient_user.age} 
                            phonenumber={this.state.patient_user.phonenumber} 
                            city={this.state.patient_user.city} 
                            province={this.state.patient_user.province}
                            />
                          <Footer/>
                        </div>
                      )
                    )
                  )
                )
            }
          </div>
        )
      }
  }
}
export default App;