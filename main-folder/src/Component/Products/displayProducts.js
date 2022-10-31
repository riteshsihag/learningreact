import { Component } from 'react';
import Navbar from '../NavBar/navbar';
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