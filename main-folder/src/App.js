import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from './Component/LoginPage/login';
import ProtectedRoute from './Component/ProtectedRoute/protectedRoute';
import Home from './Component/HomePage/home';
import Trending from './Component/Trending/trending';
import Gaming from './Component/Gaming/gaming';
class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={Login}/>
      <ProtectedRoute exact path='/' component={Home}/>
      <ProtectedRoute exact path='/trending' component={Trending}/>
      <ProtectedRoute exact path='/gaming' component={Gaming}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
