import './App.css';
import Card from './Component/card';
import Card2 from './Component/card2';
import { Component } from 'react';
import content from './constants/content';
import details from './constants/detail';
import Card3 from './Component/card3';

class App extends Component {
  state = {
    commonId: content[0].id,
    searchInput: "",
    randomImg: 0,
    score: 0,
    isgameFinished: false,
    seconds: 10
  }

  clickImg = (id) => {
    this.setState({ commonId: id })
  }


  countDown = () => {
    const {isgameFinished} = this.state;
    if (!isgameFinished) {
        this.setState(prevState => ({
          seconds: prevState.seconds - 1
        }))
      }
    }

   

    clearTime=()=>{
      clearInterval();
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
      this.setState({ isgameFinished: true })
    }
  }
  render() {
    const { commonId, randomImg, score, isgameFinished, seconds } = this.state;
    const similarImg = this.findSimilarImg();
    return (
      <>
        <h1>Score: {score}</h1>
        <h2>Time: {seconds}</h2>
        {isgameFinished ? "GameOver"
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
