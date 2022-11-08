import {Component} from 'react';

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
class MainPage extends Component {
 state={
    yourSelection: '',
    opponentSelection: '',
    score: 0,
    isPlayed: false
 }
 getYourSelection=(event)=>{
    const {opponentSelection, yourSelection} = this.state
      if(opponentSelection===yourSelection){
        this.setState(prevState=>({
          score: prevState.score+1
        }))
      }
      if(opponentSelection!==yourSelection){
        this.setState(prevState=>({
            score: prevState.score-1
          }))
      }
    this.setState({yourSelection: event.target.id, opponentSelection: rpsList[Math.floor(Math.random()*rpsList.length)].id, isPlayed:true})
 }
 playAgain=()=>{
  this.setState({isPlayed: false})
 }
render(){
    const {score, isPlayed, yourSelection, opponentSelection} = this.state
    const yourSelectedImg = rpsList.find(item=>
        yourSelection===item.id     
    )
    const opponentSelectedImg = rpsList.find(item=>
        opponentSelection===item.id     
    )
  return(
  <>
   <h1>SCORE {score}</h1>
  {isPlayed? 
  <div>
    <img src={yourSelectedImg.imageUrl}/>
    <img src={opponentSelectedImg.imageUrl}/>
    <h1>{opponentSelectedImg===yourSelectedImg?'You Won': 'You Loss'}</h1>
   <button onClick={this.playAgain}>Play Again</button>
  </div>
  :
  <>
  {rpsList.map(item=>{
   return <img onClick={this.getYourSelection} id={item.id} className='rps-img' src={item.imageUrl}/>
  })}
  </>
  }
 
  </>
  )
}
}

export default MainPage;
