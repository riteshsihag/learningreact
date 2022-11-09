import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from './Component/LoginPage/login';
class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={Login}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
