import './App.css';
import Card from './Component/card';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialcontent = [
  {
    id: uuidv4(),
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]
class App extends Component {

  state = {
    content:initialcontent,
    clickedEmojis:[],
    topScore:0,
    gameStopped : false
  }

  getrandomEmoji = (id) => {
    const {clickedEmojis} = this.state
    if(clickedEmojis.includes(id)){
      this.setState(prevState=>{return {gameStopped: !prevState.gameStopped}})
    }
    this.setState(prevState=>{
     return {
      content: prevState.content.sort(() => Math.random()-0.5),
      clickedEmojis: [...prevState.clickedEmojis,id]
    }
    })
  }

  render() {
    const {content,clickedEmojis,gameStopped} = this.state
    return (
      <>
      <div className='navbar'>
      <img className='logo' src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"/>
      <h3 className='logo-name'>Emoji Game</h3>
      <div className='score'>
       <p className='score-card'>Score: {clickedEmojis.length}</p>
       <p>Top Score: 0</p>
      </div>
      </div>
      <div className='emoji-container'>
        {gameStopped?"Game is finished":
        <>
         {content.map(item => {
          return <Card id={item.id} getrandomEmoji={this.getrandomEmoji} url={item.emojiUrl} />
        })}
        </>
        }
     
      </div>
      </>
    );
  }
}

export default App;
