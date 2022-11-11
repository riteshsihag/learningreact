import { CancelButton, ConfirmButton, LogoutButton } from "../Navbar/navbarStyle"
import Popup from 'reactjs-popup'
import { Component } from "react"
import ReactContext from '../../Context/reactContext';
import './popup.css'
import {FiLogOut} from 'react-icons/fi'
class LogoutPopUp extends Component {
    render(){
        const {onClickLogout} = this.props
        return(
            <ReactContext.Consumer>
            {value=>{
              const {isDarkModeOn} = value
              return(
            <div className="popup-container">
            <Popup
              modal
              trigger={
                <>
                <FiLogOut onClick={this.onClickLogout} className='logout-icon'/>
                  <LogoutButton darkMode={isDarkModeOn} onClick={this.onClickLogout} className='logout-btn'>Logout</LogoutButton>
                </>
                  
              }
              className={isDarkModeOn?"popup-dark popup":"popup"}
            >
            
              {close => (
                <>
                  <div>
                    <p className={isDarkModeOn?"p-dark p":"p"}>Are you sure you want to Logout?</p>
                  </div>
                  <div className="buttons">
                  <CancelButton darkMode={isDarkModeOn}  onClick={() => close()} className='logout-btn'>Cancel</CancelButton>
                  <ConfirmButton darkMode={isDarkModeOn} onClick={onClickLogout} className='logout-btn'>Confirm</ConfirmButton>
                  </div>
                 
                </>
              )}
            </Popup>
          </div>
           )
        }}
        </ReactContext.Consumer>
        )
    }
   
}
   export default LogoutPopUp