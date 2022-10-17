import './App.css';
import { Component } from 'react';
class App extends Component {

  state = ({
    isStart: false,
    timer: 0,
    seconds: 0
  })

  countDownTime = () => {
      this.setState(prevState => ({ seconds: prevState.seconds + 1 }))
  }

  clearTimer = () => {
    clearInterval(this.intervalId)
  }

  toggleStart = () => {
      this.intervalId = setInterval(() => {
        this.countDownTime()
      }, 1000)
    
    this.setState({
      isStart: true
    })
  }

  stop=()=>{
    this.clearTimer();
    this.setState({
      isStart: false
    })
  }

  resetTimer = () => {
    this.clearTimer();
    this.setState({
      isStart: false,
      timer: 0,
      seconds: 0
    })
  }

  
  displayTimer = () => {
    const { timer, seconds } = this.state;
    const timeToSecond = timer * 60 + seconds;
    var min = Math.floor(timeToSecond / 60);
    var sec = Math.floor(timeToSecond % 60);
    if (min < 10) {
      min = `0${min}`
    }
    if (sec < 10) {
      sec = `0${sec}`
    }
    return `${min}:${sec}`
  }

  render() {
    return (
      <>
      <h1 className='heading'>StopWatch</h1>
       <div className='stopwatch'>
        <div className='timer-head'>
          <img className='timer-img' src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"/>
          <h3>Timer</h3>
        </div>
         <h1>{this.displayTimer()}</h1>
         <div className='timer-setting'>
         <button className='start' onClick={this.toggleStart}>Start</button>
         <button className='stop' onClick={this.stop}>Stop</button>
         <button className='reset' onClick={this.resetTimer}>Reset</button>
         </div>
       </div>
      </>
    );
  }
}

export default App;
