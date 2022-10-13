import './App.css';
import Card from './Component/card';
import { Component } from 'react';

 const content = [
  {
    link: "https://img.icons8.com/cotton/64/000000/sad.png",
    mood: "Sad"
  },
  {
    link: "https://img.icons8.com/emoji/48/000000/neutral-face.png",
    mood: "None"
  },
  {
    link: "https://img.icons8.com/fluency/48/000000/lol.png",
    mood: "Happy"
  }
]
class App extends Component {
 
  state = {feedDone : false}
  clickEmoji = () =>{
   this.setState(prevState =>{
   return {feedDone: !prevState.feedDone}
   })
  }
  render() {
const {feedDone} = this.state;
    return (
      <>
      {feedDone? 
      
      <div className='thank'>
      <img src="https://img.icons8.com/fluency/48/000000/like.png" />
      <h4>Thank You</h4>
      <p>We will use your feedback to improve our customer support performance</p>
    </div>
    :
    <div className='container'>
        <h3>How satisfied are you with our customer support performance?</h3>
        <div className='emoji'>
          {content.map(item => {
            return <Card clickEmoji={this.clickEmoji} mood={item.mood} url={item.link} />
          })}
        </div>
      </div>

  }
      
     
    </>
    );
  }
}

export default App;
