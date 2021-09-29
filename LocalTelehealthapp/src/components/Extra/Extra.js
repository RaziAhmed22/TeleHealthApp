import React from 'react';
import './CheckNav.css';
const CheckNav = ()=>{
  return(
      <div className="">
        <div class="wrapper">
          <ul>
            <li>home</li>
            <li>About</li>
            <li>Services
              <ul>
                <li>Marketing</li>
                <li>Design
                  <ul>
                    <li>Web</li>
                    <li>Graphics</li>
                    <li>Interior</li>
                  </ul>
                </li>
                <li>Branding</li>
              </ul>
            </li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          </div>

      </div>
    )
}
export default CheckNav;
// if (this.state.route==='home'){
          return(
          {/*{<div className="App">//}*/}

            {/*{this.state.route==='home'
            ? <div>
                <Navigation/>
                <Header onRouteChange={this.onRouteChange}/>
                <Footer/>
              </div>
            : (this.state.route==='DoctorSignIn'
              ? <div>
                  <Navigation/>
                  <DoctorSignIn onRouteChange={this.onRouteChange}/>
                  <Footer/>
                </div>
              : ( this.state.route==='DoctorForm'
                ?<DoctorForm loadUser={this.loadUser } onRouteChange={this.onRouteChange}/>
                :<DoctorPage onRouteChange={this.onRouteChange}/>
                )
              )
          }*/}
          {/*{</div>}*/}
        // );} if(this.state.route==='DoctorEntrance'){
        // return(
        //   <div className="App">
        //     <Navigation/>
        //     <DoctorEntrance onRouteChange={this.onRouteChange}/> 
        //     <Footer/> 
        //   </div>
        // );}if(this.state.route==='PatientEntrance'){
        // return(
        //   <div className="App">
        //     <Navigation/>
        //     <PatientEntrance onRouteChange={this.onRouteChange}/>
        //     <Footer/>
        //   </div>
        // );} if(this.state.route==='PatientForm'){
        //   return(
        //     <div className="App">
        //       <Navigation/>
        //       <PatientForm onRouteChange={this.onRouteChange}/>  
        //       <Footer/>
        //     </div>
        //   );} if(this.state.route==='DoctorForm'){
        //   return(
        //     <div className="App">
        //       <Navigation/>
        //       <DoctorForm onRouteChange={this.onRouteChange}/>
        //       <Footer/>
        //     </div>
        //   );}if(this.state.route==='PatientPage'){
        //   return(
        //     <div className="App">
        //       <PatientPage onRouteChange={this.onRouteChange}/>
        //     </div>
        //   );}if(this.state.route==='DoctorSignIn'){
        //   return(
        //     <div className="App">
        //       <Navigation/>
        //       <DoctorSignIn onRouteChange={this.onRouteChange}/>
        //       <Footer/>
        //     </div>
        //   );}if(this.state.route==='PatientSignIn'){
        //   return(
        //     <div className="App">
        //       <Navigation/>
        //       <PatientSignIn onRouteChange={this.onRouteChange}/>
        //       <Footer/>
        //     </div>
        //   );}if(this.state.route==='DoctorPage'){
        //   return(
        //     <div className="App">
        //       <DoctorPage onRouteChange={this.onRouteChange}/>
        //     </div>
        //   );}
      // );}
    // }
// }
//   fetch('http://localhost:3000/data', {
    //   method:'post',
    //   headers:{'Content-Type':'application/json'},
    //   body:JSON.stringify({
    //     file:this.state.file,
    //   }).then(res=>res.json())
    //     .then(data=>{
    //       this.props.loadData(data)
    //     })
    // })
export default App;
