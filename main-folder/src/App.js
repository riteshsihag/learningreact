import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Component/MainPage/home';
import NotFound from './Component/NotFound/notfound';
import Login from './Component/LoginPage/login';
import Cart from './Component/Cart/cart';
import ProtectedRoute from './Component/ProtectedRoute/protectedRoute';
import DisplayProducts from './Component/Products/displayProducts';
import Details from './Component/ProductDetails/details';
import {withRouter} from 'react-router-dom'
class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={Login}/>
      <ProtectedRoute exact path="/" component={Home}/>
      <ProtectedRoute exact path="/products" component={DisplayProducts}/>
      <ProtectedRoute exact path="/cart" component={Cart}/>
      <ProtectedRoute exact path="/products/:id" component={withRouter(Details)} />
      <ProtectedRoute path='*' component={NotFound}/>
      </Switch>
     
      </BrowserRouter>
    );
  }
}

export default App;
