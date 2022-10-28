import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ProtectedRoute } from './Components/ProtectedRoute/protectedroute';
import { Home } from './Components/Home/home';
import { About } from './Components/About/about';
import { Login } from './Components/Login/login';
import { NotFound } from './Components/NotFound/notfound';
class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login}/>
      <ProtectedRoute exact path='/' component={Home} />
      <ProtectedRoute exact path='/about' component={About} />
      <NotFound/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
