import { Component } from 'react';
import Coverage from '../Coverage/coverage';
import Gender from '../Gender/gender';
import Age from '../Age/age';

class DashBoard extends Component {
 state = {
    vaccineData: [],
    ageData: [],
    genderData: []
 }
 componentDidMount(){
    this.getData()
 }
 getData= async ()=>{
    const url = "https://apis.ccbp.in/covid-vaccination-data"
    const options = {
        method: 'GET'
    }
    const response = await fetch(url,options)
    const data = await response.json()
    console.log(response)
    if(response.ok===true){
        const updatedVaccineData = data.last_7_days_vaccination.map((item=>({
            vaccineDate : item.vaccine_date,
            dose1: item.dose_1,
            dose2: item.dose_2
        })))
        const updatedAgeData = data.vaccination_by_age
        const updatedGenderData = data.vaccination_by_gender
        this.setState({
           vaccineData: updatedVaccineData,
           ageData: updatedAgeData,
           genderData: updatedGenderData
        })
    }
 }
  render() {
    const {vaccineData,ageData,genderData} = this.state
    return (
      <div className='dashboard'>
        <div className='coverage'>
            <h2>Vaccination Coverage</h2>
        <Coverage vaccineData={vaccineData}/>
        </div>
        <div className='coverage'>
            <h2>Vaccination by gender</h2>
        <Gender genderData={genderData}/>
        </div>
        <div className='coverage'>
            <h2>Vaccination by age</h2>
        <Age ageData={ageData}/>
        </div>
      </div>
    );
  }
}

export default DashBoard;
