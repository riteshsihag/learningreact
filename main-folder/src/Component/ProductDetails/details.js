import Cookies from 'js-cookie';
import { Component } from 'react';
import './details.css'

class AllProduct extends Component {
 state = {
    allProducts : [],
    isLoading : false,
 }

 componentDidMount(){
   this.getProducts()
 }
 getProducts= async()=>{
  this.setState({isLoading:true})

    const url = `https://apis.ccbp.in/products/:id`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
        method: 'GET',
        headers :  {Authorization: `Bearer ${jwtToken}`,}
    }
    const response = await fetch(url,options)
    console.log(response)
    if(response.ok === true){
        this.setState({apiStatus: apiStatusConstants.success})
        const data = await response.json()

        const updatedData = data.products.map((product)=>({
            title: product.title,
            brand: product.brand,
            price: product.price,
            id: product.id,
            imageUrl: product.image_url,
            rating: product.rating,
            totalReviews: product.total_reviews,
            availability: product.availability,
            description: product.description,
            similarProducts: product.similar_products
        }))
      
        this.setState({allProducts: updatedData, isLoading: false})
    }  
 }
 
  render() {
   
    return(
        <>

        </>
    )
       
   }
   
  }

export default AllProduct;