import {Component} from 'react';
import './card.css';
class GameOver extends Component{
   
    render(){
        const {gameStarted} = this.props;
        const startGame=()=>{
            gameStarted()
        }
        return(
            <div className='game'>
              <img className='game-img' src="https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png"/>
              <img className='trophy' src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"/>
              <p className='your'>Your Score</p>
              <h1 className='your-score'>{this.props.score}</h1>
              <button onClick={startGame}>Play Again</button>
            </div>
        )
    }
}
export default GameOver;