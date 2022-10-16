import { Component } from 'react';
import './card.css';
class Navbar extends Component {

    render() {

        return (
            <div className='navbar'>
            <img className='logo' src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" />
            <h3 className='logo-name'>Emoji Game</h3>
            <div className='score'>
              <p className='score-card'>Score: {this.props.score}</p>
              <p>Top Score: {this.props.topScore}</p>
            </div>
          </div>
        )
    }
}
export default Navbar;