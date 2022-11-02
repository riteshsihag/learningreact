import './App.css';
import { Component } from 'react';
import List from './Components/List/list';

class App extends Component {
 
  render() {
    return (
      <div className='container'>
        <h1 className='heading'>Alert Notifications</h1>
      <List/>
      </div>
    );
  }
}

export default App;
