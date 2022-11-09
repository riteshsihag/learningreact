import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from './Component/LoginPage/login';
import ProtectedRoute from './Component/ProtectedRoute/protectedRoute';
import Home from './Component/HomePage/home';
class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={Login}/>
      <ProtectedRoute exact path='/' component={Home}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
