import React,{Component} from 'react';
import './PatientForm.css';
import patient from './patient.png';
class PatientForm extends Component{
  constructor(props){
    super(props)
    this.state={
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
      password:'',
      Name:'',
      Relation:'',
      Contact:'',
      EmergencyCNIC:'',
      EmergencyEmail:'',
      EmergencyAddress:'',
      HMR:'',
      Operation:''
    }
  }
  onfirstnameChange=(event)=>{
    this.setState({firstname: event.target.value});
  }
  onlastnameChange=(event)=>{
    this.setState({lastname: event.target.value});
  }
  onbirthdayChange=(event)=>{
    this.setState({birthday: event.target.value});
  }
  onageChange=(event)=>{
    this.setState({age: event.target.value});
  }
  ongenderChange=(event)=>{
    this.setState({gender: event.target.value});
  }
  onphonenumberChange=(event)=>{
    this.setState({phonenumber: event.target.value});
  }
  oncnicChange=(event)=>{
    this.setState({cnic:event.target.value});
  }
  onaddressChange=(event)=>{
    this.setState({address: event.target.value});
  }
  oncityChange=(event)=>{
    this.setState({city: event.target.value});
  }
  onprovinceChange=(event)=>{
    this.setState({province: event.target.value});
  }
  onpostalzipChange=(event)=>{
    this.setState({postalzip: event.target.value});
  }
  onemailChange=(event)=>{
    this.setState({email: event.target.value});
  }
  onpasswordChange=(event)=>{
    this.setState({password: event.target.value});
  }
   onNameChange=(event)=>{
    this.setState({Name: event.target.value});
  }
   onRelationChange=(event)=>{
    this.setState({Relation: event.target.value});
  }
   onContactChange=(event)=>{
    this.setState({Contact: event.target.value});
  }
   onEmergencyCNICChange=(event)=>{
    this.setState({EmergencyCNIC: event.target.value});
  }
   onEmergencyEmailChange=(event)=>{
    this.setState({EmergencyEmail: event.target.value});
  }
   onEmergencyAddressChange=(event)=>{
    this.setState({EmergencyAddress: event.target.value});
  }
   onHMRChange=(event)=>{
    this.setState({HMR: event.target.value});
  }
   onOperationChange=(event)=>{
    this.setState({Operation: event.target.value});
  }
  onSubmitSignUp=()=>{
    fetch('http://localhost:3000/patient_register', {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        birthday:this.state.birthday,
        age:this.state.age,
        gender:this.state.gender,
        phonenumber:this.state.phonenumber,
        cnic:this.state.cnic,
        address:this.state.address,
        city:this.state.city,
        province:this.state.province,
        postalzip:this.state.postalzip,
        email:this.state.email,
        password:this.state.password,
        Name:this.state.Name,
        Relation:this.state.Relation,
        Contact:this.state.Contact,
        EmergencyCNIC:this.state.EmergencyCNIC,
        EmergencyEmail:this.state.EmergencyEmail,
        EmergencyAddress:this.state.EmergencyAddress,
        HMR:this.state.HMR,
        Operation:this.state.Operation     
      })
    })
        .then(res=>res.json())
        .then(user=>{
          if (user.id){
            console.log(this.state.cnic)
            this.props.loadPatient(user)
            this.props.onRouteChange('PatientPage')
          }
        })
 }
  render(){
    return(
      <div className="Patient_form">
        <h1 className='underline white-80 mt0 pt4 tc'>Patient Registration Form</h1>
        <div className='flex flex-wrap justify-center ma3 mb0 pb4'>
          <div className='flex items-center'>
            <div><img src={patient} alt='img' height='400' width='400'/></div>
          </div>
          <article className="ma3 shadow-3 br3 ba b--white-40 mv4 w-100 w-50-m w-25-l mw6 center">
            <article className="pa4 white-80 tl">
                <p className='f3 tl underline'>Patient Information</p>
                <form accept-charset="utf-8">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="ph0 mh0 fw6 clip white-80">Sign Up</legend>
                    <div className='flex'>
                      <div className="mt3">
                        <label className="db fw4 lh-copy f6" for="firstname">First Name</label>
                        <input onChange={this.onfirstnameChange} className="mr2 pa2 input-reset white ba b--white-40 bg-white-20 w-100 measure" type="text" name="firstname"  id="firstname"/>
                      </div>
                      <div className=" mt3 ml1">
                        <label className="db fw4 lh-copy f6" for="lastname">Last Name</label>
                        <input onChange={this.onlastnameChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="text" name="lastname"  id="lastname"/>
                      </div>
                    </div>
                    <div className="mt3">
                      <label className="db fw4 lh-copy f6" for="birthday">Birthday</label>
                      <input onChange={this.onbirthdayChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="date" name="birthday"  id="birthday"/>
                    </div>
                    <div className="mt3">
                      <label className="db fw4 lh-copy f6" for="age">Age</label>
                      <input onChange={this.onageChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="number" name="age"  id="age"/>
                    </div>
                     <div className='flex'>
                      <div className="mt3">
                        <label className="db fw4 lh-copy f6" for="gender">Gender:</label>
                      </div>
                      <div className=" mt3 ml2">
                        <label className="db fw4 lh-copy f6" for="male">Male<input onChange={this.ongenderChange} className="mr2 ml2 mt1 pa2 pt1 bg-transparent" type="radio" name="male"  id="male"/></label>
                      </div>
                      <div className="mt3">
                        <label className="db fw4 lh-copy f6" for="female">Female<input onChange={this.ongenderChange} className="mr2 ml2 mt1 pt1 pa2 bg-transparent" type="radio" name="female"  id="female"/></label>
                      </div>
                    </div>
                    <div className="mt3">
                      <label className="db fw4 lh-copy f6" for="phonenumber">Phone Number</label>
                      <input onChange={this.onphonenumberChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="tel" name="phonenumber"  id="phonenumber"/>
                    </div>
                     <div className="mt3">
                      <label className="db fw4 lh-copy f6" for="cnic">CNIC</label>
                      <input onChange={this.oncnicChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="number" name="cnic"  id="cnic"/>
                    </div>
                    <div className="mt3">
                      <label className="db fw4 lh-copy f6" for="address">Address</label>
                      <input onChange={this.onaddressChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="text" name="address"  id="address"/>
                    </div>
                    <div className='flex'>
                      <div className="mt3">
                        <label className="db fw4 lh-copy f6" for="city">city</label>
                        <input onChange={this.oncityChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="text" name="city"  id="city"/>
                      </div>
                      <div className="mt3 ml1">
                        <label className="db fw4 lh-copy f6" for="province">State / province</label>
                        <input onChange={this.onprovinceChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="text" name="province"  id="province"/>
                      </div>
                    </div>
                    <div className="mt3">
                      <label className="db fw4 lh-copy f6" for="postalzip">Postal/Zip Code</label>
                      <input onChange={this.onpostalzipChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="number" name="postalzip"  id="postalzip"/>
                    </div>
                    <div className="mt3">
                      <label className="db fw4 lh-copy f6" for="email">Email address</label>
                      <input onChange={this.onemailChange} className="pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="email" name="email"  id="email"/>
                    </div>
                    <div className="mt3">
                      <label className="db fw4 lh-copy f6" for="password">Password</label>
                      <input onChange={this.onpasswordChange} className="pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="password" name="password"  id="password"/>
                    </div>
                  </fieldset>
                </form>

            </article>
          </article>
          <article className="ma3 shadow-3 br3 ba b--white-40 mv4 w-100 w-50-m w-25-l mw6 center">
            <article className="pa4 white-80 tl">
              <p className='f3 underline tl'>Emergency Contact Information</p>
              <form accept-charset="utf-8">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                 {/* <div className='flex'>
                    <div className="mt3">
                      <label className="db fw4 lh-copy f6" for="FirstName">First Name</label>
                      <input onChange={this.onFirstNameChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="text" name="FirstName"  id="FirstName"/>
                    </div>
                    <div className=" mt3 ml1">
                      <label className="db fw4 lh-copy f6" for="LastName">Last Name</label>
                      <input onChange={this.onLastNameChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="text" name="LastName"  id="LastName"/>
                    </div>
                  </div>*/}
                  <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="Name">Name</label>
                  <input onChange={this.onNameChange} className="pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="text" name="Name"  id="Name"/>
                  </div>
                  <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="Relation">Relation</label>
                  <input onChange={this.onRelationChange} className="pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="text" name="Relation"  id="Relation"/>
                  </div>
                  <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="Contact">Contact Number</label>
                  <input onChange={this.onContactChange} className="pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="number" name="Contact"  id="Contact"/>
                  </div>
                  <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="EmergencyCNIC">CNIC</label>
                  <input onChange={this.onEmergencyCNICChange} className="pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="number" name="EmergencyCNIC"  id="EmergencyCNIC"/>
                  </div>
                  <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="EmergencyEmail">Email address</label>
                  <input onChange={this.onEmergencyEmailChange} className="pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="email" name="EmergencyEmail"  id="EmergencyEmail"/>
                  </div>
                  <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="EmergencyAddress">Address</label>
                  <input onChange={this.onEmergencyAddressChange} className="pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="text" name="EmergencyAddress"  id="EmergencyAddress"/>
                  </div> 
                  <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="HMR">Health and Medical History</label>
                  <input onChange={this.onHMRChange} className="pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="text" name="HMR"  id="HMR"/>
                  </div>
                  <div className='flex flex-column'>
                    <div className="mt3">
                      <label className="db fw4 lh-copy f6" for="Operation">Any Operation</label>
                      <input onChange={this.onOperationChange} className="mr2 pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" type="text" name="Operation"  id="Operation"/>
                    </div>
                  </div>
                </fieldset>
                <div onClick={this.onSubmitSignUp} className="b white-70 ph3 pv2 input-reset ba b--white-40 bg-white-20 grow pointer f6 dib"> 
                 Sign up
                </div>
              </form>
            </article>
          </article>
        </div>
      </div>
    )
  }
}
export default PatientForm;
