import { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {

    render() {

        return (
            <div className='nav'>
                <div className='logo-container'>
                    <img className='logo' src='https://assets.ccbp.in/frontend/react-js/wave-logo-img.png' />
                    <h1>Wave</h1>
                </div>
               <div className='bar'>
                <h2>
                <Link to="/">Home</Link>
                    </h2>
                <h2 className='about'><Link to="/about">About</Link></h2>
                <h2><Link to="/contact">Contact</Link></h2>
               </div>
            </div>
        )
    }
}
export default Navbar;