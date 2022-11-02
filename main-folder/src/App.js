import './App.css';
import { Component } from 'react';
import DashBoard from './Components/Dashboard/dashboard';

class App extends Component {
 
  render() {
    return (
      <div className='container'>
        <div className='logo'>
          <img src='https://assets.ccbp.in/frontend/react-js/cowin-logo.png'/>
          <h1>Co-WIN</h1>
        </div>
        <h1 className='heading'>Co-WIN Vaccination in India</h1>
        <DashBoard/>
      </div>
    );
  }
}

export default App;
