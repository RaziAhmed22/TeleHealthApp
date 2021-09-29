import React, {Component} from 'react';
import './PatientVitals.css';
class PatientVitals extends Component {
  constructor(){
    super()
    this.state={
      patientvitals:""
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/patientvitals')
    .then(response=> response.json())
    .then(user=>{
      this.setState({patientvitals:user})
    })
  }
  render(){
    if (this.state.patientvitals.length===0){
      return<h1>Loading</h1>
    }
    else{
      return(
        <div className="Result pa2">
          <div className='tc patientvitals white ma3 pa3 center bg-white b--white-40 w-50-m w-30-l shadow-3 br3 ba pa2'>
            <h1 className="f1 white">PatientVitals Report</h1>
            <p className=''>{this.state.patientvitals.img}</p>
          </div>
           {/* <div 
              onClick={this.setState({patientvitals:""})}
              className="f4 no-underline grow v-mid br4 white ba b--white ph3 pv2 mb3 mr2 pointer">Exit The Report</div>
            </div>*/}
        </div>
      );
    }
  }
}
export default PatientVitals;