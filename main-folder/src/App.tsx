import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import home from './Common/Routes/HomePage/home';
import login from './Common/Routes/LoginPage/login';
import Details from './Jobs/Components/JobDetails/details';
import NotFound from './Common/Routes/NotFound/notfound';
import ProtectedRoute from './Common/Routes/ProtectedRoute/protectedRoute';
import JobRoute from './Jobs/Routes/JobRoute/jobRoute';

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
