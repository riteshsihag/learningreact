import './App.css';
import { Component } from 'react';
import Slick from './Components/Slick/slick';

class App extends Component {
 
  render() {
    return (
      <div className='container'>
        <h1 className='heading'>Planets</h1>
        <Slick/>
      </div>
    );
  }
}

export default App;
