import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Component/MainPage/home';
import NotFound from './Component/NotFound/notfound';
import Login from './Component/LoginPage/login';
class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route path='*' component={NotFound}/>
      </Switch>
     
      </BrowserRouter>
    );
  }
}

export default App;
