import Cookies from 'js-cookie';
import { Component } from 'react';
import Product from './product';
import './product.css'

class AllProduct extends Component {
 state = {
    allProducts : []
 }

 componentDidMount(){
   this.getProducts()
 }
 getProducts= async()=>{
    const url = "https://apis.ccbp.in/products"
    const jwtToken = Cookies.get('jwt_token')
    const options = {
        method: 'GET',
        headers :  {Authorization: `Bearer ${jwtToken}`,}
    }
    const response = await fetch(url,options)
    if(response.ok === true){
        const data = await response.json()
    console.log(data)

        const updatedData = data.products.map((product)=>({
            title: product.title,
            brand: product.brand,
            price: product.price,
            id: product.id,
            imageUrl: product.image_url,
            rating: product.rating,
        }))
        this.setState({allProducts: updatedData})
    }
 }
  render() {
   const {allProducts} = this.state
    return (
     <>
     <h1 className='product-heading'>All Products</h1>
     <div className='all-products'>
     {allProducts.map(product=>{
     return <Product productList = {product} />
     })}
     </div>
     </>
    )
  }
}
export default AllProduct;