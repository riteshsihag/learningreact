import './App.css';
import {Component} from 'react';
import Button from './Components/Button'
class App extends Component {
render(){
  return(
    <div className='App'>
    <h2>Welcome</h2>
    <p>Thank you! Happy Learning</p>
    <Button name = "Subscribe"/> 
    </div>
  )
}
}

export default App;
