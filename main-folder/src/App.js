import './App.css';
import { Component } from 'react';
import Navbar from './Components/Navbar/nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
       <div className='container'>
        <Navbar/>
      <Switch>
       <Route exact path={'./home'} component={<Home/>}/>
       <Route exact path={'./about'} component={<About/>}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
