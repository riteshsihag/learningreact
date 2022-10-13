import './App.css';
import Card from './Component/card';
import { Component } from 'react';
import content from './constants/content';

class App extends Component {
  
  render() {
    const random = Math.floor((Math.random()*10))
    const even = random%2===0;
   
    return (
      <>
    <div>
     {even:<img src="https://assets.ccbp.in/frontend/react-js/heads-img.png"/>}  
       <img src="https://assets.ccbp.in/frontend/react-js/tails-img.png"/>
     </div>
      </>
    );
  }
}

export default App;
