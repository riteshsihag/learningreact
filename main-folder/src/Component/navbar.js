import { Component } from 'react';
class Navbar extends Component {

    render() {

        return (
            <div className='nav'>
                <div className='logo-container'>
                    <img className='logo' src='https://assets.ccbp.in/frontend/react-js/wave-logo-img.png' />
                    <h1>Wave</h1>
                </div>
               <div className='bar'>
                <h2>Home</h2>
                <h2 className='about'>About</h2>
                <h2>Contact</h2>
               </div>
            </div>
        )
    }
}
export default Navbar;