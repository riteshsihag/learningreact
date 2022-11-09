import { Component } from 'react';

const rpsList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
const result = {
  won: 'You Won',
  loss: 'You Loss',
  draw: 'Draw'
}
class MainPage extends Component {
  state = {
    score: 0,
    isPlayed: false,
    yourResult: '',
    yourSelection: '',
    opponentSelectedImg: ''
  }


  getYourSelection = (event) => {
    const opponentSelection = rpsList[Math.floor(Math.random() * rpsList.length)].id
    const yourSelection = event.target.id
    this.setState({ isPlayed: true, yourSelection: yourSelection, opponentSelection: opponentSelection })
    console.log(yourSelection)
    console.log(opponentSelection)
    if ((opponentSelection === 'SCISSORS' && yourSelection === 'ROCK') || (opponentSelection === 'PAPER' && yourSelection === 'SCISSORS') || (opponentSelection === 'ROCK' && yourSelection === 'PAPER')) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        yourResult: result.won
      }))
    }
    else if ((opponentSelection === 'ROCK' && yourSelection === 'SCISSORS') || (opponentSelection === 'SCISSORS' && yourSelection === 'PAPER') || (opponentSelection === 'PAPER' && yourSelection === 'ROCK')) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        yourResult: result.loss
      }))
    }
    else {
      this.setState(prevState => ({
        score: prevState.score,
        yourResult: result.draw
      }))
    }

  }
  playAgain = () => {
    this.setState({
      isPlayed: false,
      yourSelection: '',
      opponentSelectedImg: ''
    })
  }
  render() {
    const { score, isPlayed, yourSelection, opponentSelection, yourResult } = this.state
    const yourSelectedImg = rpsList.find(item =>
      yourSelection === item.id
    )
    const opponentSelectedImg = rpsList.find(item =>
      opponentSelection === item.id
    )
    return (
      <>
      <div className='score-container'>
        <div>
          <h3>ROCK</h3>
          <h3>PAPER</h3>
          <h3>SCISSORS</h3>
        </div>
        <div className='score'>
        <span><h2>Score</h2> <h1>{score}</h1></span>
        </div>

      </div>
        {isPlayed ?
          <div className='result'>
            <div className='result-container'>
            <div className='you'>
              <h2>You</h2>
              <img src={yourSelectedImg.imageUrl} />
            </div>
            <div className='opponent'>
              <h2>Opponent</h2>
              <img src={opponentSelectedImg.imageUrl} />
            </div>
            </div>
           
            <h1>{yourResult}</h1>
            <button onClick={this.playAgain}>Play Again</button>
          </div>
          :
          <div className='img'>
            {rpsList.map(item => {
              return <img onClick={this.getYourSelection} id={item.id} className='rps-img' src={item.imageUrl} />
            })}
          </div>
        }

      </>
    )
  }
}

export default MainPage;
