import './App.css';
import { Component } from 'react';
class App extends Component {

  state = ({
    isStart: false,
    timer: 25,
    seconds: 0
  })

  countDownTime = () => {
    const { timer, seconds } = this.state;
    const timerFinished = seconds === timer * 60;
    if (timerFinished) {
      this.setState({ isStart: false, seconds: 0 })
    }
    else {
      this.setState(prevState => ({ seconds: prevState.seconds + 1 }))
    }
  }

  clearTimer = () => {
    clearInterval(this.intervalId)
  }
  toggleStart = () => {
    const { isStart } = this.state;

    if (isStart) {
      this.clearTimer()
    }
    else {
      this.intervalId = setInterval(() => {
        this.countDownTime()
      }, 1000)
    }
    this.setState(prevState => ({
      isStart: !prevState.isStart
    }))
  }



  resetTimer = () => {
    this.clearTimer();
    this.setState({
      isStart: false,
      timer: 25,
      seconds: 0
    })
  }

  decrease = () => {
    const { isStart } = this.state;
    if (!isStart) {
      this.setState(prevState => ({
        timer: prevState.timer - 1
      }))
    }
  }
  increase = () => {
    const { isStart } = this.state;
    if (!isStart) {
      this.setState(prevState => ({
        timer: prevState.timer + 1
      }))
    }
  }

  displayTimer = () => {
    const { timer, seconds } = this.state;
    const timeToSecond = timer * 60 - seconds;
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
    const { isStart, timer } = this.state;
    return (
      <>
        <h1 className='heading'>Digital Timer</h1>
      <div className='container'>
      
      <div className='timer-img'>
        <div className='display-timer'>
          <h1 className='time'>{this.displayTimer()}</h1>
          <p className='time-para'>{isStart ? "Running" : "Paused"}</p>
        </div>
        </div>
        <div className='timer-settings'>
          <div className='play-setting'>
          <span className='start'>
            <img className='start-img' onClick={this.toggleStart} src={isStart ? "https://assets.ccbp.in/frontend/react-js/pause-icon-img.png" : "https://assets.ccbp.in/frontend/react-js/play-icon-img.png"} />
            <p>{isStart ? "Pause" : "Start"}</p>
          </span>
          <span className='reset'>
            <img className='reset-img' onClick={this.resetTimer} src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" />
            <p>Reset</p>
          </span>
          </div>
          <p className='limit'>Set Timer limit</p>
          <div className='setTimer'>
            <p onClick={this.decrease}>-</p>
            <span className='set-btn'>{timer}</span>
            <p onClick={this.increase}>+</p>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;
