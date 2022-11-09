import Popup from 'reactjs-popup'
import {AiFillCloseCircle} from 'react-icons/ai'
const ReactPopUp = () => (
 <div className="popup-container">
   <Popup
   modal
     trigger={
       <button className='popup-btn' type="button">
         Rules
       </button>
     }
     className='popup'
   >
    {close=>(
        <div>
            <AiFillCloseCircle  onClick={() => close()}/>
        <img className='popup-img' src='https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png '/>
     </div>
    )}
     
   </Popup>
 </div>
)
export default ReactPopUp