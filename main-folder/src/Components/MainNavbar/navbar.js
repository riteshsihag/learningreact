import { Component } from 'react';
import NavbarContext from '../../NavbarContext/navbarContext';
class Navbar extends Component {
    render() {
        return (
            <NavbarContext.Consumer >
                {(value) => { 
                    const {isContentActive, isLeftActive, isRightActive, changeContent,changeLeftNav,changeRightNav} = value
                return(
                <div className='navbar'>
                    <h1>Layout</h1>
                    <div className='checkbox'>
                    <span><input type={'checkbox'} checked={isContentActive} onChange={changeContent} />Content</span>
                     <span><input type={'checkbox'}  checked={isLeftActive} onChange={changeLeftNav} />Left Navbar</span>
                     <span><input type={'checkbox'}  checked={isRightActive} onChange={changeRightNav} />Right Navbar</span>
                    </div>   
                </div>
                )
                }}
            </NavbarContext.Consumer>
        )
    }
}

export default Navbar;
