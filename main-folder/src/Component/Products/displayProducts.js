import { Component } from 'react';
import Navbar from '../NavBar/navbar';
import Details from '../ProductDetails/details';
import ProductDetail from '../ProductDetails/displayDetails';
import AllProduct from './allproducts';
import PrimeDeal from './primeDeals';
import './product.css'
class DisplayProducts extends Component {
 
  render() {
    return (
     <>
     <Navbar/>
     <PrimeDeal/>
     <AllProduct/>
     </>
    )
  }
}
export default DisplayProducts;