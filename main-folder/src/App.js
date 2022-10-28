import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from './Component/LoginPage/login';
import Submit from './Component/MainPage/home';
class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <h1 className='heading'>Registration</h1>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/submitted" component={Submit}/>
      </Switch>
     
      </BrowserRouter>
    );
  }
}

export default App;
