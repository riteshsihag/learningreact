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
import CartContext from './CartContext/cartContext';
class App extends Component {
  state = {
    cartList: [],
  }
  addCartItem = (value) => {
    this.setState((prevState)=>(

      {cartList: [...prevState.cartList, value]}
      
      )) }
      decreaseItem = (id) => {
        const {cartList} = this.state
       this.setState({cartList: cartList.map(item=>{
        if(id===item.id && item.noOfItems>1){
         return {...item, noOfItems: item.noOfItems-1}
        }
        else{
          return item
        }
       })})
       
    }
    increaseItem = (id) => {
      const {cartList} = this.state
      this.setState({cartList: cartList.map(item=>{
        if(id===item.id){
         return {...item, noOfItems: item.noOfItems+1}
        }
        else{
          return item
        }
       })})
    }
   

      deleteCartItem = () => { }
  render() {
    const { cartList , totalValue} = this.state
    console.log(totalValue)

    return (
      <CartContext.Provider value={{ cartList, addCartItem: this.addCartItem, deleteCartItem: this.deleteCartItem , decreaseItem: this.decreaseItem, increaseItem:this.increaseItem}}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/products" component={DisplayProducts} />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <ProtectedRoute exact path="/products/:id" component={Details} />
            <ProtectedRoute path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    );
  }
}

export default App;
