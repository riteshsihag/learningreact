import { Component } from 'react';
import './card.css';
class Finished extends Component {

    render() {
        const {playAgain} = this.props;
        var result;
        var src;
        if(this.props.score<12){
            result = "You Lose"
            src = "https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        }
        else{
            result = "You Win"
            src = "https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        }
        const startGame = () =>{
            playAgain()
        }
        return (
           <div className='finished' >
          <div className='game-details'>
          <h1>{result}</h1>
          <h3>Score</h3>
          <p>{this.props.score}/12</p>
          <button onClick={startGame}>Play Again</button>
          </div>
          <div className="finished-img">
            <img src={src} />
          </div>
           </div>
        )
    }
}
export default Finished;