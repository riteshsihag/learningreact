import { Component } from "react";
import {withTranslation} from 'react-i18next'
import './dropdown.css'
class DropDown extends Component {
 
  render() {
    const lngs = {
      en:{name: "English"},
      hi:{name: "Hindi"}
    }
    return (
     <>
     <select className="dropdown" onClick={(e)=>this.props.i18n.changeLanguage(e.target.value)}>
      {Object.keys(lngs).map((eachlng)=>{
        return <option  key={eachlng} value={eachlng}>{lngs[eachlng].name}</option>
      })}
        </select>
     </>
    )
  }
}
export default withTranslation()(DropDown);