import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    num: 0,
    count: 0,
    head:0,
    tail:0
  }
  random = () => {
    const ran = Math.floor((Math.random() *17));
    this.setState(prevState=>{
      return {
      num: ran,
      count: prevState.count + 1
    }})
    if(ran%2===0){
      this.setState(prevState=>{
        return {
        head: prevState.head + 1
      }})
    }
    else{
      this.setState(prevState=>{
        return {
        tail: prevState.tail + 1
      }})
    }
   
  }
  render() {

    const { num, count, head, tail } = this.state
    return (
      <>
        <div>
          <h1>Coin Toss Game</h1>
          <h3>Head (or) Tail</h3>
          {num % 2 === 0 ? <img src="https://assets.ccbp.in/frontend/react-js/heads-img.png" /> : <img src="https://assets.ccbp.in/frontend/react-js/tails-img.png" />}
          <button onClick={this.random}>Toss Coin</button>
        </div>
        <div className='count'>
        <p>Total: {count}</p>
        <p>Head: {head}</p>
        <p>Tail: {tail}</p>
        </div>
      </>
    );
  }
}

export default App;
