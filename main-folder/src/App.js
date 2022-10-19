import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Component/home';
import NotFound from './Component/notfound';
class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path='*' component={NotFound}/>
      </Switch>
     
      </BrowserRouter>
    );
  }
}

export default App;
