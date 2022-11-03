import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Component/MainPage/home';
import NotFound from './Component/NotFound/notfound';
import Login from './Component/LoginPage/login';
import ProtectedRoute from './Component/ProtectedRoute/protectedRoute';
class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={Login}/>
      <ProtectedRoute exact path="/" component={Home}/>
      <ProtectedRoute path='*' component={NotFound}/>
      </Switch>
     
      </BrowserRouter>
    );
  }
}

export default App;
