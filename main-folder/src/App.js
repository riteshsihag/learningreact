import './App.css';
import Card from './Component/card';
import Card2 from './Component/card2';
import { Component } from 'react';
import content from './constants/content';
import details from './constants/detail';
import Card3 from './Component/card3';
import GameOver from './Component/gameover';

class App extends Component {
  state = {
    commonId: content[0].id,
    searchInput: "",
    randomImg: 0,
    score: 0,
    isgameFinished: false,
    seconds: 60
  }

  clickImg = (id) => {
    this.setState({ commonId: id })
  }


  countDown = () => {
    const { isgameFinished,seconds } = this.state;
    if (!isgameFinished) {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1
      }))
    }
    if(seconds===1){
      this.componentWillUnmount();
      this.setState({
        isgameFinished: true
      })
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.countDown()
    }, 1000)
  }

componentWillUnmount(){
  clearInterval(this.intervalId)
}


  findSimilarImg = () => {
    const { commonId } = this.state;
    const similarImg = content.filter(element => {
      return element.id === commonId
    })
    return similarImg;
  }

  changeImage = (Imageid) => {
    const { randomImg } = this.state;
    const randomNumber = Math.floor(Math.random() * content.length);
    if (Imageid === content[randomImg].uniqueID) {
      this.setState(prevState => ({
        randomImg: randomNumber,
        score: prevState.score + 1
      }));
    }
    else {
      this.setState({ isgameFinished: true , seconds:0})
    }
  }
  gameStarted=()=>{
    this.setState({
      isgameFinished:false,
      seconds:60,
      score:0
    })
  }
  render() {
    const { commonId, randomImg, score, isgameFinished, seconds } = this.state;
    const similarImg = this.findSimilarImg();
    return (
      <>
      <div className='nav'>
      <img className='logo' src='https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png'/>
      <div className='scores'>
        <h1 className='score'>Score: {score}</h1>
        <h1 className='seconds'>Time: {seconds}</h1>
        </div>
      </div>
     
        {isgameFinished ?
         <>
        <GameOver gameStarted={this.gameStarted} score={score}/>
        
        </>
          :
          <>
            <div>
              <Card3 changeImage={this.changeImage} key={content[randomImg].uniqueID} url={content[randomImg].thumbnailUrl} />
            </div>
            <div className='img-container'>
              {details.map(item => {
                return <Card key={item.uniqueID} clickImg={this.clickImg} contentlist={item.id} name={item.name} isActive={commonId === item.id} />
              })}</div>

            <div className='big-container'>
              {similarImg.map(item => {
                return <Card2 Imageid={item.uniqueID} changeImage={this.changeImage} key={item.uniqueID} name={item.name} url={item.imageUrl} />
              })}
            </div>

          </>

        }

      </>
    );
  }
}

export default App;
