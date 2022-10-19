import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './Component/navbar';
import Home from './Component/home';
import Contact from './Component/contact';
import About from './Component/about';
import NotFound from './Component/notfound';
import ListItem from './Component/listItem';
class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <Navbar/>
     
      <Switch>
      
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/blogs/:id" component={ListItem} />
      <Route path='*' component={NotFound}/>
      </Switch>
     
      </BrowserRouter>
    );
  }
}

export default App;
