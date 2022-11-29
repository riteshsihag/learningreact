import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import home from './Common/Components/HomePage/home';
import login from './Common/Components/LoginPage/login';
import JobRoute from './Jobs/Components/JobRoute/jobRoute';
import Details from './Jobs/Components/JobDetails/details';
import NotFound from './Common/Components/NotFound/notfound';
import ProtectedRoute from './Common/Components/ProtectedRoute/protectedRoute';

class App extends Component {
  
  render() {
   
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={login}/>
      <ProtectedRoute exact path="/" component={home}/>
      <ProtectedRoute exact path="/jobs" component={JobRoute}/>
      <ProtectedRoute exact path="/jobs/:id" component={Details}/>
      <ProtectedRoute path='*' component={NotFound}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
