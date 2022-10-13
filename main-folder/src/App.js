import './App.css';
import Card from './Component/card';
import { Component } from 'react';
import content from './constants/content';

class App extends Component {
  state = {
    num:0,
    count:0
  }
  random = (prevState) => {
   this.setState({
    num:Math.floor((Math.random()*10)),
    count: prevState.count + 1
  }) 
  }
  render() {
    
   const {num, count} = this.state
    return (
      <>
    <div>
     {num%2===0?<img src="https://assets.ccbp.in/frontend/react-js/heads-img.png"/>: <img src="https://assets.ccbp.in/frontend/react-js/tails-img.png"/>}  
      <button onClick={this.random}>Toss Coin</button>
     </div>
     <p>Total:{count}</p>
      </>
    );
  }
}

export default App;
