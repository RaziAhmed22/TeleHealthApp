import React from 'react';
import './DoctorForm.css';
import Female from './Female.png';
import Male from './Male.png';
class DoctorForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      speciality:'',
      contact:'',
      email: '',
      MRN:'',
      password:''
    }
  }
  onNameChange=(event)=>{
    this.setState({name: event.target.value});
  }
  onSpecialityChange=(event)=>{
    this.setState({speciality: event.target.value});
  }
  onContactChange=(event)=>{
    this.setState({contact: event.target.value});
  }
  onEmailChange=(event)=>{
    this.setState({email: event.target.value});
  }
  onPasswordChange=(event)=>{
    this.setState({password: event.target.value});
  }
  onMRNChange=(event)=>{
    this.setState({MRN: event.target.value});
  }

  onSubmitSignUp=()=>{
    fetch('http://localhost:3000/doctor_register', {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name:this.state.name,
        speciality:this.state.speciality,
        contact:this.state.contact,
        email:this.state.email,
        password:this.state.password,
        MRN:this.state.MRN
      })
    })
        .then(response=>response.json())
        .then(user=>{
          if (user.id){
            this.props.loadUser(user)
            this.props.onRouteChange('DoctorPage');
          } 
        })
  }
render(){
  return(
    <div className="Doctor_form">
      <h1 className='underline white-80 mt0 pt4 tc'>Doctor Registration Form</h1>
      <div className="flex flex-wrap justify-center items-center pb4">
        <div><img src={Male} alt="Doctor" height='400' width='400'/></div>
        <article className="ma3 shadow-3 br3 ba  b--white-40 mv4 w-100 w-50-m w-25-l mw6 center">
          <article className="pa4 black-80 tl white-80">
            <form action="sign-up_submit" method="get" accept-charset="utf-8">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                 <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="name">Name</label>
                  <input className="b pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" 
                    type="text" 
                    name="name"  
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="speciality">Speciality</label>
                  <input className="b pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" 
                    type="text" 
                    name="speciality"  
                    id="speciality"
                    onChange={this.onSpecialityChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="contact">Contact Number</label>
                  <input className="b pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" 
                    type="number" 
                    name="contact"  
                    id="contact"
                    onChange={this.onContactChange}
                  />
                </div>
                <div class="mt3">
                  <label className="db fw4 lh-copy f6" for="email">Email address</label>
                  <input className="pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" 
                    type="email" 
                    name="email"  
                    id="email"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="password">Password</label>
                  <input className="b pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" 
                    type="password" 
                    name="password"  
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" for="MRN">Medical Registration Number</label>
                  <input className="b pa2 input-reset ba b--white-40 bg-white-20 w-100 measure" 
                    type="number" 
                    name="MRN"  
                    id="MRN"
                    onChange={this.onMRNChange}
                  />
                </div>
              </fieldset>
              <div onClick={this.onSubmitSignUp} className="b white-70 ph3 pv2 input-reset ba b--white-40 bg-white-20 grow pointer f6 dib"> 
                Sign up
              </div>
            </form>
          </article>
        </article>
        <div><img src={Female} alt="Doctor" height='400' width='400'/></div>
      </div>
    </div>
    )
}
}
export default DoctorForm;