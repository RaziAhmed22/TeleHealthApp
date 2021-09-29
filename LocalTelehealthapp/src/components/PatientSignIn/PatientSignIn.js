import React,{Component} from 'react';
import './PatientSignIn.css';
import SignIn from './SignIn.png';
class PatientSignIn extends Component{
  constructor(props){
    super(props);
    this.state={
      signInEmail: '',
      signInPassword: ''
    }
  }
  onEmailChange=(event)=>{
    this.setState({signInEmail: event.target.value});
  }
  onPasswordChange=(event)=>{
    this.setState({signInPassword: event.target.value});
  }
  onSubmitSignIn=()=>{
    fetch('http://localhost:3000/patient_signin', {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.signInPassword
      })
    })
        .then(response=>response.json())
        .then(user=>{
          if (user.id){
            this.props.loadPatient(user)
            this.props.onRouteChange('PatientPage');
          } 
        })
  }
  render(){
    const{onRouteChange}=this.props;
    return(
      <div className="Patient_SignIn white-80 flex justify-center items-center flex-wrap pt4 pb4">
        <div className="center"><img src={SignIn} alt="patient" height='400' width='400'/></div>
        <article className="shadow-3 br3 ba  b--white-40 mv4 w-100 w-50-m w-25-l mw6 center">
          <main className="pa4 white-80">
            <form className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 underline">PATIENT</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                  <input onChange={this.onEmailChange} className="pa2 input-reset ba b--white-40 bg-white-20  hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" for="password">Password</label>
                  <input onChange={this.onPasswordChange} className="b pa2 input-reset ba b--white-40 bg-white-20  hover-white w-100" type="password" name="password"  id="password"/>
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
              </fieldset>
              <div onClick={this.onSubmitSignIn} className="b white-70 ph3 pv2 input-reset ba b--white-40 bg-white-20 grow pointer f6 dib"> 
                Sign in
              </div>
              <div className="lh-copy mt3">
                <div onClick={()=>onRouteChange('PatientForm')} className="f6 link dim white-80 db pointer">Sign up</div>
                <div className="f6 link dim white-80 db">Forgot your password?</div>
              </div>
            </form>
          </main>
        </article>
      </div>
    )
  }
}
// const PatientSignIn = ({onRouteChange})=>{
//   return(
//       <div className="Patient_SignIn white-80 flex justify-center items-center flex-wrap pt4 pb4">
//         <div className="center"><img src={SignIn} alt="patient" height='400' width='400'/></div>
//         <article className="shadow-3 br3 ba  b--white-40 mv4 w-100 w-50-m w-25-l mw6 center">
//           <main className="pa4 white-80">
//             <form className="measure center">
//               <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//                 <legend className="f4 fw6 ph0 mh0 underline">PATIENT</legend>
//                 <div className="mt3">
//                   <label className="db fw6 lh-copy f6" for="email-address">Email</label>
//                   <input onChange={this.onEmailChange} className="pa2 input-reset ba b--white-40 bg-white-20  hover-white w-100" type="email" name="email-address"  id="email-address"/>
//                 </div>
//                 <div className="mv3">
//                   <label className="db fw6 lh-copy f6" for="password">Password</label>
//                   <input onChange={this.onPasswordChange} className="b pa2 input-reset ba b--white-40 bg-white-20  hover-white w-100" type="password" name="password"  id="password"/>
//                 </div>
//                 <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
//               </fieldset>
//               <div className="">
//                 <input onClick={this.onSubmitSignIn} className="b white-70 ph3 pv2 input-reset ba b--white-40 bg-white-20 grow pointer f6 dib" type="submit" value="Sign in"/>
//               </div>
//               <div className="lh-copy mt3">
//                 <div onClick={()=>onRouteChange('PatientForm')} className="f6 link dim white-80 db pointer">Sign up</div>
//                 <div className="f6 link dim white-80 db">Forgot your password?</div>
//               </div>
//             </form>
//           </main>
//         </article>
//       </div>
    // )
// }
export default PatientSignIn;