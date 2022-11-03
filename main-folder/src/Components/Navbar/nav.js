import { Component } from 'react';
import Popup from 'reactjs-popup'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <div className='nav-container'>
                <img className='nav-img' src='https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png ' />
                <div className='hamburger'>
                    <Popup
                        modal
                        trigger={
                            <GiHamburgerMenu
                                style={{ width: '40px', fontSize: "40px", margin: "25px", marginRight: "100px" }} />
                        }
                        className='popup'

                    >
                        {close => (
                            <div className='close'>
                                <AiOutlineClose style={{ position: "absolute", right: "100px", top: "25px", fontSize: "40px" }} onClick={() => close()} />
                                <div className='content'>
                                <p onClick={() => close()}><Link to="/">Home</Link></p>
                                <p onClick={() => close()}><Link to="/about">About</Link></p>
                                </div>
                               
                            </div>

                        )}

                    </Popup>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);
